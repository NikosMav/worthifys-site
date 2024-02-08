import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import dataFromFile from "./data/acc_error.json"; // Adjust the import path as necessary

const ErrorLineChart = () => {
  // Extracting the errors and creating labels for each point
  const iterations = dataFromFile.errors.map((_, index) => `${index + 1}`);
  const errorData = dataFromFile.errors;

  const data = {
    labels: iterations,
    datasets: [
      {
        label: "Error",
        data: errorData,
        fill: false,
        borderColor: "rgb(255, 99, 132)", // Red line for error
        tension: 0.1,
        yAxisID: "y",
      },
    ],
  };

  const options = {
    layout: {
      padding: {
        left: 20,
        right: 20,
      },
    },
    scales: {
      y: {
        beginAtZero: false,
        title: {
          display: true,
          text: "Error",
          color: "#FFFFFF",
        },
        ticks: {
          color: "#FFFFFF",
        },
        grid: {
          color: "rgba(255,255,255,0.1)",
        },
      },
      x: {
        title: {
          display: true,
          text: "Iterations",
          color: "#FFFFFF",
        },
        ticks: {
          color: "#FFFFFF",
        },
        grid: {
          color: "rgba(255,255,255,0.1)",
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
        },
        padding: {
          top: 10,
        },
        formatter: (value, context) => {
          return value.toFixed(2);
        },
      },
    },
    elements: {
      line: {
        borderWidth: 3,
      },
      point: {
        radius: 5,
        backgroundColor: "rgb(255, 99, 132)", // Red point for error
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

export default ErrorLineChart;
