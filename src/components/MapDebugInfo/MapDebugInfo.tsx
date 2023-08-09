export interface MapDebugInfoProps {
  x: number;
  y: number;
  scale: number;
  rotation: number;
}

export const MapDebugInfo = ({
  x,
  y,
  scale,
  rotation
}: MapDebugInfoProps) => {
  return <div className="MapDebugInfo__container">
    { `Location: (${x},${y})` }
    <br />
    { `Scale: ${scale}`}
    <br />
    { `Rotation: ${rotation}` }
  </div>
}
