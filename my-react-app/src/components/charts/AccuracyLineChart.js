import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import dataFromFile from "./data/acc_error.json"; // Adjust the import path as necessary

const AccuracyLineChart = () => {
  // Extracting the accuracies and creating labels for each point
  const iterations = dataFromFile.accuracies.map((_, index) => `${index + 1}`);
  const accuracyData = dataFromFile.accuracies;

  const data = {
    labels: iterations,
    datasets: [
      {
        label: "Accuracy (%)",
        data: accuracyData,
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
        yAxisID: "y",
      },
    ],
  };

  const options = {
    layout: {
      padding: {
        left: 20, // Add padding to the left
        right: 20, // Add padding to the right
        // You can also add top or bottom padding if needed
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        grid: {
          color: "rgba(255,255,255,0.1)", // Adjust as needed
        },
        title: {
          display: true,
          text: "Accuracy (%)",
          color: "#FFFFFF",
        },
        ticks: {
          color: "#FFFFFF",
        },
      },
      x: {
        grid: {
          color: "rgba(255,255,255,0.1)", // Adjust as needed
        },
        title: {
          display: true,
          text: "Iterations",
          color: "#FFFFFF",
        },
        ticks: {
          color: "#FFFFFF",
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#FFFFFF",
        },
      },
      datalabels: {
        align: "end",
        anchor: "end",
        offset: 10,
        color: "#FFFFFF",
        font: {
          weight: "bold",
          size: 10,
        },
        padding: {
          top: 10, // Add padding to avoid clipping at the top of the chart
        },
        formatter: (value, context) => {
          return value.toFixed(2) + "%"; // Adjust the formatter as needed
        },
      },
    },
    elements: {
      line: {
        borderWidth: 3,
      },
      point: {
        radius: 5,
        backgroundColor: "cyan",
        borderColor: "#FFFFFF",
        borderWidth: 2,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div style={{ height: "500px" }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default AccuracyLineChart;
