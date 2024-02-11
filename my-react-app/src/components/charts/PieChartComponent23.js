import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import salesData from "./data/pie_bubble23.json";

// Import Chart from chart.js for the purpose of registration
import { Chart } from "chart.js";
Chart.register(ChartDataLabels);

const PieChartComponent23 = () => {
  const labels = Object.keys(salesData);
  const dataPoints = Object.values(salesData).map(Number); // Ensure data points are numbers

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Number of Cars Bought in 2023",
        data: dataPoints,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        enabled: true, // Enable tooltips
      },
      datalabels: {
        display: true,
        color: "#ffffff",
        formatter: (value, context) => {
          // Display the label of the slice
          return context.chart.data.labels[context.dataIndex];
        },
        font: {
          weight: "bold",
          size: 10,
        },
        anchor: "end",
        align: "start",
        offset: 10,
      },
      legend: {
        labels: {
          color: "#FFFFFF", // White text for legend labels
        },
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default PieChartComponent23;
