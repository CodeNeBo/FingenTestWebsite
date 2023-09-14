import React, { useEffect, useRef, useState } from 'react';

const LineChart = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [canvasWidth, setCanvasWidth] = useState(400);
  const [canvasHeight, setCanvasHeight] = useState(200);

  useEffect(() => {
    const data1 = [10, 20, 15, 30, 25, 40];
    const data2 = [40, 22, 17, 50, 5, 20];

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const createGradient = (colorLeft, colorRight) => {
      const gradient = ctx.createLinearGradient(0, 0, canvasWidth, 0);
      gradient.addColorStop(0, colorLeft);
      gradient.addColorStop(1, colorRight);
      return gradient;
    };

    const drawSmoothLine = (data, gradient) => {
      ctx.beginPath();
      ctx.lineWidth = 3;
      ctx.strokeStyle = gradient;
    
      for (let i = 0; i < data.length; i++) {
        const x = (i / (data.length - 1)) * canvasWidth;
        const y = (1 - data[i] / 50) * canvasHeight;
    
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          const x0 = ((i - 1) / (data.length - 1)) * canvasWidth;
          const y0 = (1 - data[i - 1] / 50) * canvasHeight;
          const xc = (x0 + x) / 2;
          const yc = (y0 + y) / 2;
    
          ctx.quadraticCurveTo(x0, y0, xc, yc);
        }
      }
    
      ctx.lineTo(canvasWidth, (1 - data[data.length - 1] / 50) * canvasHeight);
    
      ctx.stroke();
      ctx.closePath();
    };
    

    const gradient1 = createGradient('rgba(218, 72, 81, 1)', 'rgba(247, 211, 88, 1)');
    const gradient2 = createGradient('rgba(54, 68, 223, 1)', 'rgba(119, 33, 214, 1)');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSmoothLine(data1, gradient1);
    drawSmoothLine(data2, gradient2);

    const resizeCanvas = () => {
      const containerWidth = containerRef.current.clientWidth;
      setCanvasWidth(containerWidth);
      setCanvasHeight((containerWidth / 2) * 0.5);
      ctx.canvas.width = containerWidth;
      ctx.canvas.height = (containerWidth / 2) * 0.5;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawSmoothLine(data1, gradient1);
      drawSmoothLine(data2, gradient2);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [canvasWidth, canvasHeight]);

  return (
    <div className='bg-[#1E1E2F] rounded-xl mx-4 mb-8 p-4'>
      <div className='flex flex-row justify-between items-center mb-4'>
        <div className='flex flex-col'>
          <p className='tracking-wide font-bold'>Trend</p>
          <p className='text-xs opacity-60 tracking-wide'>Compared to 12% last year</p>
        </div>
        <h4 className='text-lg tracking-wide font-bold'>
          92,080
        </h4>
      </div>
      
      <div ref={containerRef}>
      <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight}></canvas>
      </div>
    </div>
    
  );
};

export default LineChart;
