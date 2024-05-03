import React from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const TestChart = ({ historyData, percent }) => {
  const chartFill = percent > 0 ? '#3644DF' : '#EA3382';
  
  const getChartGradient = () => {
    return `url(#chartUv${percent > 0 ? 'Positive' : 'Negative'})`;
  };

  return (
    <ResponsiveContainer width="100%" height={96}>
      <AreaChart data={historyData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="chartUvPositive" x1="0" y1="0" x2="0" y2="100%">
            <stop offset="0%" stopColor="#3644DF" stopOpacity={1.0} />
            <stop offset="30%" stopColor="#3644DF" stopOpacity={0.9} />
            <stop offset="90%" stopColor="#3644DF" stopOpacity={0.0} /> 
          </linearGradient>
          <linearGradient id="chartUvNegative" x1="0" y1="0" x2="0" y2="100%">
            <stop offset="0%" stopColor="#EA3382" stopOpacity={1.0} />
            <stop offset="30%" stopColor="#EA3382" stopOpacity={0.9} />
            <stop offset="90%" stopColor="#EA3382" stopOpacity={0.0} /> 
          </linearGradient>
        </defs>
        <Area type="monotone" dataKey="value" stroke={chartFill} fill={getChartGradient()} />
      </AreaChart>
    </ResponsiveContainer>
  );
};

const DynamicCard = ({ iconPlace, edgenumber, edgename, percent, historyData }) => {
    const history1 = historyData[1].value;
    const difference = edgenumber - history1;
    console.log (iconPlace);
    
    const percentColor = percent > 0 ? 'bg-[#3644DF]' : 'bg-[#EA3382]';
  
    return (
      <div className="bg-gradient-to-br from-[#484483] to-primary p-px w-full h-fit rounded-2xl">
        <div className="bg-primary p-4 pb-3 rounded-2xl w-full flex flex-col gap-16 relative overflow-clip">
          <div className="inline-flex justify-between w-full">
            <div className="inline-flex gap-2 items-center justify-center">
                <img
                className='w-8 h-8'
                    src={iconPlace}
                    alt={iconPlace}
                    onError={(error) => {
                    console.error('Error loading image:', iconPlace);
                    error.target.src = './icons/PurpleDot.svg';
                    }}
                />
                <h3 className="text-xl font-main font-bold z-40">{edgename}</h3>
            </div>
            
            <div className={`px-3 py-0.5 rounded-full ${percentColor} flex justify-center items-center`}>
              <p className={`text-xs font-main z-40`}>{percent}%</p>
            </div>
          </div>
          <h2 className="text-2xl font-main font-bold text-right z-40">{edgenumber}</h2>
          <div className="absolute bottom-0 w-full right-0">
            <TestChart historyData={historyData} percent={percent} />
          </div>
        </div>
      </div>
    );
};

export default DynamicCard;