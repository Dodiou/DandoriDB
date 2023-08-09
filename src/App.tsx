// import { useEffect, useState } from 'react';
// import { CaveSummary } from './components/CaveSummary/CaveSummary';
// import { CaveData, getCaveData } from './api/MapAPI';
import { MapContainer } from './components/Map/MapContainer';
import './App.css';

function App() {
  // const [data, setData] = useState<CaveData>();

  // useEffect(() => {
  //   const load = async () => {
  //     setData(await getCaveData('C0'))
  //   };
  //   load();
  // }, [])

  return (
    <div className="App">
      <MapContainer mapId={'0'} />
    </div>
  );
}

export default App;
