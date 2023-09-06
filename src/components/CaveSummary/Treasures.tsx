import { TreasureData } from "../../api/MapAPI";
import { MarkerType } from "../../api/types";
import { Card } from "../Card/Card";
import { CardList } from "../Card/CardList";
import { ValueCard } from "../Card/ValueCard";

export interface TreasuresProps {
  treasures: TreasureData[];
}

export const Treasures = ({ treasures }: TreasuresProps) => {
  return <CardList>
    {
      treasures.map(({ id, name, value, amount }) =>
        <ValueCard key={id} name={name} type={MarkerType.Treasure} id={id} value={value} amount={amount} />)
    }
  </CardList>;
};
