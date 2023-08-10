import { Style, Icon } from 'ol/style';

export enum ObjectTypes {
  Candypop = 'candypop',
  Conveyor = 'conveyor',
  Fan = 'fan',
  Fence = 'fence',
  FirePit = 'firePit',
  Gate = 'gate',
  GlowPellets = 'glowPellets',
  HydroJelly = 'hydroJelly',
  Item = 'item',
  MapLink = 'mapLink',
  Materials = 'materials',
  Mound = 'mound',
  Pikmin = 'pikmin',
  Pot = 'pot',
  Shortcut = 'shortcut',
  Straw = 'straw',
  Switch = 'switch',
  Structure = 'structure',
  Treasure = 'treasure',
  Water = 'water',
  Zipline = 'zipline', // aka the "Slide Rails"
}

const ROOT_ICON_URL = '/images/icons/radar';
export const MarkerStyles = Object.fromEntries(
  Object.values(ObjectTypes).map(obj => {
    return [
      obj,
      new Style({
        image: new Icon({
          src: ROOT_ICON_URL + '/' + obj + '.png'
        })
      })
    ];
  })
);
