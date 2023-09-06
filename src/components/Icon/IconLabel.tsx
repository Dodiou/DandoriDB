import { Icon, CSSIcon } from "./Icon";
import './IconLabel.css';

export interface IconLabelProps {
  icon: CSSIcon;
  label: string | number;
}

export const IconLabel = ({ icon, label }: IconLabelProps) => {
  return <span className="IconLabel__container">
    <Icon icon={icon} />
    <span>{ label }</span>
  </span>
};
