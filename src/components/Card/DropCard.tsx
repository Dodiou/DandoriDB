import { Fragment } from "react";
import { Drop, MarkerType } from "../../api/types";
import { Card } from "./Card";
import { ValueCard } from "./ValueCard";

export interface DropCardProps {
  drop: Drop;
}

const DropNameMap: {[P in MarkerType]?: string} = {
  [MarkerType.MiscHoney]: 'Honey',
  [MarkerType.MiscSpicy]: 'Spicy Spray',
  [MarkerType.BreakableEgg]: 'Egg',
  [MarkerType.PileMaterials]: 'Materials',
  [MarkerType.MiscBomb]: 'Bomb',
  [MarkerType.MiscIcebomb]: 'Ice Bomb',
  [MarkerType.CastawayNormal]: 'Castaway',
  [MarkerType.CastawayLeafling]: 'Leafling',
  [MarkerType.PikminRed]: 'Red',
  [MarkerType.PikminYellow]: 'Yellow',
  [MarkerType.PikminBlue]: 'Blue',
  [MarkerType.PikminPurple]: 'Purple',
  [MarkerType.PikminWhite]: 'White',
  [MarkerType.PikminRock]: 'Rock',
  [MarkerType.PikminWing]: 'Wing',
  [MarkerType.PikminIce]: 'Ice',
};

export const DropCard = ({ drop }: DropCardProps) => {
  // TODO find better way to signify revisits
  const nameSuffix = drop.revisitOnly ? ' (Revisit only)' : '';

  if (drop.type === MarkerType.Creature || drop.type === MarkerType.Treasure) {
    // TODO: type this out better
    return <ValueCard
      type={drop.type}
      id={(drop as any).creatureId || (drop as any).treasureId}
      name={(drop as any).name + nameSuffix}
      amount={drop.min} // all creatures/treasures have the same min and max
      value={(drop as any).value}
    />;
  }

  const name = (DropNameMap[drop.type] || '') + nameSuffix;
  
  const amountStr = drop.max !== drop.min
    ? `${drop.min}-${drop.max}`
    : drop.max + '';
  const footer = <Fragment>
    {
      amountStr && <span>Amount: { amountStr }</span>
    }
    {
      drop.chance < 1 && <span>Chance: { Math.round(drop.chance * 100) + '%' }</span>
    }
  </Fragment>;

  return <Card
    title={name}
    imgType={drop.type}
    footer={footer}
  />;
};
