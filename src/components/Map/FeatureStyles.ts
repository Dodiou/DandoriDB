import { Style, Icon, Text, Fill, Stroke } from 'ol/style';
import { Options } from 'ol/style/Icon';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Feature } from 'ol';
import { Point } from 'ol/geom';
import { hsv } from 'color-convert';

import { randomInteger, round } from '../../util/math';
import { Categories, InfoType, Marker, MarkerType, Pin } from '../../api/types';

import PinSVG from './map-pin.svg';

// MAJOR TODO:
// Set all creature/treasure icon URLs to their respective folders elegantly
// Set all creature/treasure icon scales to 0.25 (besides treasure-kinkaistation.png) elegantly
// Do whatever else is needed to implement this lmao
//    i got the files and types set up, i'm not smart enough to figure out the rest

const ROOT_ICON_URL = process.env.PUBLIC_URL + '/images/icons/radar';

const URL_OVERRIDES: {[Type in MarkerType]?: string} = {
  [MarkerType.BreakableMound]: 'https://www.pikminwiki.com/images/9/95/Dirt_mound_icon.png',
  [MarkerType.BreakableCrystal]: 'https://www.pikminwiki.com/images/8/81/Small_crystal_icon.png',
  [MarkerType.BreakableEgg]: 'https://www.pikminwiki.com/images/9/95/Egg_P3_icon.png',
  [MarkerType.MiscHoney]: 'https://www.pikminwiki.com/images/1/1f/Nectar_icon.png',
  [MarkerType.MiscIcicle]: 'https://www.pikminwiki.com/images/9/94/Icicle-like_crystal_icon.png',
  [MarkerType.MiscStick]: 'https://www.pikminwiki.com/images/b/b5/Climbing_stick_icon.png',
  [MarkerType.MiscSpicy]: 'https://www.pikminwiki.com/images/7/7a/Ultra-spicy_nectar_icon.png',
  [MarkerType.SwitchDrain]: 'https://www.pikminwiki.com/images/d/d1/Clog_icon.png',
};
const SCALE_OVERRIDES: {[Type in MarkerType]?: number} = {
  [MarkerType.BreakableMound]: 1.3,
  [MarkerType.BreakableCrystal]: 1.3,
  [MarkerType.BreakableEgg]: 1.3,
  [MarkerType.MiscHoney]: 1.3,
  [MarkerType.MiscStick]: 1.3,
  [MarkerType.MiscSpicy]: 1.3,
  [MarkerType.SwitchDrain]: 1.3,
  [MarkerType.MiscSpiderwort]: 0.25,
  [MarkerType.MiscPellet]: 0.25,
}
export const getIconOptions = (type: MarkerType): Pick<Options, 'src' | 'scale'> => {
  const imgUrl: string = URL_OVERRIDES[type] || (ROOT_ICON_URL + '/' + type + '.png');
  const scale: number | undefined = SCALE_OVERRIDES[type]

  return {
    src: imgUrl,
    scale
  };
}

const MarkerStyles = Object.fromEntries(
  Object.values(MarkerType)
    .filter(type => type !== MarkerType.WaterSwamp && type !== MarkerType.WaterWater)
    .map(obj => {
      return [
        obj,
        new Style({
          image: new Icon(getIconOptions(obj)),
        })
      ];
    })
);

const TREASURE_TEXT_STYLE = new Text({
  fill: new Fill({ color: [255, 255, 255] }),
  stroke: new Stroke({ color: [0, 0, 0], width: 2 }),
  offsetY: 40,
  scale: 2
});
const PIN_TEXT_STYLE = TREASURE_TEXT_STYLE.clone();
PIN_TEXT_STYLE.setOffsetY(16);

interface TreasureMarker extends Omit<Marker, 'drops'> {
  type: MarkerType.Treasure;
  infoType: InfoType.Treasure;
  weight: number;
  carryMax: number;
  value: number;
  amount?: number;
  name: string;
  treasureId: string;
}

const isTreasure = (marker: Marker): marker is TreasureMarker => {
  return marker.infoType === InfoType.Treasure;
}

const getFeatures = (markerType: MarkerType, markers: Marker[]): Feature[] => {
  const globalMarkerStyle = MarkerStyles[markerType];
  return markers.map(marker => {
    const feature = new Feature({
      // Why are x and y flipped???
      geometry: new Point([marker.transform.translation.y, marker.transform.translation.x]),
      data: marker
    });

    let markerStyle = globalMarkerStyle.clone();
    if (marker.transform.rotation !== undefined) {
      markerStyle.getImage().setRotateWithView(true);
      // I *think* rotations look off b/c the images might need to be flipped along y = x, but I'm not sure.
      //   except conveyors... those rotations look correct
      markerStyle.getImage().setRotation(-(marker.transform.rotation) * Math.PI / 180);
    }

    if (isTreasure(marker)) {
      // include Gold Nugget amount as total weight
      const totalWeight = marker.weight * (marker.amount || 1);
      const totalValue = marker.value * (marker.amount || 1);
      // total value can be 0 for OST ship parts
      // TODO: remove value for challenge caves somehow
      const label = totalValue ? `${totalWeight} / ${totalValue}` : totalWeight + "";

      const textStyle = TREASURE_TEXT_STYLE.clone();
      textStyle.setText(label);

      markerStyle.setText(textStyle);
    }

    feature.setStyle(markerStyle);
    return feature;
  });
}

export type MapFeatureLayers = {
  [Type in MarkerType]?: VectorLayer<VectorSource>;
}

const LayerOrder: MarkerType[] = Categories.reduce((markerTypes, category) => {
  return [...markerTypes, ...category.markers];
}, [] as MarkerType[]);

const MAX_MARKER_Z_INDEX = 1000;
export const getFeatureLayers = (groupedData: any): MapFeatureLayers => {
  const featureLayers: MapFeatureLayers = {};

  for (let i = 0; i < LayerOrder.length; i++) {
    const markerType = LayerOrder[i];
    if (!groupedData[markerType] || markerType === MarkerType.WaterWater || markerType === MarkerType.WaterSwamp) {
      continue;
    }

    // Categories are sorted by layer importance.
    const layerZIndex = MAX_MARKER_Z_INDEX - i;
    const features = getFeatures(markerType, groupedData[markerType]);
    const layer = new VectorLayer({
      source: new VectorSource({
        features
      }),
      zIndex: layerZIndex
    })

    featureLayers[markerType] = layer;
  }

  return featureLayers;
};

export const getNewPin = ({ id, x, y }: { id: string, x: number, y: number }): Pin => {
  const h = randomInteger(0, 360);
  const v = randomInteger(50, 100);
  const color = hsv.rgb([h, 100, v])

  return {
    type: MarkerType.MapPin,
    infoType: InfoType.Misc,
    color,
    transform: {
      translation: {
        x: round(x, 3),
        y: round(y, 3)
      }
    },
    pinId: id
  };
}

export const getMapPins = (pins: Pin[]): VectorLayer<VectorSource<Point>> => {
  const features = pins.map(pin => {
    const feature = new Feature({
      // Note: x and y are flipped for consistency with other objects
      geometry: new Point([pin.transform.translation.y, pin.transform.translation.x]),
      data: pin
    });

    const textStyle = PIN_TEXT_STYLE.clone();
    textStyle.setText(pin.pinId);

    const pinStyle = new Style({
      image: new Icon({
        src: PinSVG,
        scale: 0.6,
        anchor: [0.5, 1],
        color: pin.color,
      }),
      text: textStyle
    });

    feature.setStyle(pinStyle);
    return feature;
  });

  return new VectorLayer({
    source: new VectorSource({
      features
    }),
    // show pins above all markers
    zIndex: MAX_MARKER_Z_INDEX + 1
  });
}
