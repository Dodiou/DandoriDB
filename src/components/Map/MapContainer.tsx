import { useCallback } from 'react';
import { Map, MapBrowserEvent, View } from "ol";
import { useEffect, useRef, useState } from "react";
import { Select, defaults as defaultInteractions } from 'ol/interaction';
import { defaults as defaultControls } from 'ol/control';

import { getMapData, getMarkerData } from "../../api/MapAPI";

import './MapContainer.css';
import { getCenter } from 'ol/extent';
import { SelectEvent } from 'ol/interaction/Select';
import { getImageLayersForMap, getProjectionForMap } from '../../api/getImageLayers';
import { MapFeatureLayers, getMapPins, getNewPin } from './FeatureStyles';
import { FeatureFilter } from '../Legend/Legend';
import { MarkerType, Pin } from '../../api/types';
import PointerInteraction from 'ol/interaction/Pointer';

export interface MapContainerProps {
  filter: FeatureFilter;
  mapId: string;
  pins: Pin[];
  onSelect?: (data: any | undefined) => void;
  onAddPin?: (newPins: Pin) => void;
}

export const MapContainer = ({
  filter,
  mapId,
  pins = [],
  onSelect,
  onAddPin
}: MapContainerProps) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<Map>(() => new Map({}));
  const [markerLayers, setMarkerLayers] = useState<MapFeatureLayers>({});
  const prevFilter = useRef<FeatureFilter>({});
  const pinId = useRef<number>(0);

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

  useEffect(() => {
    const pinsLayer = getMapPins(pins);
    map.addLayer(pinsLayer);

    return () => {
      map.removeLayer(pinsLayer);
    }
  }, [pins, map])

  const handleSelect = useCallback((evt: SelectEvent) => {
    if (evt.mapBrowserEvent.originalEvent.shiftKey) {
      // pin is being added.
      return;
    }

    const firstFeature = evt.selected[0];

    if (!firstFeature) {
      onSelect?.(undefined);
      return;
    }
    onSelect?.(firstFeature.getProperties().data);
  }, [onSelect]);

  const handleAddPin = useCallback((evt: MapBrowserEvent<MouseEvent>) => {
    if (evt.type !== 'singleclick' || !evt.originalEvent.shiftKey) {
      // 'true' to continue propagation.
      return true;
    }
    // add new pin
    const pinNum = pinId.current++;
    const pin = getNewPin({
      id: `#${pinNum}`,
      // NOTE: flip x and y to be consistent with other objects
      x: evt.coordinate[1],
      y: evt.coordinate[0]
    });

    onAddPin?.(pin);
    // 'false to stop propagation
    return false;
  }, [onAddPin]);

  useEffect(() => {
    const selectFeature = new Select({
      style: null
    });
    selectFeature.on('select', handleSelect);

    const clickFeature = new PointerInteraction({
      handleEvent: handleAddPin
    });

    map.addInteraction(clickFeature);
    map.addInteraction(selectFeature);

    return () => {
      selectFeature.un('select', handleSelect);
      map.removeInteraction(selectFeature);
      map.removeInteraction(clickFeature);
    }
  }, [map, handleSelect, handleAddPin]);

  useEffect(() => {
    if (mapContainerRef.current) {
      map.setTarget(mapContainerRef.current);
    }

    return () => {
      map.dispose();
    }
  }, [map]);

  return <div className='MapContainer__container'>
    <div className="MapContainer__map" ref={mapContainerRef}></div>
  </div>;
};
