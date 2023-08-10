// import { useEffect, useState } from 'react';
// import { CaveSummary } from './components/CaveSummary/CaveSummary';
// import { CaveData, getCaveData } from './api/MapAPI';
import { MapContainer } from './components/Map/MapContainer';
import './App.css';
import { PanelLayout } from './components/PanelLayout/PanelLayout';
import { NavigationPanel } from './components/NavigationPanel/NavigationPanel';
import { useState } from 'react';
import { MapDebugInfoProps } from './components/MapDebugInfo/MapDebugInfo';
import { InfoPanel } from './components/InfoPanel/InfoPanel';

function App() {
  // const [data, setData] = useState<CaveData>();

  // useEffect(() => {
  //   const load = async () => {
  //     setData(await getCaveData('C0'))
  //   };
  //   load();
  // }, [])

  const [debugInfo, setDebugInfo] = useState<MapDebugInfoProps>({ x: 0, y: 0, scale: -1, rotation: 0});

  const navPanel = <NavigationPanel mapId='Area001' mapDebugInfo={debugInfo} />
  const infoPanel = <InfoPanel />

  return (
    <div className="App">
      <PanelLayout leftPanel={navPanel} rightPanel={infoPanel}>
        <MapContainer mapId={'0'} onMouseMove={setDebugInfo}/>
      </PanelLayout>
    </div>
  );
}

export default App;
