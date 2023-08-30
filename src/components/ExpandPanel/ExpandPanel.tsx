import { PropsWithChildren, useState } from "react";

export interface ExpandPanelProps {
  label: string;
}

export const ExpandPanel = ({ label, children }: PropsWithChildren<ExpandPanelProps>) => {
  const [expanded, setExpanded] = useState(false);

  return <div className="ExpandPanel__container">
    <h2 className="ExpandPanel__label">
      <button onClick={() => setExpanded(!expanded)}>+</button> { label }
    </h2>
    {
      expanded && <div className="ExpandPanel__content">
        { children }
      </div>
    }
  </div>;
};
