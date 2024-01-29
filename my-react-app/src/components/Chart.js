import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line, Pie } from "react-chartjs-2";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ type, data, options }) => {
  // Select the right chart type
  const ChartComponent = type === "line" ? Line : type === "bar" ? Bar : Pie;

  return <ChartComponent data={data} options={options} />;
};

export default Chart;
