export interface CaveMap {
  id: string;
  sublevel: number;
}

export interface SurfaceMap {
  id: string;
  time: string;
}

export type Map = CaveMap | SurfaceMap;

export const isCaveMap = (map: Map): map is CaveMap => {
  return map.id.startsWith('Cave');
}

const BASE_DATA_URL = process.env.PUBLIC_URL + '/data';
const BASE_IMAGE_URL = process.env.PUBLIC_URL + '/images/maps';
export interface MapUrls {
  data: string;
  image: string;
}

export const getMapUrls = (map: Map): MapUrls => {
  if (isCaveMap(map)) {
    const sublevelId = `${map.id}_F${map.sublevel}`;

    return {
      data: `${BASE_DATA_URL}/${map.id}/${sublevelId}`,
      image: `${BASE_IMAGE_URL}/${sublevelId}/T_ui_Map_${sublevelId}_D.png`
    };
  }

  const imageId = map.time === 'olimar'
    ? `HeroStory${map.id.slice(-3)}`
    : map.id;

  return {
    data: `${BASE_DATA_URL}/${map.id}/${map.time}`,
    image: `${BASE_IMAGE_URL}/${imageId}/T_ui_Map_${imageId}_D.png`
  };
};