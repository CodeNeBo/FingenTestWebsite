import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = () => {
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
    cutout: '93%',
  };

  return (
    <div className="grid grid-rows-1 grid-cols-2 place-content-center mb-4 mx-4 gap-4">
      <div className="flex flex-col justify-center items-center">
        <div className="relative w-24 h-24">
            <Doughnut data={data1} options={options} />
            <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 text-2xl font-bold tracking-wide'>27%</p>
        </div>
        <h2 className="mt-2 text-lg font-bold text-center">Losing Trades</h2>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="relative w-24 h-24">
            <Doughnut data={data2} options={options}/>
            <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 text-2xl font-bold tracking-wide'>27%</p>
        </div>
        <h2 className="mt-2 text-lg font-bold text-center">Winning Trades</h2>
      </div>
    </div>
  );
};

export default DoughnutChart;