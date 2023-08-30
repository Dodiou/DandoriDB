import { SegmentedButton } from "../SegmentedButton/SegmentedButton";

export interface MapsItem {
  label: string;

}

export const MapsListItem = ({ label, }: MapsItem) => {
  const sublevelOptions = [];

  return <div className="MapsListItem__container">
    <div className="MapListItem__label">{ label }</div>
  </div>;
};
