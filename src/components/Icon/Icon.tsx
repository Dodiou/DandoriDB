import { MarkerType } from "../../api/types";
import { getIconOptions } from "../Map/FeatureStyles";

export enum CSSIcon {
  Day = 'Day',
  Afternoon = 'Afternoon',
  Night = 'Night',
  Olimar = 'Olimar',
  Sparklium = 'Sparklium',
  Health = 'Health',
  Seeds = 'Seeds',
  Weight = 'Weight'
}

export interface IconProps {
  icon: CSSIcon;
  tooltip?: string;
}
export const Icon = ({ icon, tooltip }: IconProps) =>
  <span className={'DandoriDB__icon ' + icon} title={tooltip} />;


export interface MarkerIconProps {
  type: MarkerType;
  id?: string;
  size?: 'small' | 'medium' | 'large'
}
export const MarkerIcon = ({ type, id, size = 'small' }: MarkerIconProps) => {
  const sizeClass = 'DandoriDB__icon__' + size;
  const src = !id
    ? getIconOptions(type).src
    : process.env.PUBLIC_URL + `/images/${type}s/${type}-${id.toLowerCase()}.png`;

  return <img className={`DandoriDB__image-icon ${sizeClass}`} src={src} />;
}
