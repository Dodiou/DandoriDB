import { ReactNode } from "react";
import { MarkerType } from "../../api/types";
import { MarkerIcon } from "../Icon/Icon";
import './Card.css';

export interface CardProps {
  title: string;
  imgType: MarkerType;
  imgId?: string;
  footer?: ReactNode;
}

export const Card = ({ title, imgId, imgType, footer }: CardProps) => {
  return <div className="Card__container">
    <MarkerIcon type={imgType} id={imgId} size="medium" />
    <div className="Card__content">
      <h4 className="Card__header" title={title}>{ title }</h4>
      {
        footer && <div className="Card__footer">{ footer }</div>
      }
    </div>
  </div>;
};
