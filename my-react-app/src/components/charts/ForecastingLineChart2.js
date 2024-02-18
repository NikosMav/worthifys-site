import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import "chartjs-adapter-date-fns"; // Import the adapter
import chartData from "./data/forecasting_data2.json";

const data = {
  labels: chartData.labels,
  datasets: [
    // Lower Confidence Interval
    {
      label: "Lower Limit",
      data: chartData.lowerLimitData,
      fill: false,
      borderColor: "rgba(255, 99, 132, 0.2)",
      pointRadius: 0,
    },
    // Upper Confidence Interval
    {
      label: "Upper Limit",
      data: chartData.upperLimitData,
      fill: "-1", // Fill to the dataset at index 0 (Lower Limit)
      borderColor: "rgba(255, 99, 132, 0.2)",
      pointRadius: 0,
    },
    // Mean
    {
      label: "Mean Price",
      data: chartData.meanData,
      fill: false,
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 2,
      pointBackgroundColor: "rgba(75, 192, 192, 1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(75, 192, 192, 1)",
      pointRadius: 5,
      pointHoverRadius: 7,
      //   tension: 0.4,
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true, // Start scale with lowest value
      grid: {
        color: "rgba(255, 255, 255, 0.1)", // Lighten grid lines
      },
      ticks: {
        color: "#fff", // White ticks for dark background
      },
    },
    x: {
      type: "time",
      time: {
        parser: "yyyy-MM-dd",
      },
      grid: {
        color: "rgba(255, 255, 255, 0.1)", // Lighten grid lines
      },
      ticks: {
        color: "#fff", // White ticks for dark background
      },
      title: {
        display: true,
        text: "Year",
        color: "#fff", // White title for dark background
      },
    },
  },
  plugins: {
    legend: {
      display: true, // Enable the legend
      position: "top", // Position the legend at the top
      labels: {
        color: "white", // Set the color of the legend text, if required
        usePointStyle: true, // Use point style for the legend items
      },
    },
    tooltip: {
      enabled: true, // Disables tooltips
    },
    datalabels: {
      display: false, // Disables data labels if using the datalabels plugin
    },
  },
};

const ForecastingLineChart2 = () => {
  return <Line data={data} options={options} />;
};

export default ForecastingLineChart2;
