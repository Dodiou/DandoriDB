import { CSSProperties, PropsWithChildren } from "react";

export interface PanelProps {
  position: 'start' | 'end';
  width: CSSProperties['width'];
}

export const Panel = ({ position, width, children }: PropsWithChildren<PanelProps>) => {
  return <div className="Panel__container" style={{ width }}>
    { children }
  </div>;
}