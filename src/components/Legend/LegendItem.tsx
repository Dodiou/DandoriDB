
export interface LegendItemProps {
  name: string;
  selected: boolean;
  count?: number;
  onClick?: () => void;
}

export const LegendItem = ({
  name,
  selected,
  count,
  onClick
}: LegendItemProps) => {
  const containerClass = 'LegendItem__container' + selected ? '' : 'LegendItem__container__deselected';

  return <button className={containerClass} onClick={() => onClick}>
    <img className='DandoriDB__icon' src='/icons/radar/caveEntrance.png' />
    <span className='LegendItem__name'>{ name }</span>
    { count !== undefined && <span>{ count }</span> }
  </button>;
}
