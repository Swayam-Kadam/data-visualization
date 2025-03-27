import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar} from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Holdings",
    },
  },
};

const VerticalGraph = ({ chartData = [], title}) => {
  // Ensure chartData is always an array
  const labels = chartData.map((item, index) => item.name || `Entry ${index + 1}`);
  const dataValues = chartData.map((item) => item.value || 0);

  const data = {
    labels,
    datasets: [
      {
        label:title||"Chart",
        data: dataValues,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default VerticalGraph;
