import { PikminCount, TreasureData } from "../../api/MapAPI";
import { IconLabel } from "../Icon/IconLabel";
import { PikminSummary } from "./PikminSummary";

import './CountSummary.css';
import { CSSIcon } from "../Icon/Icon";

export interface CountSummaryProps {
  treasures?: TreasureData[];
  castaways?: number;
  pikmin?: PikminCount;
  candypops?: PikminCount;
}

export const CountSummary = ({ treasures = [], castaways = 0, pikmin, candypops }: CountSummaryProps) => {
  const treasureValue = treasures.reduce((total, treasure) => total += treasure.value, 0);

  return <div className="CountSummary__container">
    <div className="CountSummary__column">
      <IconLabel icon={CSSIcon.Day} label={treasureValue} />
      <IconLabel icon={CSSIcon.Night} label={castaways} />
    </div>
    <div className="CountSummary__column">
      <PikminSummary pikmin={pikmin} />
      <PikminSummary pikmin={candypops} candypops={true} />
    </div>
  </div>
};
