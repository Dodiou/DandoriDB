import { PikminCount } from "../../api/MapAPI";
import { IconCount } from "../Icon/IconCount";

import "./PikminSummary.css";

export interface PikminSummaryProps {
  pikmin?: PikminCount;
  candypops?: boolean;
}

const EMPTY_PIKMIN_COUNT: PikminCount = {
  red: 0,
  yellow: 0,
  blue: 0,
  purple: 0,
  white: 0,
  rock: 0,
  wing: 0,
  ice: 0,
  bulbmin: 0,
};
export const PikminSummary = ({ pikmin = {}, candypops = false }: PikminSummaryProps) => {
  const allPikminTypes = { ...EMPTY_PIKMIN_COUNT, ...pikmin };

  return <div className="PikminSummary__list">
    { Object.entries(allPikminTypes).map(([type, amount]) => <div key={type} >{ amount }</div>)}
  </div>;
};