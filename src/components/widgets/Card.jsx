import React from 'react';

const Card = ({ title, currentNumber, lastMonthNumber }) => {
  const difference = currentNumber - lastMonthNumber;

  return (
    <div className="bg-white rounded-lg text-textdark p-6 border border-textdark shadow-xl w-full">
      <h2 className='text-sm pb-2'>{title}</h2>
      <p className='text-xl font-black pb-0'>{currentNumber}</p>
      <p className='text-xs text-muted'>{difference} from last month</p>
    </div>
  );
};

export default Card;
