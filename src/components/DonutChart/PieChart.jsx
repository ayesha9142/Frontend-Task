import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const dataSet1 = {
  labels: ['Failed', 'Warning', 'Not Available', 'Passed',],
  datasets: [
    {
      label: '# of Votes',
      data: [1689, 681, 36, 7253],
      backgroundColor: [
        '#BB140C',
        '#FED72A',
        '#CACEDB',
        '#1AA559'
      ],
      borderWidth: 1,
    },
  ],
};

const dataSet2 = {
  labels: ["Connected (2)", "Not Connected (2)"],
  datasets: [
    {
      label: "# of Votes",
      data: [2, 2],
      backgroundColor: ["#5679F9", "#DFEBFF"],
      borderWidth: 1,
    },
  ],
};


const DonutChart = ({ donut2 }) => {
  const data = donut2 ? dataSet1 : dataSet2
  const options = {
    plugins: {
      legend: {
        position: "right",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}`;
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width: "100%", height: "auto" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DonutChart;
