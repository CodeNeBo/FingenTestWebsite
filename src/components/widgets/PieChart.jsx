import React, { useEffect, useRef, useState } from 'react';

const PieCharts = () => {
  const canvasRef1 = useRef(null);
  const canvasRef2 = useRef(null);
  const containerRef = useRef(null);
  const [canvasWidth, setCanvasWidth] = useState(400);
  const [canvasHeight, setCanvasHeight] = useState(200);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const colors1 = ['#EA3382', '#322E4C'];
  const colors2 = ['#3644DF', '#322E4C'];

  useEffect(() => {
    // Fetch JSON data
    fetch('./src/data/piedata/piedata.json')
      .then((response) => response.json())
      .then((data) => {
        setData1(data.data1);
        setData2(data.data2);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const drawPieChart = (canvas, ctx, data, colors) => {
    const total = data.reduce((acc, value) => acc + value, 0);
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = Math.min(canvas.width, canvas.height) / 2;

    let startAngle = -Math.PI / 2;

    data.forEach((value, index) => {
      const sliceAngle = (2 * Math.PI * value) / total;

      ctx.fillStyle = colors[index];
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle);
      ctx.lineTo(centerX, centerY);
      ctx.fill();

      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius * 0.9, startAngle, startAngle + sliceAngle);
      ctx.lineTo(centerX, centerY);
      ctx.fill();
      ctx.globalCompositeOperation = 'source-over';

      startAngle += sliceAngle;
    });
  };

  const resizeCanvas = () => {
    const containerWidth = containerRef.current.clientWidth;
    setCanvasWidth(containerWidth / 3.5);
    setCanvasHeight(containerWidth / 3.5);
    canvasRef1.current.width = containerWidth / 3.5;
    canvasRef1.current.height = containerWidth / 3.5;
    canvasRef2.current.width = containerWidth / 3.5;
    canvasRef2.current.height = containerWidth / 3.5;
    const dataPlaceholder1 = document.querySelector('#dataPlaceholder1');
    const dataPlaceholder2 = document.querySelector('#dataPlaceholder2');
    if (dataPlaceholder1 && dataPlaceholder2) {
      dataPlaceholder1.textContent = data1[0] + '%';
      dataPlaceholder2.textContent = data2[0] + '%';
    }
    drawPieChart(canvasRef1.current, canvasRef1.current.getContext('2d'), data1, colors1);
    drawPieChart(canvasRef2.current, canvasRef2.current.getContext('2d'), data2, colors2);
  };

  useEffect(() => {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [data1, data2, colors1, colors2]);

  return (
    <section className='px-4 sm:px-6 mx-auto lg:px-8 max-w-lg md:max-w-6xl'>
      <div className='flex flex-col text-center gap-4 my-12 w-full mx-auto overflow-hidden justify-center items-center md:my-9' ref={containerRef} style={{ textAlign: 'center' }}>
        <div className='flex justify-evenly w-full px-4 md:w-fit'>
          <div className='md:flex md:flex-row md:justify-center md:items-center w-full'>
            <div className='relative'>
              <canvas ref={canvasRef1} className='mx-auto md:w-20 md:h-20'></canvas>
              <span id='dataPlaceholder1' className='text-2xl md:text-xl tracking-wide font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>0%</span>
            </div>
            <h3 className='hidden md:block text-lg tracking-wider ml-4 mr-8 md:text-left truncate'>Winning Trades</h3>
          </div>
          <div className='md:flex md:flex-row md:justify-center md:items-center md:ml-6 w-full'>
            <div className='relative'>
              <canvas ref={canvasRef2} className='mx-auto md:w-20 md:h-20'></canvas>
              <span id='dataPlaceholder2' className='text-2xl md:text-xl tracking-wide font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>0%</span>
            </div>
            <h3 className='hidden md:block text-lg tracking-wider ml-4 md:text-left'>Losing Trades</h3>
          </div>
        </div>

        <div className='flex justify-evenly w-full px-4 md:hidden'>
          <h3 className='text-xl tracking-wider text-center col-start-1 col-end-1 row-start-2 row-end-2 w-full'>Winning Trades</h3>
          <h3 className='text-xl tracking-wider text-center col-start-2 col-end-2 row-start-2 row-end-2 w-full'>Losing Trades</h3>
        </div>
      </div>
    </section>
  );
};

export default PieCharts;
