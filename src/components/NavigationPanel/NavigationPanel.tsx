import { Fragment } from "react";
import { Legend } from "../Legend/Legend";

export interface NavigationPanelProps {
  mapId: string;
  floor?: string;
  onLegendChange?: () => void;
}

export const NavigationPanel = ({
  mapId,
  floor
}: NavigationPanelProps) => {
  const isCave: boolean = false;
  const timeOptions: string[] = isCave ? [] : ['day', 'afternoon', 'night', 'olimar'];

  return <div className="NavigationPanel__container">
    { timeOptions.length !== 0 && <TimeSelector options={timeOptions} /> }
    <Legend />
    <MapDebugInfo />
  </div>;
};
