import React, { PureComponent } from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const Card = ({ title, currentNumber, lastMonthNumber, historyData }) => {
  const difference = currentNumber - lastMonthNumber;
  const symbol = difference > 0 ? '+' : (difference === 0 ? '' : '-');
  const percentageSymbol = title.includes('%') ? '%' : '';
  const bgColorClass = difference > 0 ? 'bg-[#3644DF]' : 'bg-[#EA3382]';

  const chartFill = currentNumber > lastMonthNumber ? '#3644DF' : '#EA3382';

  return (
    <div className='p-px bg-gradient-to-br from-[#6A6A9B] to-[#100F1D] rounded-lg overflow-clip w-full -z-40 relative'>
      <div className="bg-primary text-textcolor p-5 relative overflow-hidden inline-flex justify-between font-main w-full md:rounded-[12px] lg:rounded-[9px]">
        <div className={`w-48 h-10 -rotate-45 ${bgColorClass} blur-2xl absolute -top-8 right-16 opacity-100 z-10`}></div>
        <div className='flex flex-col z-20'>
          <h2 className='text-sm pb-1 tracking-wide'>{title}</h2>
          <p className='text-xl font-black pb-0 tracking-wide'>{currentNumber.toLocaleString("en-US")}</p>
        </div>
        <div className='flex flex-col justify-end z-20'>
          <p className='text-right text-regular'>{symbol}{Math.abs(difference).toLocaleString("en-US")}{percentageSymbol}</p>
          <p className='text-xs'>from last month</p>
        </div>
      </div>
      <div className='absolute w-40 h-24 top-5 right-0 opacity-80'>
        {historyData && (
          <ResponsiveContainer width="100%" height={96}>
            <AreaChart data={historyData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="100%">
                  <stop offset="0%" stopColor={chartFill} stopOpacity={1.0} />
                  <stop offset="30%" stopColor={chartFill} stopOpacity={1.0} />
                  <stop offset="90%" stopColor={chartFill} stopOpacity={0.2} /> 
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="value" stroke={chartFill} fill="url(#colorUv)" />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default Card;
