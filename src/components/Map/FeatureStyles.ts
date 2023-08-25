import { Style, Icon } from 'ol/style';
import { Options } from 'ol/style/Icon';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Feature } from 'ol';
import { Point } from 'ol/geom';
import { hsv } from 'color-convert';

import { randomInteger, round } from '../../util/math';
import { Categories, InfoType, Marker, MarkerType, Pin } from '../../api/types';

import PinSVG from './map-pin.svg';

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

  if (type === MarkerType.ShortcutPushboxcardboard || type === MarkerType.ShortcutPushboxmetal) {
    console.log(imgUrl);
  }
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

const getFeatures = (markerType: MarkerType, markers: Marker[]): Feature[] => {
  const globalMarkerStyle = MarkerStyles[markerType];
  if (markerType === MarkerType.ShortcutPushboxcardboard || markerType === MarkerType.ShortcutPushboxmetal) {
    console.log("HERHE")
  }
  return markers.map(marker => {
    const feature = new Feature({
      // Why are x and y flipped???
      geometry: new Point([marker.transform.translation.y, marker.transform.translation.x]),
      data: marker
    });

    let markerStyle = globalMarkerStyle;
    if (marker.transform.rotation !== undefined) {
      markerStyle = markerStyle.clone();
      markerStyle.getImage().setRotateWithView(true);
      // I *think* rotations look off b/c the images might need to be flipped along y = x, but I'm not sure.
      //   except conveyors... those rotations look correct
      markerStyle.getImage().setRotation(-(marker.transform.rotation) * Math.PI / 180);
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

    const pinStyle = new Style({
      image: new Icon({
        src: PinSVG,
        scale: 0.6,
        anchor: [0.5, 1],
        color: pin.color
      })
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
