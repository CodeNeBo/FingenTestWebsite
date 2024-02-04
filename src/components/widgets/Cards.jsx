import React from 'react';
import Card from './Card.jsx'; 

const CardRow = () => {
    const cardData = [
      {
        title: 'Win %',
        currentNumber: 93,
        lastMonthNumber: 87,
      },
      {
        title: 'Loss %',
        currentNumber: 7,
        lastMonthNumber: 13,
      },
      {
        title: 'Edge',
        currentNumber: 13231123,
        lastMonthNumber: 998932,
      },
      {
        title: 'Open Trades',
        currentNumber: 120932,
        lastMonthNumber: 112985,
      }
      
    ];
  
    return (
      <div className="w-full flex flex-row gap-4">
        {cardData.map((data, index) => (
          <Card
            key={index}
            title={data.title}
            currentNumber={data.currentNumber}
            lastMonthNumber={data.lastMonthNumber}
          />
        ))}
      </div>
    );
  };
  
  export default CardRow;