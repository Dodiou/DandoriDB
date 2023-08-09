import { PropsWithChildren } from "react";
import './PanelLayout.css';

const Panel = ({ children }: PropsWithChildren<{}>) => {
  return children
    ? <div className="PanelLayout__panel">{ children }</div>
    : undefined;
}

export interface PanelLayoutProps {
  leftPanel?: JSX.Element;
  rightPanel?: JSX.Element;
}

export const PanelLayout = ({ leftPanel, rightPanel, children }: PropsWithChildren<PanelLayoutProps>) => {
  return <div className="PaneLayout__container">
    <Panel>{ leftPanel }</Panel>
    <div className="PanelLayout__center">{ children }</div>
    <Panel>{ rightPanel }</Panel>
  </div>;
}