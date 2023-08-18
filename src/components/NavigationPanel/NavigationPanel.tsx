import { CSSIcon } from "../Icon/Icon";
import { Legend } from "../Legend/Legend";
import { MapDebugInfo, MapDebugInfoProps } from "../MapDebugInfo/MapDebugInfo";
import { MapSelect, MapSelectProps } from "../MapSelect/MapSelect";
import { SegmentedButton, SegmentedButtonOption, SegmentedButtonProps } from "../SegmentedButton/SegmentedButton";

import './NavigationPanel.css';

export enum TimeOption {
  Day = 'Day',
  Afternoon = 'Afternoon',
  Night = 'Night',
  Olimar = 'Olimar'
}

export interface NavigationPanelProps {
  mapDebugInfo?: MapDebugInfoProps;
  mapId: string;
  selectedTime: string;
  floor?: string;
  onMapChange?: MapSelectProps['onSelect'];
  onTimeChange?: SegmentedButtonProps['onSelect'];
  onLegendChange?: () => void;
}

export const NavigationPanel = ({
  mapDebugInfo,
  mapId,
  selectedTime,
  floor,
  onMapChange,
  onTimeChange
}: NavigationPanelProps) => {
  const isCave: boolean = false;
  const timeOptions: SegmentedButtonOption[] = isCave ? [] : [
    { id: TimeOption.Day, icon: CSSIcon.Day, label: 'Day' },
    { id: TimeOption.Afternoon, icon: CSSIcon.Afternoon, label: 'Afternoon' },
    { id: TimeOption.Night, icon: CSSIcon.Night, label: 'Night' },
    { id: TimeOption.Olimar, icon: CSSIcon.Olimar, label: 'Olimar' },
  ];

  return <div className="NavigationPanel__container">
    {
      timeOptions.length !== 0 &&
      <SegmentedButton
        selectedId={selectedTime}
        options={timeOptions}
        hideLabel
        onSelect={onTimeChange}
      />
    }
    <Legend />
    <MapSelect onSelect={onMapChange} />
    { mapDebugInfo && <MapDebugInfo { ...mapDebugInfo }/> }
  </div>;
};
