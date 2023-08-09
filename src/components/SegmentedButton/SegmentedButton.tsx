
export interface SegmentedButtonOption {
  id: string;
  icon?: string;
  label: string;
}
export interface SegmentedButtonProps {
  options: SegmentedButtonOption[];
  selectedId: string;
  hideLabel?: boolean;
  onSelect?: (id: string) => void;
}

export const SegmentedButton = ({
  options,
  selectedId,
  hideLabel = false,
  onSelect
}: SegmentedButtonProps) => {
  const buttons = options.map(({ icon, id, label }) => {
    const buttonClass = 'SegmentedButton__button' + id === selectedId ? 'SegmentedButton__button__selected' : '';

    return <button className={buttonClass} onClick={() => onSelect?.(id)}>
      { icon && <img className="DandoriDB__icon" src="/public/icons/radar/caveEntrance.png" /> }
      { (!hideLabel || !icon) && <span className="SegmentedButton__label">{ label }</span> }
    </button>;
  })

  return <div className="SegmentedButton__container">
    { buttons }
  </div>;
};
