import React from 'react';
import Card from './Card.jsx'; 

const CardRow = () => {
    const cardData = [
      {
        title: 'Win %',
        currentNumber: 1000,
        lastMonthNumber: 800,
      },
      {
        title: 'Loss %',
        currentNumber: 5000,
        lastMonthNumber: 4500,
      },
      {
        title: 'Edge',
        currentNumber: 1000,
        lastMonthNumber: 800,
      },
      {
        title: 'Open Trades',
        currentNumber: 5000,
        lastMonthNumber: 4500,
      }
      
    ];
  
    return (
      <div className="px-6 mx-auto max-w-6xl lg:px-8 py-20 flex flex-row gap-4">
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