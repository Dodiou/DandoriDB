import { MarkerType } from "../../api/types";
import { getIconOptions } from "../Map/FeatureStyles";

export enum CSSIcon {
  Day = 'Day',
  Afternoon = 'Afternoon',
  Night = 'Night',
  Olimar = 'Olimar',
  Sparklium = 'Sparklium'
}

export interface IconProps {
  icon: CSSIcon;
  tooltip?: string;
}
export const Icon = ({ icon, tooltip }: IconProps) =>
  <span className={'DandoriDB__icon ' + icon} title={tooltip} />;


export interface MarkerIconProps {
  type: MarkerType;
}
export const MarkerIcon = ({ type }: MarkerIconProps) =>
  <img className="DandoriDB__image-icon" src={getIconOptions(type).src} />;
