import { FC } from "react";
import { DefaultInfo, DefaultInfoProps } from "./DefaultInfo";
import { Marker, MarkerType } from "../../api/types";
import { CreatureInfo } from "./CreatureInfo";
import { Tab, Tabs } from "../Tabs/Tabs";

export interface InfoPanelProps {
  marker: Marker | undefined;
};

const TypeComponentMap: {[P in MarkerType]?: FC<DefaultInfoProps>} = {
  [MarkerType.Creature]: CreatureInfo,
}

export const InfoPanel = ({
  marker
}: InfoPanelProps) => {
  if (!marker) {
    return null;
  }

  const Renderer = TypeComponentMap[marker.type];
  if (!Renderer) {
    return <DefaultInfo marker={marker} />;
  }

  return <Tabs>
    <Tab id="formatted" label="Formatted">
      <Renderer marker={marker} />
    </Tab>
    <Tab id="raw" label="Raw">
      <DefaultInfo marker={marker} />
    </Tab>
  </Tabs>;
};