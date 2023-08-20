import { CSSIcon } from "../Icon/Icon";
import { Legend, LegendProps } from "../Legend/Legend";
import { MapDebugInfo, MapDebugInfoProps } from "../MapDebugInfo/MapDebugInfo";
import { MapSelect, MapSelectProps } from "../MapSelect/MapSelect";
import { SegmentedButton, SegmentedButtonOption, SegmentedButtonProps } from "../SegmentedButton/SegmentedButton";
import { Tab, Tabs } from "../Tabs/Tabs";

import './NavigationPanel.css';

export enum TimeOption {
  Day = 'Day',
  Afternoon = 'Afternoon',
  Night = 'Night',
  Olimar = 'Olimar'
}

export interface NavigationPanelProps {
  filter: LegendProps['filter'];
  mapDebugInfo?: MapDebugInfoProps;
  mapId: string;
  selectedTime: string;
  floor?: string;
  onMapChange?: MapSelectProps['onSelect'];
  onTimeChange?: SegmentedButtonProps['onSelect'];
  onFilterChange?: LegendProps['onFilterChange'];
}

export const NavigationPanel = ({
  filter,
  mapDebugInfo,
  mapId,
  selectedTime,
  floor,
  onMapChange,
  onTimeChange,
  onFilterChange
}: NavigationPanelProps) => {
  const isCave: boolean = false;
  const timeOptions: SegmentedButtonOption[] = isCave ? [] : [
    // { id: TimeOption.Day, icon: CSSIcon.Day, label: 'Day' },
    // { id: TimeOption.Afternoon, icon: CSSIcon.Afternoon, label: 'Afternoon' },
    // { id: TimeOption.Night, icon: CSSIcon.Night, label: 'Night' },
    // { id: TimeOption.Olimar, icon: CSSIcon.Olimar, label: 'Olimar' },
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
    <Tabs>
      <Tab id="maps" label="Maps">
        <MapSelect onSelect={onMapChange} />
      </Tab>
      <Tab id="legend" label="Legend">
        <Legend
          filter={filter}
          onFilterChange={onFilterChange}
        />
      </Tab>
    </Tabs>
    { mapDebugInfo && <MapDebugInfo { ...mapDebugInfo }/> }
  </div>;
};
