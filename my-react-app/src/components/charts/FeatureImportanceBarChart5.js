import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";
import featureData from "./data/feat_importance.json"; // Adjust the path as necessary

const FeatureImportanceBarChart5 = () => {
  const sortedFeatures = Object.entries(featureData)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5); // Only keep the top 5

  // Extract the labels (feature names) and data (importance scores) from the sorted array
  const labels = sortedFeatures.map((feature) => feature[0]);
  const dataPoints = sortedFeatures.map((feature) => feature[1]);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Feature Importance",
        data: dataPoints,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: "y", // Horizontal bar chart
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // Light white grid lines
        },
        ticks: {
          color: "#FFFFFF", // White text for ticks
        },
        title: {
          display: true,
          text: "Importance Score",
          color: "#FFFFFF", // White text for axis title
        },
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.1)", // Light white grid lines
        },
        ticks: {
          color: "#FFFFFF", // White text for ticks
        },
        title: {
          display: true,
          text: "Features",
          color: "#FFFFFF", // White text for axis title
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#FFFFFF", // White text for legend labels
        },
        display: false, // Adjust based on whether you want to display the legend
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div style={{ height: "500px", width: "100%" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default FeatureImportanceBarChart5;
