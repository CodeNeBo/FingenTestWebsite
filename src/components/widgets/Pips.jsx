import React, { useEffect, useState } from 'react';

const formatNum = (number, isPercentage = false) => {
  if (isPercentage) {
    return `${(number * 100).toFixed(0)}%`;
  }
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
        {topFivePairs.map((pair, index) => {
          const percentage = (pair.pipsnumber / largestPipsNumber) * 100;
          const isHigherThan50Percent = pair.probabilityOfWin > 0.5;

          let gradientStyle;

          if (isHigherThan50Percent) {
            gradientStyle = {
              background: `linear-gradient(to right, #3644DF, #7721D6)`,
              width: `${percentage}%`,
            };
          } else {
            gradientStyle = {
              background: `linear-gradient(to right, #7721D6, #EA3382)`,
              width: `${percentage}%`,
            };
          }

          return (
            <div key={index} className="flex items-center mb-4 w-full">
              <div className="w-full gap-3 relative mr-4 inline-flex">
                <div
                  className="h-12 rounded-full flex items-center"
                  style={gradientStyle}
                >
                  <p className='ml-4 w-full font-bold text-lg truncate'>{pair.pipsname}</p>
                </div>
                <div className='flex flex-col my-auto'>
                  <p className="">{formatNum(pair.pipsnumber)}</p>
                  <p className='text-muted text-xs'>{formatNum(pair.probabilityOfWin, true)}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CurrencyList;
