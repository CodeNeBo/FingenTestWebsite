import React, { useEffect, useState } from 'react';

const formatNum = (number) => {
  return number.toLocaleString('en-US');
};

function CurrencyList() {
  const [currencyPairs, setCurrencyPairs] = useState([]);

  useEffect(() => {
    fetch('./data/landingdata.json')
      .then((response) => response.json())
      .then((data) => {
        setCurrencyPairs(data.pipsdata.currencyPairs);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const sortedCurrencyPairs = currencyPairs.slice().sort((a, b) => b.pipsnumber - a.pipsnumber);
  const topFivePairs = sortedCurrencyPairs.slice(0, 5);

  const largestPipsNumber = topFivePairs.length > 0 ? topFivePairs[0].pipsnumber : 0;

  return (
    <div className="py-10 px-6 mx-auto max-w-6xl lg:px-8 lg:py-16">
      <div className='max-w-xl mx-auto'>
        {topFivePairs.map((pair, index) => (
          <div key={index} className="flex items-center mb-4 w-full">
            <div className="w-5/6 relative mr-4">
              <div
                className="bg-gradient-to-r from-gradient to-accent h-12 rounded-full flex items-center"
                style={{ width: `${(pair.pipsnumber / largestPipsNumber) * 100}%` }}
              >
                <p className='ml-4 w-full font-bold text-lg truncate'>{pair.pipsname}</p>
              </div>
            </div>
            <p className="">{formatNum(pair.pipsnumber)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CurrencyList;
