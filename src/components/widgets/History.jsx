import React, { useState, useEffect } from 'react';

const RecentSales = () => {
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    fetch('./data/landingdata.json')
      .then(response => response.json())
      .then(data => setSalesData(data.recentTrades.recentTradesData))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const loadIcon = (currency) => {
    return (
      <img
        src={`../src/icons/Crypto/${currency}.svg`}
        alt={`${currency} icon`}
        onError={(e) => {
          e.target.style.display = 'none';
        }}
        className="w-8 h-8 rotate-12"
      />
    );
  };

  const growthIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffffff"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 17l6 -6l4 4l8 -8" />
      <path d="M14 7l7 0l0 7" />
    </svg>
  );

  const lossIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffffff"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 7l6 6l4 -4l8 8" />
      <path d="M21 10l0 7l-7 0" />
    </svg>
  );

  return (
    <div className='p-px bg-gradient-to-br from-[#6A6A9B] to-[#100F1D] rounded-lg flex-grow -z-40'>
      <div className='bg-primary rounded-lg text-textcolor p-4 md:p-6 flex-grow relative overflow-clip -z-20'>
        <div class="absolute w-96 h-32 bg-accent blur-3xl rounded-full -z-10 opacity-20 -top-20 left-1/2 transform -translate-x-1/2"></div>
        <div class="absolute w-32 h-32 bg-accent blur-3xl rounded-full -z-10 opacity-20 -bottom-20 left-0"></div>
        <h2 className="md:text-sm tracking-wide pb-4 font-main">Recent Trades</h2>
        <div className='h-64 overflow-y-scroll no-scrollbar'>
          <ul className="divide-y divide-gray-300/5">
            {salesData.map((trade, index) => (
              <li key={index} className="py-4 flex items-center justify-between">
                <div className="flex flex-row gap-1 items-center">
                  <div className='w-fit h-fit rounded-full mr-2 bg-white'>{loadIcon(trade.tradeCurrency1)}</div>
                  <p className="text-textcolor">
                    {trade.tradeCurrency1}
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="text-right">
                    {trade.wonBet >= 0 ? (
                      <span>+${Math.abs(trade.wonBet)}</span>
                    ) : (
                      <span>-${Math.abs(trade.wonBet)}</span>
                    )}
                  </p>
                  <div
                    className={`text-white text-xs font-normal px-2 py-0.5 rounded mt-1 flex flex-row gap-1 items-center justify-center ${
                      trade.wonBet >= 0 ? 'bg-[#3644DF]' : 'bg-[#EA3382]'
                    }`}
                  >
                    {trade.wonBet >= 0 ? (
                      <>
                        Growth
                        {growthIcon}
                      </>
                    ) : (
                      <>
                        Loss
                        {lossIcon}
                      </>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecentSales;
