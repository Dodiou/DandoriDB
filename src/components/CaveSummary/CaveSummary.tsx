import { CaveData } from "../../api/MapAPI";
import { CountSummary } from "./CountSummary";
import { Creatures } from "./Creatures";
import { Onions } from "./Onions";
import { Sublevels } from "./Sublevels";
import { Treasures } from "./Treasures";

export const CaveSummary = ({
  id,
  name,
  sublevels,
  castaways,
  treasures,
  onions,
  creatures,
  candypops,
  pikmin,
}: CaveData) => {
  return <>
    <h1>{ name }</h1>
    <CountSummary treasures={treasures} pikmin={pikmin} candypops={candypops} castaways={castaways} />
    <Sublevels amount={sublevels} caveId={id} />
    { treasures && <Treasures treasures={treasures} /> }
    { onions && <Onions onions={[]} /> }
    { creatures && <Creatures creatures={creatures} /> }
  </>
};