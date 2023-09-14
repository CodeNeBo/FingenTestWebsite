import React, { useEffect, useRef, useState } from 'react';

const PieCharts = () => {
  const canvasRef1 = useRef(null);
  const canvasRef2 = useRef(null);
  const containerRef = useRef(null);
  const [canvasWidth, setCanvasWidth] = useState(400);
  const [canvasHeight, setCanvasHeight] = useState(200);
  const data1 = [68, 32];
  const data2 = [27, 73];
  const colors1 = ['#EA3382' , '#322E4C'];
  const colors2 = ['#7721D6' , '#322E4C'];

  useEffect(() => {
    const canvas1 = canvasRef1.current;
    const ctx1 = canvas1.getContext('2d');

    const canvas2 = canvasRef2.current;
    const ctx2 = canvas2.getContext('2d');

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

        startAngle += sliceAngle;
      });
    };

    const resizeCanvas = () => {
      const containerWidth = containerRef.current.clientWidth;
      setCanvasWidth(containerWidth / 3.5);
      setCanvasHeight(containerWidth / 3.5);
      canvas1.width = containerWidth / 3.5;
      canvas1.height = containerWidth / 3.5;
      canvas2.width = containerWidth / 3.5;
      canvas2.height = containerWidth / 3.5;

      const dataPlaceholder1 = document.querySelector('#dataPlaceholder1');
      const dataPlaceholder2 = document.querySelector('#dataPlaceholder2');
      if (dataPlaceholder1 && dataPlaceholder2) {
        dataPlaceholder1.textContent = data1[0] + '%';
        dataPlaceholder2.textContent = data2[0] + '%';
      }

      drawPieChart(canvas1, ctx1, data1, colors1);
      drawPieChart(canvas2, ctx2, data2, colors2);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [canvasWidth, canvasHeight, data1, data2, colors1, colors2]);

  return (
    <div className='flex flex-row justify-evenly text-center mx-4 gap-4 mb-8' ref={containerRef} style={{ textAlign: 'center' }}>
      <div className='relative'>
        <canvas ref={canvasRef1} width={canvasWidth} height={canvasHeight}></canvas>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5/6 h-5/6 rounded-full bg-primary flex justify-center items-center'>
          <span id='dataPlaceholder1' className='text-2xl tracking-wide font-bold'>0%</span>
        </div>
      </div>
      
      <div className='relative'>
        <canvas ref={canvasRef2} width={canvasWidth} height={canvasHeight}></canvas>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5/6 h-5/6 rounded-full bg-primary flex justify-center items-center'>
          <span id='dataPlaceholder2' className='text-2xl tracking-wide font-bold'>0%</span>
        </div>
      </div>
    </div>
  );
};

export default PieCharts;
