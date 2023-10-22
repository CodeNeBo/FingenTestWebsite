import React, { useEffect, useState } from 'react';

const formatNum = (number) => {
  return number.toLocaleString('en-US');
};

function CurrencyList() {
  const [currencyPairs, setCurrencyPairs] = useState([]);

  useEffect(() => {
    // Fetch JSON data
    fetch('./src/data/pipsdata/pipsdata.json')
      .then((response) => response.json())
      .then((data) => {
        setCurrencyPairs(data.currencyPairs);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Sort the currency pairs by number (highest to lowest)
  const sortedCurrencyPairs = currencyPairs.sort((a, b) => b.number - a.number);

  return (
    <div className="mx-auto max-w-lg">
      {sortedCurrencyPairs.map((pair, index) => (
        <div key={index} className="mb-2 flex items-center">
          <div className="ml-3">
            <p className="font-bold">{pair.name}</p>
            <p className="text-gray-500">
              {formatNum(pair.number)}{' '}
              {index !== 0 ? `(${formatNum(pair.number - sortedCurrencyPairs[0].number)})` : ''}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CurrencyList;