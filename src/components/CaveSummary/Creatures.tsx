import { CreatureAggregate } from "../../api/MapAPI";
import { MarkerType } from "../../api/types";
import { Card } from "../Card/Card";
import { CardList } from "../Card/CardList";
import { ValueCard } from "../Card/ValueCard";

export interface CreaturesProps {
  creatures: CreatureAggregate[];
}

export const Creatures = ({ creatures }: CreaturesProps) => {
  return <CardList>
    {
      creatures.map(({ id, name, amount, value }) =>
        <ValueCard key={id} name={name} type={MarkerType.Creature} id={id} amount={amount} value={value} />)
    }
  </CardList>;
};
