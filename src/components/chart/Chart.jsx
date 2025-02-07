import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './chart.scss';

const ChartComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      datasets: [
        {
          label: 'cumputer false',
          data: [50, 75, 10, 25, 50, 75, 200],
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          fill: false,
        },
        {
          label: 'cumputer true',
          data: [80, 100, 120 ,70, 10, 80, 180],
          borderColor: 'rgb(54, 162, 235)',
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          fill: false,
        },
      ],
    };

    const options = {
      animations: {
        radius: {
          duration: 400,
          easing: 'linear',
          loop: (context) => context.active
        }
      },
      hoverRadius: 12,
      hoverBackgroundColor: 'yellow',
      interaction: {
        mode: 'nearest',
        intersect: false,
        axis: 'x'
      },
      plugins: {
        tooltip: {
          enabled: false
        }
      }
    };

    const chartInstance = new Chart(ctx, {
      type: 'line',
      data,
      options,
    });

    return () => {
      chartInstance.destroy();
    };
  }, []);

  return (
    <div className='chart'>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default ChartComponent;
