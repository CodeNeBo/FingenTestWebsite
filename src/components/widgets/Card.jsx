import React from 'react';

const Card = ({ title, currentNumber, lastMonthNumber }) => {
  const difference = currentNumber - lastMonthNumber;
  const symbol = difference > 0 ? '+' : (difference === 0 ? '' : '-');
  const percentageSymbol = title.includes('%') ? '%' : '';

  return (
    <div className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl rounded-lg text-textcolor p-6 w-full">
      <h2 className='text-sm pb-2 tracking-wide'>{title}</h2>
      <p className='text-2xl font-black pb-0 tracking-wide'>{currentNumber.toLocaleString("en-US")}</p>
      <p className='text-xs'>{symbol}{Math.abs(difference).toLocaleString("en-US")}{percentageSymbol} from last month</p>
    </div>
  );
};

export default Card;
