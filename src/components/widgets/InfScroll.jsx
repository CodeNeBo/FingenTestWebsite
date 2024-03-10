import React, { useEffect, useState } from 'react';
import Card from './Card'; // Import the Card component
import useInterval from '@use-it/interval'; // A hook for interval updates

const MainComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your JSON file or API endpoint
    const fetchData = async () => {
      try {
        const response = await fetch('./data/landingdata.json'); // Replace 'your_data.json' with your JSON file path
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Run only once on component mount

  // Function to create infinite scrolling loop
  useInterval(() => {
    setData(prevData => [...prevData, ...prevData]);
  }, 5000); // Adjust the interval as needed

  return (
    <div className="container overflow-x-scroll whitespace-no-wrap w-full h-300">
      <div className="cards-container">
        {data.map((item, index) => (
          <Card key={index} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  );
};

export default MainComponent;
