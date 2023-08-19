import { default as MapExtentOverrides } from './extent-overrides.json';
import { default as MapTransforms } from './map-transforms.json';
import { MapFeatureLayers, getFeatureLayers } from '../components/Map/FeatureStyles';
import { Waterbox } from './getImageLayers';
import { Marker, MarkerType } from './types';

type MapExtent = {
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
};
interface MapTransform {
  rotation: number;
  extent: MapExtent;
}
export interface MapData extends MapTransform {
  mapId: string;
  imageUrl: string;
  waterboxes: Waterbox[];
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


/*
TODO:
extents to check:
  023_F00
  023_F03
  030_F00
  035_F04
*/


export const getMapData = async (mapId: string): Promise<MapData> => {
  const mapTransform: MapTransform = MapTransforms[mapId as keyof typeof MapTransforms];
  const extentOverride: MapExtent | undefined = MapExtentOverrides[mapId as keyof typeof MapExtentOverrides];

  // TODO need to reorganize all this stuff
  const { water = [] } =  await _getMarkerData(mapId);

  return {
    mapId,
    imageUrl: `${process.env.PUBLIC_URL}/images/maps/${mapId}/T_ui_Map_${mapId}_D.png`,
    rotation: mapTransform.rotation,
    extent: extentOverride || mapTransform.extent,
    waterboxes: water as any[],
  }
}

const _getMarkerData = async (mapId: string) => {
  let dataUrl = process.env.PUBLIC_URL + '/data';
  if (mapId.startsWith('Cave')) {
    const caveId = mapId.split('_')[0];
    dataUrl += `/${caveId}/${mapId}.json`;
  }
  else if (mapId.startsWith('HeroStory')) {
    const areaId = 'Area' + mapId.slice(-3);
    dataUrl += `/${areaId}/olimar.json`;
  }
  else {
    dataUrl += `/${mapId}/day.json`;
  }

  const mapMarkerReq = await fetch(dataUrl);
  const mapMarkerData: {[key: string]: Marker[]} = await mapMarkerReq.json();

  // TODO: need to think about water more
  mapMarkerData.water = [
    ...(mapMarkerData[MarkerType.WaterWater] || []),
    ...(mapMarkerData[MarkerType.WaterSwamp] || [])
  ];
  delete mapMarkerData[MarkerType.WaterWater];
  delete mapMarkerData[MarkerType.WaterSwamp];

  return mapMarkerData;
}

export const getMarkerData = async (mapId: string): Promise<MapFeatureLayers> => {
  const { water, ...mapMarkerData } = await _getMarkerData(mapId);
  return getFeatureLayers(mapMarkerData);
}
