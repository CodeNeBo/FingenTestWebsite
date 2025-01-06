import React, { useState, useEffect } from 'react';
import Card from './Card.jsx';

const CardRow = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the JSON file from the public directory
        const response = await fetch('/landingData/data.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData.cards.cardsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full grid grid-rows-2 grid-cols-2 md:flex md:flex-row gap-4">
      {data.map((cardData, index) => (
        <Card
          key={index}
          title={cardData.title}
          currentNumber={cardData.currentNum}
          lastMonthNumber={cardData.lastMonthNumber}
          historyData={[
            { value: cardData.lastMonthNumber9 },
            { value: cardData.lastMonthNumber8 },
            { value: cardData.lastMonthNumber7 },
            { value: cardData.lastMonthNumber6 },
            { value: cardData.lastMonthNumber5 },
            { value: cardData.lastMonthNumber4 },
            { value: cardData.lastMonthNumber3 },
            { value: cardData.lastMonthNumber2 },
            { value: cardData.lastMonthNumber },
          ]}
        />
      ))}
    </div>
  );
};

export default CardRow;
