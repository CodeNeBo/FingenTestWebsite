import React, { useState, useEffect } from 'react';

const EdgeCard = () => {
  const [data, setData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 5;

  useEffect(() => {
    fetch('./data/landingdata.json')
      .then((response) => response.json())
      .then((data) => {
        setData(data.edgedata);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const sortedData = data.slice().sort((a, b) => b.edgenumber - a.edgenumber);

  const formatNum = (number) => {
    return number.toLocaleString('en-US');
  };

  const handleNextCards = () => {
    const nextIndex = startIndex + cardsPerPage;
    setStartIndex(nextIndex >= sortedData.length ? startIndex : nextIndex);
  };

  const handlePrevCards = () => {
    const prevIndex = startIndex - cardsPerPage;
    setStartIndex(prevIndex < 0 ? 0 : prevIndex);
  };

  const visibleData = sortedData.slice(startIndex, startIndex + cardsPerPage);

  return (
    <div className='px-4 py-16 sm:px-6 mx-auto lg:px-8 lg:py-20 max-w-6xl relative'>

    <div className='inline-flex justify-between w-full'>
        <h2 className='mb-8 text-justify text-3xl md:text-4xl font-bold tracking-tight'>Top 10 Gainers</h2>
        <div className='inline-flex gap-4'>
          {startIndex > 0 && (
            <button className="" onClick={handlePrevCards}>
              Previous
            </button>
          )}
          {startIndex + cardsPerPage < sortedData.length && (
            <button className="" onClick={handleNextCards}>
              Next
            </button>
          )}
        </div>
      </div>

    <div className="flex justify-start gap-8 ml-4 pr-4 overflow-x-scroll no-scrollbar md:justify-center relative">
      
      
      {visibleData.map((item, index) => (
        <div key={index} className="text-center">
          <div
            className={`rounded-3xl aspect-square w-40 h-40 flex justify-center items-center relative ${
              item.edgenumber > 0
                ? 'bg-gradient-to-tr from-accent to-gradient'
                : 'bg-gradient-to-tr from-accent to-bluegradient'
            }`}
          >
            {/* <div className='bg-primary opacity-50 w-[95%] h-[95%] rounded-[20px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div> */}
            <div className='z-20'>
              <div className='flex flex-col items-center gap-0'>
                <h1 className="text-2xl font-semibold tracking-wide">{formatNum(item.edgenumber)}</h1>
                <p className='uppercase text-[10px] tracking-wider -translate-y-0.5'>edge</p>
              </div>
              <h4 className="text-sm mt-2 tracking-wider uppercase translate-y-4">{item.edgename}</h4>
            </div>
          </div>
        </div>
      ))}
      
    </div>
    </div>
  );
};

export default EdgeCard;
