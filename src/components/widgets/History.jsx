import React from 'react';

const RecentSales = () => {
  const salesData = [
    {
      product: 'Product A',
      date: '2024-02-01',
      amount: 150.99,
    },
    {
      product: 'Product B',
      date: '2024-01-28',
      amount: 89.95,
    },
    {
      product: 'Product C',
      date: '2024-01-25',
      amount: 120.50,
    },
    {
      product: 'Product D',
      date: '2024-02-01',
      amount: 150.99,
    },
    {
      product: 'Product E',
      date: '2024-01-28',
      amount: 89.95,
    },
    {
      product: 'Product F',
      date: '2024-01-25',
      amount: 120.50,
    }
  ];

  return (
    <div className='bg-white rounded-lg text-textdark p-6 border border-textdark shadow-xl flex-grow'>
      <h2 className="text-sm tracking-wide pb-4">Recent Trades Gain/Loss</h2>
      <div className='h-64 overflow-y-scroll'>
        <ul className="divide-y divide-gray-300">
            {salesData.map((sale, index) => (
            <li key={index} className="py-4 flex items-center justify-between">
                <div>
                <p className="text-sm font-semibold text-textdark">{sale.product}</p>
                <p className="text-textdark text-xs">{sale.date}</p>
                </div>
                <p className="text-textdark">${sale.amount}</p>
            </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default RecentSales;
