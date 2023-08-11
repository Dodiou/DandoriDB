import { Style, Icon } from 'ol/style';

export enum ObjectTypes {
  Base = 'base',
  // Berry = 'berry',
  Candypop = 'candypop',
  Castaway = 'castaway',
  CaveLink = 'caveLink',
  Conveyor = 'conveyor',
  Drain = 'drain',
  Fan = 'fan',
  Fence = 'fence',
  FirePit = 'firePit',
  FloorObstacle = 'floor',
  Gate = 'gate',
  GlowPellets = 'glowPellets',
  HeatObstacle = 'heatObstacle',
  HydroJelly = 'hydroJelly',
  Item = 'item',
  Materials = 'materials',
  Mound = 'mound',
  Onion = 'onion',
  Pikmin = 'pikmin',
  Pot = 'pot',
  RopeFishing = 'ropeFishing',
  Shortcut = 'shortcut',
  Spout = 'spout',
  Switch = 'switch',
  Structure = 'structure',
  Treasure = 'treasure',
  Water = 'water'
}

const ROOT_ICON_URL = '/images/icons/radar';
export const MarkerStyles = Object.fromEntries(
  Object.values(ObjectTypes).map(obj => {
    return [
      obj,
      new Style({
        image: new Icon({
          src: ROOT_ICON_URL + '/' + obj + '.png',
          scale: 1,
        }),
      })
    ];
  })
);
