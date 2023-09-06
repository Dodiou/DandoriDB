// import { default as FreezeDropTypes } from './FreezeDropTypes.json';

import { CreatureMarker, InfoType, MarkerType } from "../../api/types";
import { CSSIcon, MarkerIcon } from "../Icon/Icon";

import { IconLabel } from "../Icon/IconLabel";
import { Fragment } from "react";
import { CardList } from "../Card/CardList";
import { DropCard } from "../Card/DropCard";
import { DefaultInfoProps } from "./DefaultInfo";
import { ExpandPanel } from "../ExpandPanel/ExpandPanel";

import './CreatureInfo.css';

interface DamageInfo {
  bomb: number;
  eatBomb: number;
  eatFreeze: number;
  eatIceBomb: number;
  eatPoison: number;
  freeze: number;
  freezeDamageRatio: number;
  iceBomb: number;
  oatchiRush: number;
  oatchiRushFreezeRatio: number;
  pikminHit: number;
  purpleHit: number;
}

interface FreezDropType {
  FreezeDropType: string,
  amount: number;
  honeyChance: number;
}

export const CreatureInfo = ({ marker }: DefaultInfoProps) => {
  // TODO better typings;
  const creature = marker as CreatureMarker;
  const freezeDrops: FreezDropType = // FreezeDropTypes[creature.freezeDropType];
    (marker as any).freezeDrops;

  const title = creature.spawnNum
    ? <Fragment>{ creature.name } &times; { creature.spawnNum }</Fragment>
    : <Fragment>{ creature.name }</Fragment>;

  const dropList = !creature.drops?.length
    ? null
    : <ExpandPanel label="Drops">
        <CardList>
        { creature.drops.map(drop => <DropCard drop={drop} />) }
      </CardList>
    </ExpandPanel>;

  return <div className="CreatureInfo__container">
    <MarkerIcon size="large" type={MarkerType.Creature} id={creature.creatureId} />
    <h2>{ title }</h2>
    <IconLabel icon={CSSIcon.Sparklium} label={creature.value} />
    <IconLabel icon={CSSIcon.Health} label={creature.health} />
    <IconLabel icon={CSSIcon.Weight} label={`${creature.weight} / ${creature.carryMax}`} />
    <IconLabel icon={CSSIcon.Seeds} label={creature.seeds} />
    { dropList }
    { freezeDrops && <ExpandPanel label="Freeze Drops">
      <DropCard
        drop={{
          type: MarkerType.MiscSpicy,
          infoType: InfoType.Misc,
          chance: 1 - freezeDrops.honeyChance,
          min: freezeDrops.amount,
          max: freezeDrops.amount
        }}
      />
    </ExpandPanel> }
  </div>;
};
