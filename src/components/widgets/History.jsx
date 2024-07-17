import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const RecentSales = () => {
  const [salesData, setSalesData] = useState([]);

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
        setSalesData(jsonData.recentTrades.recentTradesData);
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
      setSalesData(jsonData.recentTrades.recentTradesData);
    });

    socket.on('connect_error', (err) => {
      console.error('Connection error:', err);
    });

    socket.on('error', (err) => {
      console.error('Server error:', err);
    });
    return () => socket.disconnect();
  }, []);

  return (
    <div className='p-px bg-gradient-to-br from-[#6A6A9B] to-[#100F1D] rounded-lg flex-grow -z-40'>
      <div className='bg-primary rounded-lg text-textcolor p-4 md:p-6 flex-grow relative overflow-clip -z-20 h-full'>
        <div className="absolute w-96 h-32 bg-accent blur-3xl rounded-full -z-10 opacity-20 -top-20 left-1/2 transform -translate-x-1/2"></div>
        <div className="absolute w-32 h-32 bg-accent blur-3xl rounded-full -z-10 opacity-20 -bottom-20 left-0"></div>
        <h2 className="md:text-sm tracking-wide pb-4 font-main">Recent Trades</h2>
        <div className='h-64 overflow-scroll z-50'>
          <ul className="divide-y divide-gray-300/5">
            {salesData.map((trade, index) => (
              <li key={index} className="py-4 flex items-center justify-between">
                <div className="flex flex-row gap-2 items-center">
                  <img
                    className='w-6 h-6 md:w-8 md:h-8'
                    src={`./icons/${trade.tradeCurrency1}.svg`}
                    alt={trade.tradeCurrency1}
                    onError={(error) => {
                      console.error('Error loading image:', trade.tradeCurrency1);
                      error.target.src = './icons/PurpleDot.svg';
                    }}
                  />
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
                  <div className='inline-flex gap-2 items-center'>
                    <p className='text-muted text-xs pt-1'>Strategy: </p>
                    <div
                      className={`text-white text-xs font-normal px-2 py-0.5 rounded mt-1 flex flex-row gap-1 items-center justify-center uppercase w-16 ${
                        trade.wonBet >= 0 ? 'bg-[#3644DF]' : 'bg-[#EA3382]'
                      }`}
                    >
                      {trade.wonBet >= 0 ? (
                        <>
                          Growth
                        </>
                      ) : (
                        <>
                          Loss
                        </>
                      )}
                    </div>
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
