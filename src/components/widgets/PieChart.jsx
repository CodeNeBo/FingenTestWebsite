import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = () => {
  const data1 = {
    labels: [],
    datasets: [
      {
        data: [68, 32],
        backgroundColor: ['#EA3382', '#322E4C'], 
        borderWidth: 0,
      },
    ],
  };

  const data2 = {
    labels: [],
    datasets: [
      {
        data: [27, 73],
        backgroundColor: ['#7721D6', '#322E4C'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    legend: {
        display: false,
    },
    responsive: true,
  };

  return (
    <div className="flex flex-row mx-4 items-center justify-evenly mb-4">
      <div className="w-1/3 relative">
        <Pie data={data1} options={options} />
        {/* <div className='w-3/5 h-3/5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black rounded-full grid place-content-center'><p className='text-lg'>27%</p></div> */}
        <h2 className="mt-2 text-lg font-bold text-center">Losing Trades</h2>
      </div>
      <div className="w-1/3 relative grid place-content-center">
        <Pie data={data2} options={options} />
        {/* <div className='w-3/5 h-3/5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black rounded-full grid place-content-center'><p className='text-lg'>27%</p></div> */}
        <h2 className="mt-2 text-lg font-bold text-center">Winning Trades</h2>
      </div>
    </div>
  );
};

export default PieChart;