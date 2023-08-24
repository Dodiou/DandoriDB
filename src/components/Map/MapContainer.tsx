import { useCallback } from 'react';
import { Map, MapBrowserEvent, View } from "ol";
import { useEffect, useRef, useState } from "react";
import { Select, defaults as defaultInteractions } from 'ol/interaction';
import { defaults as defaultControls } from 'ol/control';

import { getMapData, getMarkerData } from "../../api/MapAPI";

import './MapContainer.css';
import { getCenter } from 'ol/extent';
import { SelectEvent } from 'ol/interaction/Select';
import { MapDebugInfoProps } from '../MapDebugInfo/MapDebugInfo';
import { getImageLayersForMap, getProjectionForMap } from '../../api/getImageLayers';
import { MapFeatureLayers } from './FeatureStyles';
import { FeatureFilter } from '../Legend/Legend';
import { MarkerType } from '../../api/types';

export interface MapContainerProps {
  filter: FeatureFilter;
  mapId: string;
  onSelect?: (data: any | undefined) => void;
  onMouseMove?: (data: MapDebugInfoProps) => void;
}

export const MapContainer = ({ filter, mapId, onSelect, onMouseMove }: MapContainerProps) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<Map>(() => new Map({}));
  const [markerLayers, setMarkerLayers] = useState<MapFeatureLayers>({});
  const prevFilter = useRef<FeatureFilter>({});

  useEffect(() => {
    const load = async () => {
      // load map data
      const mapData = await getMapData(mapId);

      const imageLayers = getImageLayersForMap(mapData, mapData.waterboxes);
      const projection = getProjectionForMap(mapData);

      const view = new View({
        projection: projection,
        center: getCenter(projection.getExtent()),
        zoom: 2,
        rotation: -mapData.rotation * Math.PI / 180,
        maxZoom: 4,
        minZoom: 1,
      });

      // add markers
      const markerLayers = await getMarkerData(mapId);
      const visibleLayers = Object.entries(markerLayers)
        .filter(([k, _v]) => !!filter[k as MarkerType])
        .map(([_k, v]) => v);

      // TODO figure out why map.setLayers and map.setView aren't working
      const map = new Map({
        layers: [
          ...imageLayers,
          ...visibleLayers
        ],
        target: 'map',
        view,
        // disable rotation
        interactions: defaultInteractions(),
        // disable "resetNorth" button; TODO: see if rotateOptions.resetNorth can reset to original rotation
        controls: defaultControls({rotate: false})
      });

      setMap(map);
      setMarkerLayers(markerLayers);
    }

    load();
  }, [mapId]);

  useEffect(() => {
    const filterKeys = Object.keys(filter) as MarkerType[];
    for (const key of filterKeys) {
      const layer = markerLayers[key];
      if (!layer) {
        continue;
      }

      if (!!filter[key] !== !!prevFilter.current[key]) {
        if (!filter[key]) {
          map.removeLayer(layer);
        }
        else {
          map.addLayer(layer);
        }
      }
    }

    prevFilter.current = filter;
  }, [filter]);

  const handleSelect = useCallback((evt: SelectEvent) => {
    const firstFeature = evt.selected[0];

    if (!firstFeature) {
      onSelect?.(undefined);
      return;
    }
    onSelect?.(firstFeature.getProperties().data);
  }, [onSelect])

  useEffect(() => {
    const selectFeature = new Select({
      style: null
    });
    selectFeature.on('select', handleSelect);
    map.addInteraction(selectFeature);

    return () => {
      selectFeature.un('select', handleSelect);
      map.removeInteraction(selectFeature);
    }
  }, [map, handleSelect])

  useEffect(() => {
    const round = (n: number) => Math.round(1000 * n) / 1000;
    const moveListener = (event: MapBrowserEvent<any>) => {
      onMouseMove?.({
        x: round(event.coordinate[0]),
        y: round(event.coordinate[1]),
        scale: round(event.map.getView().getZoom() || -1),
        rotation: round(event.map.getView().getRotation() * 180 / Math.PI)
      })
    };

    if (mapContainerRef.current) {
      map.setTarget(mapContainerRef.current);
      map.on('pointermove', moveListener);
    }

    return () => {
      map.un('pointermove', moveListener);
      map.dispose();
    }
  }, [map]);

  return <div className='MapContainer__container'>
    <div className="MapContainer__map" ref={mapContainerRef}></div>
  </div>;
};
