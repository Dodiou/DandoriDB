// import { useEffect, useState } from 'react';
// import { CaveSummary } from './components/CaveSummary/CaveSummary';
// import { CaveData, getCaveData } from './api/MapAPI';
import { MapContainer } from './components/Map/MapContainer';
import './App.css';
import { PanelLayout } from './components/PanelLayout/PanelLayout';
import { NavigationPanel, TimeOption } from './components/NavigationPanel/NavigationPanel';
import { useCallback, useState } from 'react';
import { MapDebugInfoProps } from './components/MapDebugInfo/MapDebugInfo';
import { InfoPanel } from './components/InfoPanel/InfoPanel';
import { FeatureFilter } from './components/Legend/Legend';
import { MarkerType } from './api/types';

const InitialFilter: FeatureFilter = Object.values(MarkerType).reduce((filter, type) => {
  filter[type as MarkerType] = true;
  return filter;
}, {} as FeatureFilter);

function App() {
  // const [data, setData] = useState<CaveData>();

  // useEffect(() => {
  //   const load = async () => {
  //     setData(await getCaveData('C0'))
  //   };
  //   load();
  // }, [])

  const [mapId, setMapId] = useState<string>('Area001');
  const [time, setTime] = useState<string>(TimeOption.Day);
  const [filter, setFilter] = useState<FeatureFilter>(InitialFilter);
  const [debugInfo, setDebugInfo] = useState<MapDebugInfoProps>({ x: 0, y: 0, scale: -1, rotation: 0});
  const [selectedMarker, setSelectedMarker] = useState<{ type: string }>();

  const onFilterChange = useCallback((newFilters: FeatureFilter) => {
    setFilter(prev => {
      return {
        ...prev,
        ...newFilters
      }
    })
  }, []);

  const navPanel = <NavigationPanel
    filter={filter}
    mapId={mapId}
    selectedTime={time}
    onMapChange={setMapId}
    onTimeChange={setTime}
    onFilterChange={onFilterChange}
    mapDebugInfo={debugInfo}
  />;
  const infoPanel = <InfoPanel marker={selectedMarker} />

  return (
    <div className="App">
      <PanelLayout leftPanel={navPanel} rightPanel={infoPanel}>
        <MapContainer
          filter={filter}
          mapId={mapId} onMouseMove={setDebugInfo}
          onSelect={setSelectedMarker}
        />
      </PanelLayout>
    </div>
  );
}

export default App;
