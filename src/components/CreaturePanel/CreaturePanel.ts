import { InfoType, MarkerType } from "../../api/types";

export interface Creature {
  type: MarkerType.Creature;
  infoType: InfoType.Creature;
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
