import { useCallback } from 'react';
import { Feature, Map, View } from "ol";
import { Image } from "ol/layer";
import { Projection } from 'ol/proj';
import { ImageStatic } from "ol/source";
import { useEffect, useRef, useState } from "react";
import { Select, defaults as defaultInteractions } from 'ol/interaction';
import { defaults as defaultControls } from 'ol/control';

import { getMapData } from "../../api/MapAPI";

import './MapContainer.css';
import { getCenter } from 'ol/extent';
import { Point } from 'ol/geom';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import { SelectEvent } from 'ol/interaction/Select';
import { CaveStyle } from './FeatureStyles';

export interface MapContainerProps {
  mapId: string;
  onSelect?: (data: any | undefined) => void;
}

export const MapContainer = ({ mapId, onSelect }: MapContainerProps) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<Map>(() => new Map({}));

  useEffect(() => {
    const load = async () => {
      // load map data
      const mapData = await getMapData(mapId);
      const extent = [0, 0, 1024, 968];
      const projection = new Projection({
        code: 'map',
        units: 'pixels',
        extent: extent,
      });

      // load map image
      const mapImage = new Image({
        source: new ImageStatic({
          attributions: 'Nintendo',
          url: mapData.imageUrl,
          projection,
          imageExtent: extent,
        }),
      });

      const view = new View({
        projection: projection,
        center: getCenter(extent),
        zoom: 2,
        rotation: 77.56 * Math.PI / 180,
        maxZoom: 4,
        minZoom: 1,
      });

      // add markers
      const cave = new Feature({
        geometry: new Point([500, 125]),
      });
      cave.setStyle(CaveStyle);

      const markerLayer = new VectorLayer({
        source: new VectorSource({ features: [cave] })
      });

      // TODO figure out why map.setLayers and map.setView aren't working
      const map = new Map({
        layers: [
          mapImage,
          markerLayer
        ],
        target: 'map',
        view,
        // disable rotation
        interactions: defaultInteractions({altShiftDragRotate: false, pinchRotate: false}),
        // disable "resetNorth" button; TODO: see if rotateOptions.resetNorth can reset to original rotation
        controls: defaultControls({rotate: false})
      });

      setMap(map);
    }

    load();
  }, [mapId]);

  const handleSelect = useCallback((evt: SelectEvent) => {
    const firstFeature = evt.selected[0];
    console.log("Fired!")

    if (!firstFeature) {
      onSelect?.(undefined);
      return;
    }
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
