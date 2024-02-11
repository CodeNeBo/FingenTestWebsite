import React, { useState, useEffect } from 'react';
import Card from './Card.jsx'; 

const CardRow = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('./data/landingdata.json')
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData.cards.cardsData);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="w-full grid grid-cols-2 md:flex md:flex-row gap-4">
      {data.map((cardData, index) => (
        <Card
          key={index}
          title={cardData.title}
          currentNumber={cardData.currentNum}
          lastMonthNumber={cardData.lastMonthNumber}
        />
      ))}
    </div>
  );
};

export default CardRow;
