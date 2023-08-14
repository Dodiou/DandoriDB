import { Style, Icon } from 'ol/style';
import { Options } from 'ol/style/Icon';

export enum ObjectTypes {
  Base = 'base',
  // Berry = 'berry',
  Candypop = 'candypop',
  Castaway = 'castaway',
  CaveLink = 'caveLink',
  Charcoal = 'charcoal',
  Creature = 'creature',
  Crystal = 'crystal',
  Conveyor = 'conveyor',
  Drain = 'drain',
  Egg = 'egg',
  Fan = 'fan',
  Fence = 'fence',
  FirePit = 'firePit',
  FloorObstacle = 'floor',
  Gate = 'gate',
  GlowPellets = 'glowPellets',
  GroupDropManager = 'groupDropManager',
  HeatObstacle = 'heatObstacle',
  HydroJelly = 'hydroJelly',
  Honey = 'honey',
  Item = 'item',
  Icicle = 'icicle',
  Materials = 'materials',
  Mushroom = 'mushroom',
  Mound = 'mound',
  Onion = 'onion',
  Pikmin = 'pikmin',
  Pellet = 'pellet',
  Pot = 'pot',
  RopeFishing = 'ropeFishing',
  Shortcut = 'shortcut',
  Spout = 'spout',
  Sprinkler = 'sprinkler',
  Switch = 'switch',
  Structure = 'structure',
  Treasure = 'treasure',
  Tunnel = 'tunnel',
  Water = 'water'
}

const ROOT_ICON_URL = '/images/icons/radar';
const getIconOptions = (type: ObjectTypes): Pick<Options, 'src' | 'scale'> => {
  if (type === ObjectTypes.Mound) {
    return {
      src: 'https://www.pikminwiki.com/images/9/95/Dirt_mound_icon.png',
      scale: 1.3
    }
  }
  else if (type === ObjectTypes.Icicle) {
    return {
      src: 'https://www.pikminwiki.com/images/9/94/Icicle-like_crystal_icon.png'
    };
  }
  else if (type === ObjectTypes.Crystal) {
    return {
      src: 'https://www.pikminwiki.com/images/8/81/Small_crystal_icon.png',
      scale: 1.3
    }
  }
  else if (type === ObjectTypes.Egg) {
    return {
      src: 'https://www.pikminwiki.com/images/9/95/Egg_P3_icon.png',
      scale: 1.6
    }
  }
  else if (type === ObjectTypes.Honey) {
    return {
      src: 'https://www.pikminwiki.com/images/1/1f/Nectar_icon.png',
      scale: 1.3
    }
  }

  return {
    src: ROOT_ICON_URL + '/' + type + '.png'
  };
}

export const MarkerStyles = Object.fromEntries(
  Object.values(ObjectTypes).map(obj => {
    return [
      obj,
      new Style({
        image: new Icon(getIconOptions(obj)),
      })
    ];
  })
);
