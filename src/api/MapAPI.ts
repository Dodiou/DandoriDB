

export interface MapData {
  imageUrl: string;
  markers?: ObjectMarker[];
}

export interface TreasureData {
  id: string;
  imageUrl?: string;
  name: string;
  value: number;
}

export interface CreatureAggregate {
  id: string;
  imageUrl?: string;
  name: string;
  amount: number;
  value: number;
}

export enum PikminType {
  Red = 'red',
  Yellow = 'yellow',
  Blue = 'blue',
  Purple = 'purple',
  White = 'white',
  Rock = 'rock',
  Wing = 'wing',
  Ice = 'ice',
  Bulbmin = 'bulbmin',
}
export interface PikminCount {
  red?: number;
  yellow?: number;
  blue?: number;
  purple?: number;
  white?: number;
  rock?: number;
  wing?: number;
  ice?: number;
  bulbmin?: number;
}

export enum OnionType {
  Flarlic = 'flarlic',
  Red = 'red',
  Yellow = 'yellow',
  Blue = 'blue',
  Purple = 'purple',
  White = 'white',
  Rock = 'rock',
  Wing = 'wing',
  Ice = 'ice',
}

export const OnionData: {[key in OnionType]: { name: string, weight: number }} = {
  [OnionType.Flarlic]: {
    name: "Flarlic",
    weight: 5
  },
  [OnionType.Red]: {
    name: "Red Onion",
    weight: 20
  },
  [OnionType.Yellow]: {
    name: "Yellow Onion",
    weight: 20
  },
  [OnionType.Blue]: {
    name: "Blue Onion",
    weight: 20
  },
  [OnionType.Purple]: {
    name: "Purple Onion",
    weight: 100
  },
  [OnionType.White]: {
    name: "White Onion",
    weight: 10
  },
  [OnionType.Rock]: {
    name: "Rock Onion",
    weight: 20
  },
  [OnionType.Wing]: {
    name: "Wing Onion",
    weight: 20
  },
  [OnionType.Ice]: {
    name: "Ice Onion",
    weight: 20
  },
}

export interface CaveData {
  id: string;
  name: string;
  sublevels: number;
  castaways?: number;
  pikmin?: PikminCount;
  candypops?: PikminCount;
  materials?: number;
  treasures?: TreasureData[];
  creatures?: CreatureAggregate[];
  onions?: OnionType[];
  structures?: number;
}

export interface DandoriData {
  id: string;
}

export interface ObjectMarker {
  id: string;
  x: number;
  y: number;
}

export enum ObjectType {
  Cave = 'cave',
  Treasure = 'treasure',
  Castaway = 'castaway',
  Battle = 'battle',
  Challenge = 'challenge',
  Onion = 'onion',
  Materials = 'materials'
}

export const ObjectIcons = {
  [ObjectType.Castaway]: '',
  [ObjectType.Battle]: 'https://img.game8.jp/8402583/a1b67e8fb74e7b81f27cd3570b2b1999.png/show',
  [ObjectType.Challenge]: 'https://img.game8.jp/8402584/edfbdd62cf95d579275873b3dd4bde8b.png/show',
  [ObjectType.Onion]: 'https://img.game8.jp/8401767/f4e6745281182771b95a5bd56ff0e9e6.png/show',
}

const AreaNameToID = {
  'sun-speckled-terrace': 'Area001',
  'blossoming-arcadia': 'Area002',
  'serene-shores': 'Area003',
  'giants-hearth': 'Area004',
  'primordial-thicket': 'Area006',
  'heros-hideaway': 'Area010',
  'prologue': 'Area011',
  'rescue-command-post': 'Area500',
};
const OstAreaNameToId = {
  'ost-sun-speckled-terrace': 'HeroStory001',
  'ost-blossoming-arcadia': 'HeroStory002',
  'ost-serene-shores': 'HeroStory003',
  'ost-heros-hideaway': 'HeroStory010',
};
const CaveNameToID = {
  "burrow-of-beginnings": "Cave000",
  "last-frost-cavern": "Cave001",
  "hectic-hollows": "Cave033",
  "crackling-cauldron": "Cave002",
  "aquiferous-summit": "Cave004",
  "industrial-maze": "Cave005",
  "drafty-gallery": "Cave006",
  "secluded-courtyard": "Cave007",
  "sightless-passage": "Cave009",
  "kingdom-of-beasts": "Cave010",
  "seafloor-resort": "Cave011",
  "subzero-sauna": "Cave012",
  "below-grade-discotheque": "Cave013",
  "engulfed-castle": "Cave014",
  "doppelgangers-den": "Cave021",
  "frozen-inferno": "Cave022",
  "plunder-palace": "Cave023",
  "ultimate-testing-range": "Cave024",
  "dream-home": "Cave025",
  "cradle-of-the-beast": "Cave026",
  "cavern-for-a-king": "Cave016",
  "the-mud-pit": "Cave018",
  "subterranean-swarm": "Cave019",
  "trial-run": "DDB_AI001_P",
  "battle-in-a-box": "DDB_AI002_P",
  "dandori-castle": "DDB_AI003_P",
  "leafy-showdown": "DDB_AI004_P",
  "hot-sandy-duel": "DDB_AI005_P",
  "final-battle": "DDB_AI006_P",
  "dandori-day-care": "Cave003_F00_P",
  "hotshock-canyon": "Cave008_F00_P",
  "test-tubs": "Cave015_F00_P",
  "ice-cross-course": "Cave034_F00_P",
  "hefty-haulway": "Cave031_F00_P",
  "rockaway-cellars": "Cave029_F00_P",
  "aerial-incinerator": "Cave027_F00_P",
  "strategic-freezeway": "Cave028_F00_P",
  "planning-pools": "Cave030_F00_P",
  "toggle-training": "Cave017_F00_P",
  "cliff-hangers-hold": "Cave020_F00_P",
  "oasis-of-order": "Cave032_F00_P",
  "trial-of-the-sage-leaf": "CaveESP000_Title"
};
const MapNamesToId: {[name: string]: string} = { ...AreaNameToID, ...OstAreaNameToId, ...CaveNameToID };
export const getMapData = async (mapEngId: string): Promise<MapData> => {
  const mapId = MapNamesToId[mapEngId] || 'Area001';

  return {
    imageUrl: `./maps/${mapId}/T_ui_Map_${mapId}_D.png`,
    rotation: 
  }
}

export const getCaveData = async (id: string): Promise<CaveData> => {
  return {
    id,
    name: 'Hectic Hollows',
    sublevels: 2,
    castaways: 1,
    treasures: [
      {
        id: 'T0',
        name: 'Empty Vase',
        value: 150,
      },
      {
        id: 'T1',
        name: 'Mama Doll Head',
        value: 150,
      },
      {
        id: 'T2',
        name: 'Aspiration-Ritual Pole',
        value: 150,
      },
    ],
    creatures: [
      {
        id: 'Cr0',
        name: 'Bulborb',
        amount: 1,
        value: -1
      },
      {
        id: 'Cr1',
        name: 'Dwarf Bulborb',
        amount: 4,
        value: -1
      },
      {
        id: 'Cr2',
        name: 'Tusked Blowhog',
        amount: 1,
        value: -1
      },
    ],
    pikmin: {
      ice: 20
    },
    materials: 15
  };
};
