import { useMemo } from "react";

export interface DefaultInfoProps {
  marker?: { type: string };
}

const objectToList = (obj: object | null | undefined) => {
  if (!obj) {
    return null;
  }

  return Object.entries(obj).map(([key, value]) => {
    if (value == null) {
      return <li>{ key }: undefined</li>;
    }

    if (typeof value === 'object') {
      return <li>
        { key }
        <ul>{ objectToList(value) }</ul>
      </li>;
    }

    return <li>{ key }: { value + "" }</li>;
  });
}

export const DefaultInfo = ({
  marker
}: DefaultInfoProps) => {
  const propertiesList = useMemo(() => {
    return objectToList(marker);
  }, [marker]);

  return <ul className="DefaultInfo__container">
    { propertiesList }
  </ul>;
};
