import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import forecastDataset from "./data/forecasting_data.json"; // Your data import

const ForecastingLineChart = () => {
  const { historicalData, forecastData, forecastLabels } = forecastDataset;

  const data = {
    labels: [...historicalData.map((data) => data.date), ...forecastLabels],
    datasets: [
      {
        label: "Observed",
        data: [
          ...historicalData.map((data) => data.value),
          ...Array(forecastLabels.length).fill(null),
        ],
        borderColor: "blue",
        backgroundColor: "transparent",
        borderWidth: 3,
      },
      {
        label: "Forecast Mean",
        data: [
          ...Array(historicalData.length).fill(null),
          ...forecastData.mean,
        ],
        borderColor: "red",
        backgroundColor: "transparent",
        borderWidth: 3,
      },
      // ... Include other datasets for P90 and P10 if needed
    ],
  };

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
        radius: 0, // removes the point markers
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
    },
  };

  return <Line data={data} options={options} />;
};

export default ForecastingLineChart;
