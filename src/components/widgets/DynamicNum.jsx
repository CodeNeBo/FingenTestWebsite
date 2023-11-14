import React, { useEffect, useState } from 'react';

const DynamicNumber = () => {
  const [number, setNumber] = useState('');

  useEffect(() => {
    fetch('./data/landingdata.json')
      .then((response) => response.json())
      .then((data) => {
        setNumber(data.dynamicnum.dynamicnum);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  
  return (
    <h1 className="text-4xl md:text-4xl">{number}</h1>
  );
};

export default DynamicNumber;
