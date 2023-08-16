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

// TODO: rewrite this awful stuff
export enum MarkerIcons {
  BaseOnion = 'base-onion',
  BaseBeagle = 'base-beagle',
  // Berry = 'berry',
  CandypopRed = 'candypop-red',
  CandypopYellow = 'candypop-yellow',
  CandypopBlue = 'candypop-blue',
  CandypopPurple = 'candypop-purple',
  CandypopWhite = 'candypop-white',
  CandypopRock = 'candypop-rock',
  CandypopWing = 'candypop-wing',
  CandypopIce = 'candypop-ice',
  Castaway = 'castaway',
  CaveLinkBattle = 'caveLink-battle',
  CaveLinkCave = 'caveLink-cave',
  CaveLinkChallenge = 'caveLink-challenge',
  CaveLinkExit = 'caveLink-exit',
  Charcoal = 'charcoal',
  Creature = 'creature',
  Crystal = 'crystal',
  Conveyor = 'conveyor',
  Drain = 'drain',
  Egg = 'egg',
  Fan = 'fan',
  FenceNormal = 'fence-normal',
  FenceIron = 'fence-iron',
  FirePitUnlit = 'firePit',
  FirePitLit = 'firePit-lit',
  FloorObstacleFire = 'floor-fire',
  FloorObstacleMushroom = 'floor-mushroom',
  FloorObstacleMovable = 'floor-movable',
  GateBomb = 'gate-bomb',
  GateCrystal = 'gate-crystal',
  GateDirt = 'gate-dirt',
  GateElectric = 'gate-electric',
  GateIce = 'gate-ice',
  GateNumbered = 'gate-numbered',
  GlowPellets = 'glowPellets',
  GroupDropManager = 'groupDropManager',
  HeatObstacleIcebox = 'heatObstacle-iceBox',
  HeatObstacleStraw = 'heatObstacle-straw',
  HydroJelly = 'hydroJelly',
  Honey = 'honey',
  ItemBomb = 'item-bomb',
  ItemIceBomb = 'item-iceBomb',
  Icicle = 'icicle',
  Materials = 'materials',
  MushroomLarge = 'mushroom-large',
  MushroomSmall = 'mushroom-small',
  Mound = 'mound',
  OnionFlarlic = 'onion-flarlic',
  OnionRed = 'onion-red',
  OnionYellow = 'onion-yellow',
  OnionBlue = 'onion-blue',
  OnionPurple = 'onion-purple',
  OnionWhite = 'onion-white',
  OnionRock = 'onion-rock',
  OnionWing = 'onion-wing',
  OnionIce = 'onion-ice',
  PikminRed = 'pikmin-red',
  PikminYellow = 'pikmin-yellow',
  PikminBlue = 'pikmin-blue',
  PikminPurple = 'pikmin-purple',
  PikminWhite = 'pikmin-white',
  PikminRock = 'pikmin-rock',
  PikminWing = 'pikmin-wing',
  PikminIce = 'pikmin-ice',
  PelletRed = 'pellet-red',
  PelletYellow = 'pellet-yellow',
  PelletBlue = 'pellet-blue',
  PelletPurple = 'pellet-purple',
  PelletWhite = 'pellet-white',
  PelletRock = 'pellet-rock',
  PelletWing = 'pellet-wing',
  PelletIce = 'pellet-ice',
  Pot = 'pot',
  RopeFishing = 'ropeFishing',
  ShortcutBounce = 'shortcut-bounceShroom',
  ShortcutCharge = 'shortcut-chargeShroom',
  ShortcutClipboard = 'shortcut-clipboard',
  ShortcutClipboardYellow = 'shortcut-clipboardYellow',
  ShortcutPushBag = 'shortcut-pushbag',
  ShortcutStick = 'shortcut-stick',
  ShortcutString = 'shortcut-string',
  ShortcutSquashBag = 'shortcut-squashbag',
  ShortcutRoot = 'shortcut-root',
  StructureGeyser = 'shortcut-geyser',
  ShortcutZipline = 'shortcut-zipline',
  SpoutBubble = 'spout-bubble',
  SpoutElectric = 'spout-electric',
  SpoutFire = 'spout-fire',
  SpoutIce = 'spout-ice',
  SpoutPoison = 'spout-poison',
  SpoutWater = 'spout-water',
  Sprinkler = 'sprinkler',
  SwitchSingle = 'switch-single',
  SwitchDouble = 'switch-double',
  StructureBridge = 'structure-bridge',
  StructureSlope = 'structure-slope',
  StructureValve = 'structure-valve',
  StructureWall = 'structure-wall',
  Treasure = 'treasure',
  TunnelNormal = 'tunnel-normal',
  TunnelCaptain = 'tunnel-captain',
  TunnelOatchi = 'tunnel-pup',
}

const ROOT_ICON_URL = process.env.PUBLIC_URL + '/images/icons/radar';
const getIconOptions = (type: MarkerIcons): Pick<Options, 'src' | 'scale'> => {
  if (type === MarkerIcons.Mound) {
    return {
      src: 'https://www.pikminwiki.com/images/9/95/Dirt_mound_icon.png',
      scale: 1.3
    }
  }
  else if (type === MarkerIcons.Icicle) {
    return {
      src: 'https://www.pikminwiki.com/images/9/94/Icicle-like_crystal_icon.png'
    };
  }
  else if (type === MarkerIcons.Crystal) {
    return {
      src: 'https://www.pikminwiki.com/images/8/81/Small_crystal_icon.png',
      scale: 1.3
    }
  }
  else if (type === MarkerIcons.Egg) {
    return {
      src: 'https://www.pikminwiki.com/images/9/95/Egg_P3_icon.png',
      scale: 1.6
    }
  }
  else if (type === MarkerIcons.Honey) {
    return {
      src: 'https://www.pikminwiki.com/images/1/1f/Nectar_icon.png',
      scale: 1.3
    }
  }
  else if (type === MarkerIcons.ShortcutStick) {
    return {
      src: 'https://www.pikminwiki.com/images/2/2d/Wooden_stake_icon.png',
    }
  }

  return {
    src: ROOT_ICON_URL + '/' + type + '.png'
  };
}

export const MarkerStyles = Object.fromEntries(
  Object.values(MarkerIcons).map(obj => {
    return [
      obj,
      new Style({
        image: new Icon(getIconOptions(obj)),
      })
    ];
  })
);

export const getMarkerStyle = (obj: any) => {
  const { type, color, variant } = obj;
  // TODO: find a better way to set the styles up.
  let styleKey = '';
  if (type === ObjectTypes.Mushroom) {
    styleKey = obj.isLarge
      ? 'mushroom-large'
      : 'mushroom-small';
  }
  else if (type === ObjectTypes.FirePit) {
    styleKey = obj.isLit
      ? 'firePit-lit'
      : 'firePit';
  }
  else {
    styleKey = [type, color || variant].filter(v => v).join('-');
  }

  return MarkerStyles[styleKey];
};
