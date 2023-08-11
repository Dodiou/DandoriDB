import { Legend } from "../Legend/Legend";
import { MapDebugInfo, MapDebugInfoProps } from "../MapDebugInfo/MapDebugInfo";
import { MapSelect, MapSelectProps } from "../MapSelect/MapSelect";
import { SegmentedButton, SegmentedButtonOption } from "../SegmentedButton/SegmentedButton";

import './NavigationPanel.css';

export interface NavigationPanelProps {
  mapDebugInfo?: MapDebugInfoProps;
  mapId: string;
  floor?: string;
  onMapChange?: MapSelectProps['onSelect'];
  onLegendChange?: () => void;
}

export const NavigationPanel = ({
  mapDebugInfo,
  mapId,
  floor,
  onMapChange
}: NavigationPanelProps) => {
  const isCave: boolean = false;
  const timeOptions: SegmentedButtonOption[] = isCave ? [] : [
    { id: 'day', label: 'Day' },
    { id: 'afternoon', label: 'Afternoon' },
    { id: 'night', label: 'Night' },
    { id: 'olimar', label: 'Olimar' },
  ];

  return <div className="NavigationPanel__container">
    { timeOptions.length !== 0 && <SegmentedButton options={timeOptions} selectedId="day" /> }
    <Legend />
    <MapSelect onSelect={onMapChange} />
    { mapDebugInfo && <MapDebugInfo { ...mapDebugInfo }/> }
  </div>;
};
