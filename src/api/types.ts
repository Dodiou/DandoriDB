
export const PikminColor = {
  Red: 'red',
  Yellow: 'yellow',
  Blue: 'blue',
  Purple: 'purple',
  White: 'white',
  Rock: 'rock',
  Wing: 'wing',
  Ice: 'ice',
  Glow: 'glow',
}

export const PikminSpawnState = {
  Sprouts: 'sprouts',
  Fighting: 'fighting',
  Idle: 'idle',
}

export enum MarkerType {
  // collectibles
  Treasure = 'treasure',
  CastawayNormal = 'castaway-normal',
  CastawayLeafling = 'castaway-leafling',
  Creature = 'creature',
  OnionFlarlic = 'onion-flarlic',
  OnionRed = 'onion-red',
  OnionYellow = 'onion-yellow',
  OnionBlue = 'onion-blue',
  OnionPurple = 'onion-purple',
  OnionWhite = 'onion-white',
  OnionRock = 'onion-rock',
  OnionWing = 'onion-wing',
  OnionIce = 'onion-ice',
  // pikmin
  PikminRed = 'pikmin-red',
  PikminYellow = 'pikmin-yellow',
  PikminBlue = 'pikmin-blue',
  PikminPurple = 'pikmin-purple',
  PikminWhite = 'pikmin-white',
  PikminRock = 'pikmin-rock',
  PikminWing = 'pikmin-wing',
  PikminIce = 'pikmin-ice',
  CandypopRed = 'candypop-red',
  CandypopYellow = 'candypop-yellow',
  CandypopBlue = 'candypop-blue',
  CandypopPurple = 'candypop-purple',
  CandypopWhite = 'candypop-white',
  CandypopRock = 'candypop-rock',
  CandypopWing = 'candypop-wing',
  CandypopIce = 'candypop-ice',
  // structures
  PileMaterials = 'pile-materials',
  StructureBridge = 'structure-bridge',
  StructureSlope = 'structure-slope',
  StructureValve = 'structure-valve',
  StructureWall = 'structure-wall',
  HazardSprinkler = 'hazardradial-sprinkler',
  // breakables
  BreakableHydrojelly = 'breakable-hydrojelly',
  BreakablePot = 'breakable-pot',
  BreakableKingcapnormal = 'breakable-kingcapnormal',
  BreakableSpotcapnormal = 'breakable-spotcapnormal',
  BreakableKingcappoison = 'breakable-kingcappoison',
  BreakableSpotcappoison = 'breakable-spotcappoison',
  MiscGroupdropmanager = 'misc-groupdropmanager',
  BreakableStraw = 'breakable-straw',
  BreakableIcebox = 'breakable-icebox',
  FirepitLit = 'firepit-lit',
  FirepitUnlit = 'firepit-unlit',
  BreakableCrystal = 'breakable-crystal',
  // items
  BreakableMound = 'breakable-mound',
  BreakableEgg = 'breakable-egg',
  MiscBomb = 'miscitem-bomb',
  MiscIcebomb = 'miscitem-icebomb',
  MiscSpicy = 'miscitem-spicy', // not an actual map marker, but is a drop marker
  MiscSpiderwort = 'misc-spiderwort',
  // hazards
  HazardSpoutFire = 'hazardspout-fire',
  HazardSpoutElectric = 'hazardspout-electric',
  HazardSpoutWater = 'hazardspout-water',
  HazardSpoutPoison = 'hazardspout-poison',
  HazardSpoutIce = 'hazardspout-ice',
  HazardSpoutBubble = 'hazardspout-bubble',
  HazardFloorfire = 'hazardradial-floorfire',
  HazardCharcoal = 'hazardmisc-charcoal',
  HazardFloormushroom = 'hazardradial-floormushroom',
  // shortcuts
  ShortcutClipboardhigh = 'shortcut-clipboardhigh',
  ShortcutClipboardlow = 'shortcut-clipboardlow',
  ShortcutPushbag = 'shortcut-pushbag',
  ShortcutPushboxcardboard = 'shortcut-pushboxcardboard',
  ShortcutPushboxmetal = 'shortcut-pushboxmetal',
  ShortcutRoot = 'shortcut-root',
  ShortcutStringup = 'shortcut-stringup',
  ShortcutStringdown = 'shortcut-stringdown',
  RidableGeyser = 'ridable-geyser',
  RidableZipline = 'ridable-zipline',
  TunnelAny = 'tunnel-any',
  TunnelCaptain = 'tunnel-captain',
  TunnelOatchi = 'tunnel-oatchi',
  PlatformBounce = 'platform-bounceshroom',
  PlatformCharge = 'platform-chargeshroom',
  RidableMovefloor = 'ridable-movefloor',
  // gates
  GateBomb = 'gate-bomb',
  GateCrystal = 'gate-crystal',
  GateDirt = 'gate-dirt',
  GateElectric = 'gate-electric',
  GateIce = 'gate-ice',
  GateNumbered = 'gate-numbered',
  ShortcutSquashbag = 'shortcut-squashbag',
  // switchables
  SwitchConveyor = 'switchable-conveyor',
  SwitchFan = 'switchable-fan',
  SwitchFenceiron = 'switchable-fenceiron',
  SwitchFencenormal = 'switchable-fencenormal',
  SwitchSingle = 'switchable-singleswitch',
  SwitchDouble = 'switchable-doubleswitch',
  // locations
  BaseOnion = 'base-beagle',
  BaseBeagle = 'base-onion',
  CaveEntrance = 'cave-entrance',
  CaveExit = 'cave-exit',
  CaveChallenge = 'cave-challenge',
  CaveBattle = 'cave-battle',
  // water
  WaterWater = 'water-water',
  WaterSwamp = 'water-swamp',
  SwitchDrain = 'switchable-drain',
  // misc
  MiscPullrope = 'misc-pullrope',
  MiscStick = 'misc-stick',
  MiscIcicle = 'misc-icicle',
  MiscHoney = 'miscitem-honey',
  MiscPellet = 'misc-pellet',
  // night
  NightLumiknoll = 'night-lumiknoll',
  NightTricknoll = 'night-tricknoll',
  PileGlowpellets = 'pile-glowpellets',
  // custom
  MapPin = 'ddb-pin'
}

export enum InfoType {
  Treasure = 'treasure',
  Castaway = 'castaway',
  Creature = 'creature',
  Onion = 'onion',
  Pikmin = 'pikmin',
  Candypop = 'candypop',
  Structure = 'structure',
  Pile = 'pile',
  Breakable = 'breakable',
  Firepit = 'firepit',
  Hazard = 'hazard',
  Shortcut = 'shortcut',
  Ridable = 'ridable',
  Platform = 'platform',
  Tunnel = 'tunnel',
  Gate = 'gate',
  Switchable = 'switchable',
  Base = 'base',
  Cave = 'cave',
  Water = 'water',
  Misc = 'misc',
  Night = 'night',
}

export interface __DropFUTURE {
  type: MarkerType;
  infoType: InfoType;
  chance: number;
  min: number;
  max: number;
}

export interface Drop {
  item: string,
  chance: number;
  min: number;
  max: number;
}

export interface Marker {
  type: MarkerType;
  infoType: InfoType;
  drops?: Drop[];
  transform: {
    translation: {
      x: number;
      y: number;
    };
    rotation?: number;
  }
}
// Order of priorities of drop items.
// Static drops, the chance does not matter
const StaticDropPriorities: {[key: string]: number} = Object.fromEntries(
  Object.entries([
    MarkerType.Treasure,
    MarkerType.CastawayNormal,
    MarkerType.CastawayLeafling,
    MarkerType.PikminRed,
    MarkerType.PikminYellow,
    MarkerType.PikminBlue,
    MarkerType.PikminPurple,
    MarkerType.PikminWhite,
    MarkerType.PikminRock,
    MarkerType.PikminWing,
    MarkerType.PikminIce,
    MarkerType.Creature,
  ]).map(([k,v]) => [v,+k])
);
// TODO figure this out later
const WeightedDropPriorities: {[key: string]: number} = {
  // Get the weight by:       chance threshold / amount threshold
  //   i.e for materials:     5 pieces * 0.5 chance will yield 1.
  [MarkerType.MiscBomb]:      100 / 29 / 1,
  [MarkerType.MiscIcebomb]:   100 / 30 / 1,
  [MarkerType.MiscSpicy]:     100 / 31 / 1,
  [MarkerType.PileMaterials]: 100 / 50 / 5,
  [MarkerType.MiscHoney]:     100 / 75 / 1,
  // no one cares about pellet drops
  [MarkerType.MiscPellet]:    100 / 80 / 1,
};

interface DropPriority {
  type: MarkerType;
  weight: number;
}
const getDropPriority = (drops: __DropFUTURE[]): DropPriority => {
  let maxIndex = 0;
  let maxWeight = WeightedDropPriorities[drops[0].type] || 0;

  // Note: start at zero to check it for a special type.
  for (let i = 0; i < drops.length; i++) {
    if (drops[i].type in StaticDropPriorities) {
      return {
        type: drops[i].type,
        weight: 1_000_000
      };
    }

    const dropWeight = WeightedDropPriorities[drops[i].type] || 0;
    if (dropWeight > maxWeight) {
      maxIndex = i;
      maxWeight = dropWeight;
    }
  }
  return {
    type: drops[maxIndex].type,
    weight: maxWeight
  };
}

const MarkerFilterWeights: {[key: string]: number} = {
  // don't overide gates (unless it's something important)
  [MarkerType.Creature]: 1000,
  // don't overide gates (unless it's something important)
  [MarkerType.GateBomb]: 1000,
  [MarkerType.GateCrystal]: 1000,
  [MarkerType.GateDirt]: 1000,
  [MarkerType.GateElectric]: 1000,
  [MarkerType.GateIce]: 1000,
  [MarkerType.GateNumbered]: 1000,
  [MarkerType.ShortcutSquashbag]: 1000,
  // don't overide mounds, unless it has items or lots of mats
  [MarkerType.BreakableMound]: 2.5,
  // breakables
  [MarkerType.BreakableHydrojelly]: 1.5, // takes awhile to break
  [MarkerType.BreakablePot]: 1,
  [MarkerType.BreakableKingcapnormal]: 1.5, // takes awhile to break
  [MarkerType.BreakableKingcappoison]: 1.5, // takes awhile to break
  [MarkerType.BreakableSpotcapnormal]: 1,
  [MarkerType.BreakableSpotcappoison]: 1,
  // misc
  [MarkerType.BreakableEgg]: 2.5, // don't override unless items
}
export const getFilterType = (marker: Marker): MarkerType => {
  return marker.type;
  // if (!marker.drops) {
  //   return marker.type;
  // }

  // // check the drops for the marker filter type
  // const dropPriority = getDropPriority(marker.drops);
  // const markerWeight = MarkerFilterWeights[marker.type] || 0;

  // return dropPriority.weight > markerWeight
  //   ? dropPriority.type
  //   : marker.type;
}

export const getDropType = (marker: Marker): MarkerType | undefined => {
  return undefined;

  // if (!marker.drops) {
  //   return undefined;
  // }

  // // highest priority drop
  // return getDropPriority(marker.drops).type;
}

export interface Category {
  label: string;
  markers: MarkerType[];
}

export const Categories: Category[] = [
  {
    label: 'Collectibles',
    markers: [
      MarkerType.Treasure,
      MarkerType.CastawayNormal,
      MarkerType.CastawayLeafling,
      MarkerType.Creature,
      MarkerType.OnionFlarlic,
      MarkerType.OnionRed,
      MarkerType.OnionYellow,
      MarkerType.OnionBlue,
      MarkerType.OnionPurple,
      MarkerType.OnionWhite,
      MarkerType.OnionRock,
      MarkerType.OnionWing,
      MarkerType.OnionIce,
    ]
  },
  {
    label: 'Pikmin',
    markers: [
      MarkerType.PikminRed,
      MarkerType.PikminYellow,
      MarkerType.PikminBlue,
      MarkerType.PikminPurple,
      MarkerType.PikminWhite,
      MarkerType.PikminRock,
      MarkerType.PikminWing,
      MarkerType.PikminIce,
      MarkerType.CandypopRed,
      MarkerType.CandypopYellow,
      MarkerType.CandypopBlue,
      MarkerType.CandypopPurple,
      MarkerType.CandypopWhite,
      MarkerType.CandypopRock,
      MarkerType.CandypopWing,
      MarkerType.CandypopIce
    ]
  },
  {
    label: 'Structures',
    markers: [
      MarkerType.PileMaterials,
      MarkerType.StructureBridge,
      MarkerType.StructureSlope,
      MarkerType.StructureValve,
      MarkerType.StructureWall,
      MarkerType.HazardSprinkler
    ]
  },
  {
    label: 'Breakables',
    markers: [
      MarkerType.MiscGroupdropmanager,
      MarkerType.BreakableHydrojelly,
      MarkerType.BreakablePot,
      MarkerType.BreakableKingcapnormal,
      MarkerType.BreakableKingcappoison,
      MarkerType.BreakableSpotcapnormal,
      MarkerType.BreakableSpotcappoison,
      MarkerType.BreakableStraw,
      MarkerType.BreakableIcebox,
      MarkerType.FirepitLit,
      MarkerType.FirepitUnlit,
      MarkerType.BreakableCrystal
    ]
  },
  {
    label: 'Items',
    markers: [
      MarkerType.BreakableMound,
      MarkerType.BreakableEgg,
      MarkerType.MiscBomb,
      MarkerType.MiscIcebomb,
      MarkerType.MiscSpicy,
      MarkerType.MiscSpiderwort
    ]
  },
  {
    label: 'Hazards',
    markers: [
      MarkerType.HazardSpoutFire,
      MarkerType.HazardSpoutElectric,
      MarkerType.HazardSpoutWater,
      MarkerType.HazardSpoutPoison,
      MarkerType.HazardSpoutIce,
      MarkerType.HazardSpoutBubble,
      MarkerType.HazardFloorfire,
      MarkerType.HazardCharcoal,
      MarkerType.HazardFloormushroom
    ]
  },
  {
    label: 'Shortcuts',
    markers: [
      MarkerType.ShortcutClipboardhigh,
      MarkerType.ShortcutClipboardlow,
      MarkerType.ShortcutPushbag,
      MarkerType.ShortcutPushboxcardboard,
      MarkerType.ShortcutPushboxmetal,
      MarkerType.ShortcutRoot,
      MarkerType.ShortcutStringup,
      MarkerType.ShortcutStringdown,
      MarkerType.RidableGeyser,
      MarkerType.RidableZipline,
      MarkerType.TunnelAny,
      MarkerType.TunnelCaptain,
      MarkerType.TunnelOatchi,
      MarkerType.PlatformBounce,
      MarkerType.PlatformCharge,
      MarkerType.RidableMovefloor,
    ]
  },
  {
    label: 'Gates',
    markers: [
      MarkerType.GateBomb,
      MarkerType.GateCrystal,
      MarkerType.GateDirt,
      MarkerType.GateElectric,
      MarkerType.GateIce,
      MarkerType.GateNumbered,
      MarkerType.ShortcutSquashbag
    ]
  },
  {
    label: 'Switchables',
    markers: [
      MarkerType.SwitchConveyor,
      MarkerType.SwitchFan,
      MarkerType.SwitchFenceiron,
      MarkerType.SwitchFencenormal,
      MarkerType.SwitchSingle,
      MarkerType.SwitchDouble,
      MarkerType.SwitchDrain,
    ]
  },
  {
    label: 'Locations',
    markers: [
      MarkerType.BaseOnion,
      MarkerType.BaseBeagle,
      MarkerType.CaveEntrance,
      MarkerType.CaveExit,
      MarkerType.CaveChallenge,
      MarkerType.CaveBattle,
    ]
  },
  {
    label: 'Misc',
    markers: [
      MarkerType.MiscPullrope,
      MarkerType.MiscStick,
      MarkerType.MiscIcicle,
      MarkerType.MiscHoney,
      MarkerType.MiscPellet,
    ]
  },
  {
    label: 'Night',
    markers: [
      MarkerType.NightLumiknoll,
      MarkerType.NightTricknoll,
      MarkerType.PileGlowpellets,
    ]
  },
];

export interface Pin extends Omit<Marker, 'drops'> {
  type: MarkerType.MapPin;
  infoType: InfoType.Misc;
  color: number[];
  transform: {
    translation: {
      x: number;
      y: number;
    };
  };
  pinId: string;
}

