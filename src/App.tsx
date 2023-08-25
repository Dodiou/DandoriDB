// import { useEffect, useState } from 'react';
// import { CaveSummary } from './components/CaveSummary/CaveSummary';
// import { CaveData, getCaveData } from './api/MapAPI';
import { MapContainer } from './components/Map/MapContainer';
import './App.css';
import { PanelLayout } from './components/PanelLayout/PanelLayout';
import { NavigationPanel, TimeOption } from './components/NavigationPanel/NavigationPanel';
import { useCallback, useState } from 'react';
import { InfoPanel } from './components/InfoPanel/InfoPanel';
import { FeatureFilter } from './components/Legend/Legend';
import { MarkerType, Pin } from './api/types';

const InitialFilter: FeatureFilter = Object.values(MarkerType).reduce((filter, type) => {
  filter[type as MarkerType] = true;
  return filter;
}, {} as FeatureFilter);

function App() {
  const [mapId, setMapId] = useState<string>('Area001');
  const [time, setTime] = useState<string>(TimeOption.Day);
  const [filter, setFilter] = useState<FeatureFilter>(InitialFilter);
  const [pins, setPins] = useState<Pin[]>([]);
  const [selectedMarker, setSelectedMarker] = useState<{ type: string }>();

  const onMapChange = useCallback((newMapId: string) => {
    setMapId(newMapId);
    setPins([]);
  }, []);

  const onFilterChange = useCallback((newFilters: FeatureFilter) => {
    setFilter(prev => {
      return {
        ...prev,
        ...newFilters
      }
    })
  }, []);

  const onDeletePin = useCallback((pinId: string) => {
    setPins(prevPins => {
      const index = prevPins.findIndex(pin => pin.pinId === pinId);
      if (index < 0) {
        return prevPins;
      }

      const newPins = [...prevPins];
      newPins.splice(index, 1);
      return newPins;
    });
  }, []);

  const onAddPin = useCallback((pin: Pin) => {
    setPins(prevPins => [...prevPins, pin]);
  }, []);

  const navPanel = <NavigationPanel
    filter={filter}
    mapId={mapId}
    selectedTime={time}
    pins={pins}
    onMapChange={onMapChange}
    onTimeChange={setTime}
    onFilterChange={onFilterChange}
    onDeletePin={onDeletePin}
  />;
  const infoPanel = <InfoPanel marker={selectedMarker} />

  return (
    <div className="App">
      <PanelLayout leftPanel={navPanel} rightPanel={infoPanel}>
        <MapContainer
          filter={filter}
          mapId={mapId}
          pins={pins}
          onSelect={setSelectedMarker}
          onAddPin={onAddPin}
        />
      </PanelLayout>
    </div>
  );
}

export default App;
