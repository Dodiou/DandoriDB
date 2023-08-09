import { TreasureData } from "../../api/MapAPI";
import { Card } from "../Card/Card";
import { CardList } from "../Card/CardList";

export interface TreasuresProps {
  treasures: TreasureData[];
}

const DEFAULT_IMAGE = 'https://pikmin.wiki.gallery/images/e/e2/FruitFinderStar.png';
export const Treasures = ({ treasures }: TreasuresProps) => {
  return <CardList>
    { treasures.map(({ id, name, imageUrl = DEFAULT_IMAGE, value }) => <Card key={id} title={name} imageUrl={imageUrl} value={value} />) }
  </CardList>;
};
