import { Icon, CSSIcon } from "./Icon";

export interface IconCountProps {
  icon: CSSIcon;
  amount: number;
}

export const IconCount = ({ icon, amount }: IconCountProps) => {
  return <div>
    <Icon icon={icon} />
    <span>x</span>
    <span>{ amount }</span>
  </div>
};
