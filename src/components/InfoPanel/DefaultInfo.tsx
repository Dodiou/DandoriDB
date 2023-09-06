import { useMemo } from "react";
import { Marker } from "../../api/types";

export interface DefaultInfoProps {
  marker: Marker;
}

const objectToList = (obj: object | null | undefined) => {
  if (!obj) {
    return null;
  }

  return Object.entries(obj).map(([key, value]) => {
    if (value == null) {
      return <li key={key}>{ key }: undefined</li>;
    }

    if (typeof value === 'object') {
      return <li key={key}>
        { key }
        <ul>{ objectToList(value) }</ul>
      </li>;
    }

    return <li key={key}>{ key }: { value + "" }</li>;
  });
}

export const DefaultInfo = ({
  marker
}: DefaultInfoProps) => {
  const propertiesList = useMemo(() => {
    return objectToList(marker);
  }, [marker]);

  return <ul className="DefaultInfo__container" style={{ overflow: 'auto' }}>
    { propertiesList }
  </ul>;
};
