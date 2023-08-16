
export interface CardProps {
  title: string;
  imageUrl: string;
  amount?: number;
  value?: number;
}

export const Card = ({ title, imageUrl, amount = 0, value }: CardProps) => {
  const showAmount = amount > 1;

  return <div className="Card__container">
    <h3>{ title }</h3>
    <img src={imageUrl} alt={title} />
    <div>
      { showAmount && <span className='Card__amount'>{ amount }</span> }
      { showAmount && !!value && <span className='Card__multiply-symbol'>x</span> }
      { !!value && <span className='Card__value'>{ value }</span> }
    </div>
  </div>;
};
