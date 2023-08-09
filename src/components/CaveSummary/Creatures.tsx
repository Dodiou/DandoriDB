import { CreatureAggregate } from "../../api/MapAPI";
import { Card } from "../Card/Card";
import { CardList } from "../Card/CardList";

export interface CreaturesProps {
  creatures: CreatureAggregate[];
}

const DEFAULT_IMAGE = 'https://pikmin.wiki.gallery/images/f/fc/P4PiklopediaIcon.png';
export const Creatures = ({ creatures }: CreaturesProps) => {
  return <CardList>
    { creatures.map(({ id, name, imageUrl = DEFAULT_IMAGE, amount, value }) => <Card key={id} title={name} imageUrl={imageUrl} amount={amount} value={value} />) }
  </CardList>;
};
