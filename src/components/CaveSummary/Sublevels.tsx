
export interface SublevelsProps {
  amount: number;
  caveId: string;
}

export const Sublevels = ({ amount }: SublevelsProps) => {
  return <div>
    { [...Array(amount)].map((_item, index) => <a key={index}>{ index }</a>)}
  </div>;
};
