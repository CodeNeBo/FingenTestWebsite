import React from 'react';

const Card = ({ title, currentNumber, lastMonthNumber }) => {
  const difference = currentNumber - lastMonthNumber;
  const symbol = difference > 0 ? '+' : (difference === 0 ? '' : '-');
  const percentageSymbol = title.includes('%') ? '%' : '';
  const bgColorClass = difference > 0 ? 'bg-[#4855E2]' : 'bg-[#EA3382]';

  return (
    <div className="bg-primary border border-white/5 backdrop-blur-xl rounded-lg text-textcolor p-6 w-full relative overflow-hidden">
      <div className={`w-24 h-24 ${bgColorClass} blur-2xl absolute -top-8 -right-4 opacity-60`}></div>
      <h2 className='text-sm pb-2 tracking-wide'>{title}</h2>
      <p className='text-2xl font-black pb-0 tracking-wide'>{currentNumber.toLocaleString("en-US")}</p>
      <p className='text-xs'>{symbol}{Math.abs(difference).toLocaleString("en-US")}{percentageSymbol} from last month</p>
    </div>
  );
};

export default Card;
