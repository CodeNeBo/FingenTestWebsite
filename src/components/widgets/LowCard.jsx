import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TestChart from './TestChart.jsx'

const MyCarousel = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('./data/landingdata.json')
      .then((response) => response.json())
      .then((data) => {
        setData(data.edgedata);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 2 },
  };

  const getColorPair = (percentage) => {
    if (percentage >= 0) {
      return {
        bgPrimary: 'bg-bluegradient',
        bgAccent1: 'bg-[#7193E9]',
        bgAccent2: 'bg-[#B75CEF]',
        bgAccent3: 'bg-[#828CFF]',
        bgAccent4: 'bg-[#30378B]',
        shadow: 'shadow-blue'
      };
    } else {
      return {
        bgPrimary: 'bg-gradient',
        bgAccent1: 'bg-[#F39CC2]',
        bgAccent2: 'bg-[#EB8585]',
        bgAccent3: 'bg-[#F379AE]',
        bgAccent4: 'bg-[#85204C]',
        shadow: 'shadow-pink'
      };
    }
  };

  const sortedData = data.sort((a, b) => b.edgenumber - a.edgenumber);
  const low10Data = sortedData.slice(0, 10);

  return (
    <Carousel responsive={responsive} slidesToSlide={2} swipeable>
      {low10Data.map((item, index) => {
        const count = 10 - index;
        const percentage = (((item.edgenumber - item.history1) / item.history1) * 100).toFixed(0);
        const colorPair = getColorPair(percentage);
        const historyValues = [
          { name: 'History 5', value: item.history5 },
          { name: 'History 4', value: item.history4 },
          { name: 'History 3', value: item.history3 },
          { name: 'History 2', value: item.history2 },
          { name: 'History 1', value: item.history1 },
          { name: 'History', value: item.edgenumber }
        ];

        return (
          <div
            key={item.edgenumber}
            className={`rounded-2xl aspect-square p-6 flex flex-col justify-between relative overflow-hidden max-h-56 ${colorPair.bgPrimary} ${colorPair.shadow}`}
          >
            <div className="inline-flex gap-3 items-center">
              <h2 className="font-semibold text-4xl text-textcolor z-20">{item.edgenumber}</h2>
              <p
                className={`text-textcolor text-sm font-normal px-2 py-1 rounded-full border border-textcolor z-20 ${
                  percentage >= 0 }`}
              >
                {percentage}%
              </p>
            </div>
            <div className={`w-full text-xl font-semibold z-20 inline-flex justify-between items-end`}>
              <p className='text-left w-fit text-3xl'>{count}.</p>
              <p className='text-right w-fit'>{item.edgename}</p>
            </div>
            <div className={`absolute ${colorPair.bgAccent1} rounded-full blur-2xl w-28 h-28 left-6 top-12`}></div>
            <div className={`absolute ${colorPair.bgAccent2} rounded-full blur-2xl w-48 h-20 -right-6 bottom-10 rotate-12`}></div>
            <div className={`absolute ${colorPair.bgAccent3} opacity-60 rounded-full blur-xl w-40 h-10 left-2 top-0`}></div>
            <div className={`absolute ${colorPair.bgAccent3} opacity-60 rounded-full blur-xl w-10 h-40 left-0 top-2`}></div>
            <div className={`absolute ${colorPair.bgAccent4} opacity-60 rounded-full blur-xl w-40 h-10 -right-0 -bottom-4`}></div>
            <div className={`absolute ${colorPair.bgAccent4} opacity-60 rounded-full blur-xl w-10 h-40 -right-4 -bottom-5`}></div>
            <div className='opacity-50 absolute top-1/2 right-0 transform -translate-y-1/5 w-full h-24 flex justify-end'>
            <TestChart historyData={historyValues} />
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default MyCarousel;
