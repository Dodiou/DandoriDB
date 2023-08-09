
export interface CardProps {
  title: string;
  imageUrl: string;
  amount?: number;
  value?: number;
}

export const Card = ({ title, imageUrl, amount, value }: CardProps) => {
  return <div>
    <h3>{ title }</h3>
    <img src={imageUrl} alt={title} />
    <div>
      { !!amount && <span className='Card__amount'>{ amount }</span> }
      { !!amount && !!value && <span className='Card__multiply-symbol'>x</span> }
      { !!value && <span className='Card__value'>{ value }</span> }
    </div>
  </div>;
};
