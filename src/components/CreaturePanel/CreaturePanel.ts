import { ObjectTypes } from "../Map/FeatureStyles";

export interface Creature {
  type: ObjectTypes.Creature;
  creatureId: string;
  name: string;
  value: number;
  seeds: number;
  drops?: any[];
}

export interface CreaturePanelProps {
  creature: Creature;
};

export const CreaturePanel = ({
  creature
}: CreaturePanelProps) => {
  
};
