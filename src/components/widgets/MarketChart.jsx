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

const DynamicCard = ({ percent, historyData }) => { 
    return (
      <>
        <TestChart historyData={historyData} percent={percent} />
      </>
    );
};

export default DynamicCard;
