import { ExoticComponent, Fragment } from "react";
import { DefaultInfo, DefaultInfoProps } from "./DefaultInfo";

export type InfoPanelProps = DefaultInfoProps;

const TypeComponentMap: {[key: string]: ExoticComponent<DefaultInfoProps>} = {

}

export const InfoPanel = ({
  marker
}: InfoPanelProps) => {
  const Renderer = marker ? TypeComponentMap[marker.type] || DefaultInfo : DefaultInfo;

  return <Fragment>
    <Renderer marker={marker} />
  </Fragment>
};