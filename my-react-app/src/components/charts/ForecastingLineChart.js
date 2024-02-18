import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import forecastDataset from "./data/forecasting_data.json"; // Your data import

const options = {
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: "rgba(255, 255, 255, 0.1)", // Adjust as needed
      },
      ticks: {
        color: "white", // Adjust as needed
      },
    },
    x: {
      type: "time",
      time: {
        parser: "yyyy-MM-dd", // Corrected the year format here
        tooltipFormat: "ll",
      },
      title: {
        display: true,
        text: "Time",
        color: "white", // Adjust as needed
      },
      ticks: {
        color: "white", // Adjust as needed
      },
      grid: {
        color: "rgba(255, 255, 255, 0.1)", // Adjust as needed
      },
    },
  },
  elements: {
    point: {
      radius: 0, // Removes the point markers
    },
    line: {
      borderWidth: 3, // Make the line thicker for better visibility
    },
  },
  plugins: {
    legend: {
      labels: {
        color: "white", // Adjust as needed
      },
    },
    tooltip: {
      enabled: false, // Disables tooltips
    },
    datalabels: {
      display: false, // Disables data labels if using the datalabels plugin
    },
  },
};

const ForecastingLineChart = () => {
  const data = {
    labels: forecastDataset.historicalData
      .map((item) => item.date)
      .concat(forecastDataset.forecastData.map((item) => item.date)),
    datasets: [
      {
        label: "Historical Data",
        data: forecastDataset.historicalData.map((item) => item.value),
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.5)",
      },
      {
        label: "Forecast Data",
        data: [
          ...Array(forecastDataset.historicalData.length).fill(null),
          ...forecastDataset.forecastData.map((item) => item.value),
        ],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderDash: [5, 5],
      },
    ],
  };

  return <Line data={data} options={options} />;
};

export default ForecastingLineChart;
