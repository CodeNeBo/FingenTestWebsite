import React, { useState, useEffect } from 'react';
import DynamicCard from './MarketCard.jsx';

function MarketCards() {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState('Top Gainers');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the JSON file from the public directory
        const response = await fetch('/landingData/data.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        processData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const processData = (data) => {
      const sortedData = data.edgedata.sort((a, b) => b.edgenumber - a.edgenumber);
      const topGainersData = sortedData.slice(0, 4);
      const topLosersData = sortedData.slice(-4).reverse();

      const transformedData = activeTab === 'Top Gainers' ? topGainersData : topLosersData;

      const mappedData = transformedData.map(item => {
        let percentageDifference;
        let difference = item.edgenumber - item.history1;

        if (item.history1 !== 0) {
          percentageDifference = ((difference) / item.history1) * 100;
        } else {
          percentageDifference = 0;
        }

        return {
          icon: item.icon,
          edgenumber: item.edgenumber,
          edgename: item.edgename,
          percent: percentageDifference.toFixed(0),
          historyData: [
            { name: '7', value: 0 },
            { name: '6', value: item.history5 },
            { name: '5', value: item.history4 },
            { name: '4', value: item.history3 },
            { name: '3', value: item.history2 },
            { name: '2', value: item.history1 },
            { name: '1', value: item.edgenumber },
          ],
          difference: difference
        };
      });

      setData(mappedData);
    };

    fetchData(); // Fetch the data when the component mounts
  }, [activeTab]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='w-full'>
      <div className="flex space-x-2 mb-4">
        <button 
          className={`px-4 py-2 text-sm rounded-full bg-primary border ${activeTab === 'Top Gainers' ? 'border-accent text-white' : 'border-primary text-muted'}`}
          onClick={() => handleTabClick('Top Gainers')}
        >
          Top Gainers
        </button>
        <button 
          className={`px-4 py-2 text-sm rounded-full bg-primary border ${activeTab === 'Top Losers' ? 'border-accent text-white' : 'border-primary text-muted'}`}
          onClick={() => handleTabClick('Top Losers')}
        >
          Top Losers
        </button>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-6">
        {data.map((item) => {
          return (
            <DynamicCard
              key={item.edgenumber}
              iconPlace={`./icons/${item.icon}.png`}
              edgenumber={item.edgenumber}
              edgename={item.edgename}
              percent={item.percent}
              historyData={item.historyData}
              difference={item.difference}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MarketCards;
