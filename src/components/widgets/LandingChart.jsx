import React, { useState, useEffect } from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const ChartWithTradeCurrencies = () => {
  const [tradeData, setTradeData] = useState([]);

  useEffect(() => {
    // Fetch data from local JSON file
    fetch('./data/landingdata.json')
      .then(response => response.json())
      .then(data => setTradeData(data.recentTrades.recentTradesData))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const combineCurrencies = (entry) => `${entry.tradeCurrency1}/${entry.tradeCurrency2}`;

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
        <XAxis dataKey={combineCurrencies} axisLine={false} tickLine={false} tick={{ fontSize: 12 }}/>
        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12}}/>
        <Tooltip label="Trade Pair" formatter={(value, name) => [value, name === 'wonBet' ? 'Earned' : name]}/>
        <Bar dataKey="wonBet" fill="#000000" radius={[12, 12, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ChartWithTradeCurrencies;
