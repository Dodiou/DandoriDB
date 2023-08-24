import { Style, Icon } from 'ol/style';
import { Options } from 'ol/style/Icon';
import { Categories, Marker, MarkerType } from '../../api/types';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { Feature } from 'ol';
import { Point } from 'ol/geom';

const ROOT_ICON_URL = process.env.PUBLIC_URL + '/images/icons/radar';
// TODO
export const getIconOptions = (type: MarkerType): Pick<Options, 'src' | 'scale'> => {
  if (type === MarkerType.BreakableMound) {
    return {
      src: 'https://www.pikminwiki.com/images/9/95/Dirt_mound_icon.png',
      scale: 1.3
    }
  }
  else if (type === MarkerType.MiscIcicle) {
    return {
      src: 'https://www.pikminwiki.com/images/9/94/Icicle-like_crystal_icon.png'
    };
  }
  else if (type === MarkerType.BreakableCrystal) {
    return {
      src: 'https://www.pikminwiki.com/images/8/81/Small_crystal_icon.png',
      scale: 1.3
    }
  }
  else if (type === MarkerType.BreakableEgg) {
    return {
      src: 'https://www.pikminwiki.com/images/9/95/Egg_P3_icon.png',
      scale: 1.6
    }
  }
  else if (type === MarkerType.MiscHoney) {
    return {
      src: 'https://www.pikminwiki.com/images/1/1f/Nectar_icon.png',
      scale: 1.3
    }
  }
  else if (type === MarkerType.MiscStick) {
    return {
      src: 'https://www.pikminwiki.com/images/b/b5/Climbing_stick_icon.png',
      scale: 1.3
    }
  }
  else if (type === MarkerType.MiscSpicy) {
    return {
      src: 'https://www.pikminwiki.com/images/7/7a/Ultra-spicy_nectar_icon.png',
      scale: 1.3
    }
  }
  else if (type === MarkerType.SwitchDrain) {
    return {
      src: 'https://www.pikminwiki.com/images/d/d1/Clog_icon.png',
      scale: 1.3
    }
  }
  else if (type === MarkerType.MiscSpiderwort || type === MarkerType.MiscPellet) {
    return {
      src: ROOT_ICON_URL + '/' + type + '.png',
      scale: 0.25
    }
  }

  return {
    src: ROOT_ICON_URL + '/' + type + '.png'
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

export const getFeatureLayers = (groupedData: any): MapFeatureLayers => {
  const featureLayers: MapFeatureLayers = {};

  for (let i = 0; i < LayerOrder.length; i++) {
    const markerType = LayerOrder[i];
    if (!groupedData[markerType] || markerType === MarkerType.WaterWater || markerType === MarkerType.WaterSwamp) {
      continue;
    }

    // Categories are sorted by layer importance.
    const layerZIndex = 1000 - i;
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
