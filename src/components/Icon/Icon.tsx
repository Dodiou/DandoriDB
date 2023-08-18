export enum CSSIcon {
  Day = 'Day',
  Afternoon = 'Afternoon',
  Night = 'Night',
  Olimar = 'Olimar',
  Sparklium = 'Sparklium'
}

export interface IconProps {
  icon: CSSIcon;
  tooltip?: string;
}
export const Icon = ({ icon, tooltip }: IconProps) =>
  <span className={'DandoriDB__icon ' + icon} title={tooltip} />
