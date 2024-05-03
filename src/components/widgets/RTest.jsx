import React from "react"
import { useState, useEffect } from "react";

const TestData = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch('./data/landingdata.json')
        .then((response) => response.json())
        .then((jsonData) => {
          setData(jsonData.edge.edgedata);
        })
        .catch((error) => console.error('Error fetching data:', error));
    }, []);
  
    return (
        <div>
        {data.map((item) => (
          <img
            key={item.edgenumber} // Add a unique key for each item
            src={`./icons/${item.icon}.svg`}
            alt={item.edgename}
            onError={(error) => {
              // Handle image loading errors (e.g., display a fallback image)
              console.error('Error loading image:', item.icon);
              error.target.src = './fallback-image.svg'; // Replace with your fallback image path
            }}
          />
        ))}
      </div>
    );
  };
  
  export default TestData;