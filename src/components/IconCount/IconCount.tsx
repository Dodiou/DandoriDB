export interface IconCountProps {
  iconUrl: string;
  amount: number;
}

export const IconCount = ({ iconUrl, amount }: IconCountProps) => {
  return <div>
    <span>{ iconUrl }</span>
    <span>x</span>
    <span>{ amount }</span>
  </div>
};
