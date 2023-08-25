import { useMemo } from "react";
import { Pin } from "../../api/types"

import './PinsList.css';

interface PinViewerProps {
  pin: Pin;
  onDelete: () => void;
}

const PinViewer = ({ pin, onDelete }: PinViewerProps) => {
  const pinColor = `rgb(${pin.color.join(',')})`;

  return <div className="PinViewer__container">
    <span className="DandoriDB__image-icon" style={{ 'backgroundColor': pinColor }}></span>
    <span className="PinViewer__props">
      <div>ID: { pin.pinId }</div>
    </span>
    <span className="PinViewer__props">
      <div>X: { pin.transform.translation.x }</div>
      <div>Y: { pin.transform.translation.y }</div>
    </span>
    <button onClick={onDelete}>Delete</button>
  </div>;
};


export interface PinsListProps {
  pins: Pin[];
  onDeletePin?: (pinId: string) => void;
}

export const PinsList = ({ pins, onDeletePin }: PinsListProps) => {
  const pinElements = useMemo(() => {
    return pins.map(pin => {
      const onDelete = () => onDeletePin?.(pin.pinId);
      return <PinViewer key={pin.pinId} pin={pin} onDelete={onDelete} />;
    });
  }, [pins, onDeletePin]);

  return <div className="PinsList__container">
    <p>Use Shift+click to place a pin on the map</p>
    { pinElements }
  </div>;
}
