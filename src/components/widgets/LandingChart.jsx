import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip, Cell } from 'recharts';

const ChartWithTradeCurrencies = () => {
  const [tradeData, setTradeData] = useState([]);

  useEffect(() => {
    const serverUrl = 'https://a925-185-143-147-162.ngrok-free.app/';

    const fetchData = async () => {
      try {
        const response = await fetch(`${serverUrl}/data/landingdata.json`, {
          headers: {
            'ngrok-skip-browser-warning': 'true',
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setTradeData(jsonData.recentTrades.recentTradesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    const socket = io(serverUrl.replace('https://', 'wss://'), {
      extraHeaders: {
        'ngrok-skip-browser-warning': 'true',
      },
    });

    socket.on('data', (jsonData) => {
      console.log('Received data:', jsonData);
      setTradeData(jsonData.recentTrades.recentTradesData);
    });

    socket.on('connect_error', (err) => {
      console.error('Connection error:', err);
    });

    socket.on('error', (err) => {
      console.error('Server error:', err);
    });

    return () => socket.disconnect();
  }, []);

  const combineCurrencies = (entry) => `${entry.tradeCurrency1}`;

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

  const getBarGradient = (value) => {
    return `url(#colorUv${value >= 0 ? 'Positive' : 'Negative'})`;
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={tradeData}
        margin={{
          top: 24,
          right: 0,
          left: -24,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorUvPositive" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4855E2" stopOpacity={1} />
            <stop offset="100%" stopColor="#4855E2" stopOpacity={1} />
          </linearGradient>
          <linearGradient id="colorUvNegative" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#EA3382" stopOpacity={1} />
            <stop offset="100%" stopColor="#EA3382" stopOpacity={1} />
          </linearGradient>
        </defs>
        <XAxis dataKey={combineCurrencies} axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#FFFFFF' }}/>
        <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#FFFFFF' }}/>
        <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255, 255, 255, 0.05)' }} />
        <Bar dataKey="wonBet" radius={[6, 6, 6, 6]}>
          {tradeData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={getBarGradient(entry.wonBet)} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ChartWithTradeCurrencies;
