import React, { useEffect, useState } from 'react';

const formatNum = (number) => {
  return number.toLocaleString('en-US');
};

function CurrencyList() {
  const [currencyPairs, setCurrencyPairs] = useState([]);

  useEffect(() => {
    fetch('./src/data/pipsdata/pipsdata.json')
      .then((response) => response.json())
      .then((data) => {
        setCurrencyPairs(data.currencyPairs);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const sortedCurrencyPairs = currencyPairs.sort((a, b) => b.number - a.number);

  return (
    <div className="py-10 px-6 mx-auto max-w-6xl lg:px-8 lg:py-20">
      <h1 className='hidden md:block font-black text-3xl mb-8 text-center'>Race to the top</h1>
      <div className='rounded-xl border border-textdark overflow-hidden'>
        <div className="flex items-center font-bold bg-primary py-4 px-4 justify-between border-b border-textdark">
          <h4 className='w-fit'>Position</h4>
          <div className='w-40 inline-flex'>
            <h4 className='w-1/2 text-center'>PIPS</h4>
            <h4 className='w-1/2 text-center'>Interval</h4>
          </div>
          
        </div>
        {sortedCurrencyPairs.map((pair, index) => (
          <div key={index} className="flex items-center w-full py-3 px-4 odd:bg-textdark">
            <div className="flex flex-row justify-between w-full">
              <div className='inline-flex w-full items-center'>
                <p className='mr-4 w-6 h-6 font-black text-2xl -translate-y-1.5 text-right'>{index + 1}</p>
                <div className='w-1 h-full bg-accent rounded-full mr-4'></div>
                <p>{pair.name}</p>
              </div>
              <div className='inline-flex'>
                <p className='w-20 text-center'>{formatNum(pair.number)}</p>
                {index !== 0 && (
                  <p className="text-muted w-20 text-center">
                    {pair.number >= sortedCurrencyPairs[0].number
                      ? `+${formatNum(pair.number - sortedCurrencyPairs[0].number)}`
                      : `-${formatNum(sortedCurrencyPairs[0].number - pair.number)}`}
                  </p>
                )}
                {index === 0 && <p className='w-20 text-center text-muted'>-</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default CurrencyList;
