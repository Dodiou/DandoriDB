import { MarkerType } from "../../api/types";
import { Card } from "../Card/Card";
import { CardList } from "../Card/CardList";

export interface OnionsProps {
  onions: MarkerType[];
};

const DEFAULT_IMAGE = 'https://pikmin.wiki.gallery/images/e/e2/FruitFinderStar.png';
export const Onions = ({ onions }: OnionsProps) => {
  return <CardList>
    {
      onions.map(type =>
        <Card key={type} title={'Onion'} imgType={type} />)
    }
  </CardList>;
};
