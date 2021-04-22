import React from 'react';
import { Bar } from 'react-chartjs-2';

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const color = {
  green: 'rgba(175, 228, 124, 0.3)',
  greenBorder: 'rgba(175, 228, 124, 1)',
  blue: 'rgba(54, 162, 235, 0.3)',
  blueBorder: 'rgba(54, 162, 235, 1)',
};

const Chart = ({ details }) => {
  const backgroundColor = new Array(7).fill(color.green);
  backgroundColor.push(color.blue);

  const borderColor = new Array(7).fill(color.greenBorder);
  borderColor.push(color.blueBorder);

  const data2 = {
    labels: details.label,
    datasets: [
      {
        label: details.title,
        data: details.data,
        backgroundColor,
        borderColor,
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <Bar data={data2} options={options} />
    </div>
  );
};

export default Chart;
