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
    <div className='bg-white rounded-lg text-textdark p-6 border border-textdark shadow-xl flex-grow'>
      <h2 className="text-sm tracking-wide pb-4">Recent Gain/Loss</h2>
      <div className='h-64 overflow-y-scroll no-scrollbar'>
        <ul className="divide-y divide-gray-300">
          {salesData.map((trade, index) => (
            <li key={index} className="py-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-textdark">
                  {`${trade.tradeCurrency1}/${trade.tradeCurrency2}`}
                </p>
                <p className="text-textdark text-xs text-muted">{`Placed: $${trade.placedBet}`}</p>
              </div>
              <p className="text-textdark font-semibold">
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
