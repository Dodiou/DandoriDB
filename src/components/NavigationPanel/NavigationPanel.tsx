import { Pin } from "../../api/types";
// import { HackingTools } from "../HackingTools/HackingTools";
import { CSSIcon } from "../Icon/Icon";
import { Legend, LegendProps } from "../Legend/Legend";
import { MapSelect, MapSelectProps } from "../MapSelect/MapsList";
import { PinsList, PinsListProps } from "../PinsList/PinsList";
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
  mapId: string;
  pins?: Pin[];
  selectedTime: string;
  floor?: string;
  onMapChange?: MapSelectProps['onSelect'];
  onTimeChange?: SegmentedButtonProps['onSelect'];
  onFilterChange?: LegendProps['onFilterChange'];
  onDeletePin?: PinsListProps['onDeletePin'];
}

export const NavigationPanel = ({
  filter,
  mapId,
  pins = [],
  selectedTime,
  floor,
  onMapChange,
  onTimeChange,
  onFilterChange,
  onDeletePin
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
      <Tab id="pins" label="Pins">
        <PinsList pins={pins} onDeletePin={onDeletePin} />
      </Tab>
      {/* <Tab id="tools" label="Tools">
        <HackingTools />
      </Tab> */}
    </Tabs>
  </div>;
};
