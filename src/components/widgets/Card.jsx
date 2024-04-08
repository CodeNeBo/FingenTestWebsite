import React, { PureComponent } from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const Card = ({ title, currentNumber, lastMonthNumber, historyData }) => {
  const difference = currentNumber - lastMonthNumber;
  const symbol = difference > 0 ? '+' : (difference === 0 ? '' : '-');
  const percentageSymbol = title.includes('%') ? '%' : '';
  const bgColorClass = difference > 0 ? 'bg-[#3644DF]' : 'bg-[#EA3382]';
  const textColorClass = difference > 0 ? 'text-[#3644DF]' : 'text-[#EA3382]';

  const chartFill = currentNumber > lastMonthNumber ? '#3644DF' : '#EA3382';

  return (
    <div className='p-px bg-gradient-to-br from-[#6A6A9B] to-[#100F1D] rounded-lg overflow-clip w-full -z-40 relative h-full aspect-square md:aspect-auto'>
      <div className="bg-primary text-textcolor p-4 md:p-5 relative overflow-hidden flex flex-col md:flex-row justify-between font-main w-full h-full rounded-[8px] md:rounded-[12px] lg:rounded-[9px]">
        <div className={`w-48 h-10 -rotate-45 ${bgColorClass} blur-2xl absolute -top-6 -right-0 md:-top-8 md:right-16 opacity-100 z-10`}></div>
        <div className={`md:hidden w-32 h-24 ${bgColorClass} blur-2xl absolute -bottom-16 -right-16 opacity-75 z-10`}></div>
        <div className='flex flex-col z-20 h-full'>
          <div className='flex flex-row items-center justify-between mb-auto'>
            <h2 className='text-sm pb-1 tracking-wide font-main font-light md:mb-0'>{title}</h2>
            <p className={`md:hidden text-left text-xs h-fit ${textColorClass}`}>{symbol}{Math.abs(difference).toLocaleString("en-US")}{percentageSymbol}</p>
          </div>
          <p className='text-2xl md:text-xl font-black pb-0 tracking-wide text-right md:text-left'>{currentNumber.toLocaleString("en-US")}</p>
        </div>
        <div className='hidden md:flex flex-col justify-end z-20'>
          <p className='text-right text-regular'>{symbol}{Math.abs(difference).toLocaleString("en-US")}{percentageSymbol}</p>
          <p className='text-xs'>from last month</p>
        </div>
      </div>
      <div className='absolute w-full bottom-0 md:w-40 md:h-24 md:top-5 right-0 md:opacity-80'>
        {historyData && (
          <ResponsiveContainer width="100%" height={96}>
            <AreaChart data={historyData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="100%">
                  <stop offset="0%" stopColor="#8a14f6" stopOpacity={1.0} />
                  <stop offset="30%" stopColor="#8a14f6" stopOpacity={0.9} />
                  <stop offset="90%" stopColor="#8a14f6" stopOpacity={0.0} /> 
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="value" stroke="#8a14f6" fill="url(#colorUv)" />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default Card;
