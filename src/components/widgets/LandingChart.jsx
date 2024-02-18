import React, { useState, useEffect } from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const ChartWithTradeCurrencies = () => {
  const [tradeData, setTradeData] = useState([]);

  useEffect(() => {
    fetch('./data/landingdata.json')
      .then(response => response.json())
      .then(data => setTradeData(data.recentTrades.recentTradesData))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const combineCurrencies = (entry) => `${entry.tradeCurrency1}/${entry.tradeCurrency2}`;

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip bg-black/25 p-4 rounded-lg">
          <p className="label">{`${label}:  ${payload[0].value}`}</p>
        </div>
      );
    }
  
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={tradeData}
        margin={{
          top: 32,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.2}/>
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey={combineCurrencies} axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#FFFFFF' }}/>
        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#FFFFFF' }}/>
        <Tooltip  content={<CustomTooltip />} cursor={{fill: 'rgba(255, 255, 255, 0.05)'}} />
        <Bar dataKey="wonBet" fill="url(#colorUv)" radius={[12, 12, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ChartWithTradeCurrencies;
