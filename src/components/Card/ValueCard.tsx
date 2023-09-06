import { MarkerType } from "../../api/types";
import { CSSIcon } from "../Icon/Icon";
import { IconLabel } from "../Icon/IconLabel";
import { Card } from "./Card";


export interface ValueCardProps {
  type: MarkerType.Creature | MarkerType.Treasure;
  id: string;
  name: string;
  amount?: number;
  value?: number;
}

// TODO: type this out better
export const ValueCard = ({ type, id, name, amount = 0, value = 0 }: ValueCardProps) => {
  const showAmount = amount > 1;

  const footer = (showAmount || !!value) && <div style={{ display: "flex", alignItems: 'center' }}>
    { showAmount && <span className='Card__amount'>{ amount }</span> }
    { showAmount && !!value && <span className='Card__multiply-symbol'>&times;</span> }
    { !!value && <IconLabel icon={CSSIcon.Sparklium} label={value} />}
  </div>;

  return <Card
    title={name}
    imgType={type}
    imgId={id}
    footer={footer}
  />;
};
