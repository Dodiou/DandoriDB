import { Style, Icon } from 'ol/style';
import { Options } from 'ol/style/Icon';
import { MarkerType } from '../../api/types';

const ROOT_ICON_URL = process.env.PUBLIC_URL + '/images/icons/radar';
// TODO
const getIconOptions = (type: MarkerType): Pick<Options, 'src' | 'scale'> => {
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
  else if (type === MarkerType.MiscSpiderwort) {
    return {
      src: 'https://www.pikminwiki.com/images/0/0b/Burgeoning_Spiderwort_P4_icon.png',
      scale: 0.25
    }
  }

  return {
    src: ROOT_ICON_URL + '/' + type + '.png'
  };
}

export const MarkerStyles = Object.fromEntries(
  Object.values(MarkerType).map(obj => {
    return [
      obj,
      new Style({
        image: new Icon(getIconOptions(obj)),
      })
    ];
  })
);

export const getMarkerStyle = (obj: any) => {
  return MarkerStyles[obj.type];
};
