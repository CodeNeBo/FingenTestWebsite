import React, { useState, useEffect } from 'react';

const RecentSales = () => {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    fetch('./data/landingdata.json')
      .then(response => response.json())
      .then(data => setSalesData(data.recentTrades.recentTradesData))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl rounded-lg text-textcolor p-6 flex-grow'>
      <h2 className="text-sm tracking-wide pb-4">Recent Gain/Loss</h2>
      <div className='h-64 overflow-y-scroll no-scrollbar'>
        <ul className="divide-y divide-gray-300">
          {salesData.map((trade, index) => (
            <li key={index} className="py-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-textcolor">
                  {`${trade.tradeCurrency1}/${trade.tradeCurrency2}`}
                </p>
                <p className="text-textcolor text-xs text-muted">{`Placed: $${trade.placedBet}`}</p>
              </div>
              <p className="text-textcolor font-semibold">
                {`${trade.wonBet >= 0 ? '+' : '-'}$${Math.abs(trade.wonBet)}`}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecentSales;
