import { PropsWithChildren } from "react"

import './CardList.css';

export const CardList = ({ children }: PropsWithChildren<{}>) => {
  return <div className="CardList__container">
    { children }
  </div>
}