import './MapsList.css';

export interface MapOptions {
  id: string;
  label: string;
  maps: {
    imageId: string;
    dataId: string;
  }[];
}

const Caves = Object.fromEntries(
  [
    {
      id: "Cave000",
      label: "Burrow of Beginnings",
      sublevels: 1
    },
    {
      id: "Cave001",
      label: "Last-Frost Cavern",
      sublevels: 1
    },
    {
      id: "Cave002",
      label: "Crackling Cauldron",
      sublevels: 2
    },
    {
      id: "Cave003",
      label: "Dandori Day Care",
      sublevels: 1
    },
    {
      id: "Cave004",
      label: "Aquiferous Summit",
      sublevels: 2
    },
    {
      id: "Cave005",
      label: "Industrial Maze",
      sublevels: 2
    },
    {
      id: "Cave006",
      label: "Drafty Gallery",
      sublevels: 4
    },
    {
      id: "Cave007",
      label: "Secluded Courtyard",
      sublevels: 4
    },
    {
      id: "Cave008",
      label: "Hotshock Canyon",
      sublevels: 1
    },
    {
      id: "Cave009",
      label: "Sightless Passage",
      sublevels: 1
    },
    {
      id: "Cave010",
      label: "Kingdom of Beasts",
      sublevels: 6
    },
    {
      id: "Cave011",
      label: "Seafloor Resort",
      sublevels: 4
    },
    {
      id: "Cave012",
      label: "Subzero Sauna",
      sublevels: 3
    },
    {
      id: "Cave013",
      label: "Below-Grade Discotheque",
      sublevels: 5
    },
    {
      id: "Cave014",
      label: "Engulfed Castle",
      sublevels: 5
    },
    {
      id: "Cave015",
      label: "Test Tubs",
      sublevels: 1
    },
    {
      id: "Cave016",
      label: "Cavern for a King",
      sublevels: 20
    },
    {
      id: "Cave017",
      label: "Toggle Training",
      sublevels: 1
    },
    {
      id: "Cave018",
      label: "The Mud Pit",
      sublevels: 3
    },
    {
      id: "Cave019",
      label: "Subterranean Swarm",
      sublevels: 5
    },
    {
      id: "Cave020",
      label: "Cliff-Hanger's Hold",
      sublevels: 1
    },
    {
      id: "Cave021",
      label: "Doppelgänger's Den",
      sublevels: 4
    },
    {
      id: "Cave022",
      label: "Frozen Inferno",
      sublevels: 4
    },
    {
      id: "Cave023",
      label: "Plunder Palace",
      sublevels: 5
    },
    {
      id: "Cave024",
      label: "Ultimate Testing Range",
      sublevels: 5
    },
    {
      id: "Cave025",
      label: "Dream Home",
      sublevels: 1
    },
    {
      id: "Cave026",
      label: "Cradle of the Beast",
      sublevels: 3
    },
    {
      id: "Cave027",
      label: "Aerial Incinerator",
      sublevels: 1
    },
    {
      id: "Cave028",
      label: "Strategic Freezeway",
      sublevels: 1
    },
    {
      id: "Cave029",
      label: "Rockaway Cellars",
      sublevels: 1
    },
    {
      id: "Cave030",
      label: "Planning Pools",
      sublevels: 1
    },
    {
      id: "Cave031",
      label: "Hefty Haulway",
      sublevels: 1
    },
    {
      id: "Cave032",
      label: "Oasis of Order",
      sublevels: 1
    },
    {
      id: "Cave033",
      label: "Hectic Hollows",
      sublevels: 2
    },
    {
      id: "Cave034",
      label: "Ice-Cross Course",
      sublevels: 1
    },
    {
      id: "Cave035",
      label: "Trial of the Sage Leaf",
      sublevels: 10
    }
  ].map(m => [m.id, m])
);

const Areas = [
  {
    label: "Rescue Command Post",
    id: "Area500",
    caves: [
      Caves['Cave000'],
      Caves['Cave035']
    ]
  },
  {
    label: "Sun-Speckled Terrace",
    id: "Area001",
    caves: [
      Caves['Cave001'],
      Caves['Cave002'],
      Caves['Cave004'],
      Caves['Cave005'],
      Caves['Cave033'],
    ],
    timeOptions: ['day', 'night', 'olimar']
  },
  {
    label: "Blossoming Arcadia",
    id: "Area002",
    caves: [
      Caves['Cave006'],
      Caves['Cave007'],
      Caves['Cave009'],
      Caves['Cave010'],
    ],
    timeOptions: ['day', 'night', 'olimar']
  },
  {
    label: "Serene Shores",
    id: "Area003",
    caves: [
      Caves['Cave011'],
      Caves['Cave012'],
      Caves['Cave013'],
      Caves['Cave014'],
    ],
    timeOptions: ['day', 'afternoon', 'night', 'olimar']
  },
  {
    label: "Hero's Hideaway",
    id: "Area010",
    caves: [
      Caves['Cave021'],
      Caves['Cave022'],
      Caves['Cave023'],
    ],
    timeOptions: ['day', 'night', 'olimar']
  },
  {
    label: "Giant's Hearth",
    id: "Area004",
    caves: [
      Caves['Cave024'],
      Caves['Cave025'],
      Caves['Cave026'],
    ],
    timeOptions: ['day', 'night']
  },
  {
    label: "Primordial Thicket",
    id: "Area006",
    caves: [
      Caves['Cave016'],
      Caves['Cave018'],
      Caves['Cave019'],
    ],
    timeOptions: ['day', 'night']
  },
  {
    label: "Dandori Trials",
    id: "Challenge",
    caves: [
      Caves['Cave003'],
      Caves['Cave008'],
      Caves['Cave015'],
      Caves['Cave017'],
      Caves['Cave020'],
      Caves['Cave027'],
      Caves['Cave028'],
      Caves['Cave029'],
      Caves['Cave030'],
      Caves['Cave031'],
      Caves['Cave032'],
      Caves['Cave034'],
    ]
  },
]

const MAPS = [
  "Cave000_F00",
  "Cave001_F00",
  "Cave002_F00",
  "Cave002_F01",
  "Cave003_F00",
  "Cave004_F00",
  "Cave004_F01",
  "Cave005_F00",
  "Cave005_F01",
  "Cave006_F00",
  "Cave006_F01",
  "Cave006_F02",
  "Cave006_F03",
  "Cave007_F00",
  "Cave007_F01",
  "Cave007_F02",
  "Cave007_F03",
  "Cave008_F00",
  "Cave009_F00",
  "Cave010_F00",
  "Cave010_F01",
  "Cave010_F02",
  "Cave010_F03",
  "Cave010_F04",
  "Cave010_F05",
  "Cave011_F00",
  "Cave011_F01",
  "Cave011_F02",
  "Cave011_F03",
  "Cave012_F00",
  "Cave012_F01",
  "Cave012_F02",
  "Cave013_F00",
  "Cave013_F01",
  "Cave013_F02",
  "Cave013_F03",
  "Cave013_F04",
  "Cave014_F00",
  "Cave014_F01",
  "Cave014_F02",
  "Cave014_F03",
  "Cave014_F04",
  "Cave015_F00",
  "Cave016_F00",
  "Cave016_F01",
  "Cave016_F02",
  "Cave016_F03",
  "Cave016_F04",
  "Cave016_F05",
  "Cave016_F06",
  "Cave016_F07",
  "Cave016_F08",
  "Cave016_F09",
  "Cave016_F10",
  "Cave016_F11",
  "Cave016_F12",
  "Cave016_F13",
  "Cave016_F14",
  "Cave016_F15",
  "Cave016_F16",
  "Cave016_F17",
  "Cave016_F18",
  "Cave016_F19",
  "Cave017_F00",
  "Cave018_F00",
  "Cave018_F01",
  "Cave018_F02",
  "Cave019_F00",
  "Cave019_F01",
  "Cave019_F02",
  "Cave019_F03",
  "Cave019_F04",
  "Cave020_F00",
  "Cave021_F00",
  "Cave021_F01",
  "Cave021_F02",
  "Cave021_F03",
  "Cave022_F00",
  "Cave022_F01",
  "Cave022_F02",
  "Cave022_F03",
  "Cave023_F00",
  "Cave023_F01",
  "Cave023_F02",
  "Cave023_F03",
  "Cave023_F04",
  "Cave024_F00",
  "Cave024_F01",
  "Cave024_F02",
  "Cave024_F03",
  "Cave024_F04",
  "Cave025_F00",
  "Cave026_F00",
  "Cave026_F01",
  "Cave026_F02",
  "Cave027_F00",
  "Cave028_F00",
  "Cave029_F00",
  "Cave030_F00",
  "Cave031_F00",
  "Cave032_F00",
  "Cave033_F00",
  "Cave033_F01",
  "Cave034_F00",
  "Cave035_F00",
  "Cave035_F01",
  "Cave035_F02",
  "Cave035_F03",
  "Cave035_F04",
  "Cave035_F05",
  "Cave035_F06",
  "Cave035_F07",
  "Cave035_F08",
  "Cave035_F09",
  "Area001",
  "Area002",
  "Area003",
  "Area004",
  "Area006",
  "Area010",
  "Area500",
  "HeroStory001",
  "HeroStory002",
  "HeroStory003",
  "HeroStory010",
];
const IdToNameMap: {[key: string]: string} = {
  "Cave000": "Burrow of Beginnings",
  "Cave001": "Last-Frost Cavern",
  "Cave002": "Crackling Cauldron",
  "Cave003": "Dandori Day Care",
  "Cave004": "Aquiferous Summit",
  "Cave005": "Industrial Maze",
  "Cave006": "Drafty Gallery",
  "Cave007": "Secluded Courtyard",
  "Cave008": "Hotshock Canyon",
  "Cave009": "Sightless Passage",
  "Cave010": "Kingdom of Beasts",
  "Cave011": "Seafloor Resort",
  "Cave012": "Subzero Sauna",
  "Cave013": "Below-Grade Discotheque",
  "Cave014": "Engulfed Castle",
  "Cave015": "Test Tubs",
  "Cave016": "Cavern for a King",
  "Cave017": "Toggle Training",
  "Cave018": "The Mud Pit",
  "Cave019": "Subterranean Swarm",
  "Cave020": "Cliff-Hanger's Hold",
  "Cave021": "Doppelgänger's Den",
  "Cave022": "Frozen Inferno",
  "Cave023": "Plunder Palace",
  "Cave024": "Ultimate Testing Range",
  "Cave025": "Dream Home",
  "Cave026": "Cradle of the Beast",
  "Cave027": "Aerial Incinerator",
  "Cave028": "Strategic Freezeway",
  "Cave029": "Rockaway Cellars",
  "Cave030": "Planning Pools",
  "Cave031": "Hefty Haulway",
  "Cave032": "Oasis of Order",
  "Cave033": "Hectic Hollows",
  "Cave034": "Ice-Cross Course",
  "Cave035": "Trial of the Sage Leaf",
  "Area001": "Sun-Speckled Terrace",
  "Area002": "Blossoming Arcadia",
  "Area003": "Serene Shores",
  "Area004": "Giant's Hearth",
  "Area006": "Primordial Thicket",
  "Area010": "Hero's Hideaway",
  "Area500": "Rescue Command Post",
  "HeroStory001": "Sun-Speckled Terrace (OST)",
  "HeroStory002": "Blossoming Arcadia (OST)",
  "HeroStory003": "Serene Shores (OST)",
  "HeroStory010": "Hero's Hideaway (OST)",
}



export interface MapSelectProps {
  onSelect?: (mapId: string) => void;
}

export const MapSelect = ({
  onSelect
}: MapSelectProps) => {
  const mapLinks = MAPS.map(mapId => {
    const splitId = mapId.split('_');

    let mapName = IdToNameMap[splitId[0]];
    mapName += splitId[1] ? ' ' + splitId[1] : '';

    return <div key={mapId}>
      <a href='javascript:void(0)' onClick={() => onSelect?.(mapId)}>{ `(${mapId}) ${mapName}` }</a>
    </div>;
  }, [onSelect]);

  return <div className="MapSelect__container">
    { mapLinks }
  </div>
}