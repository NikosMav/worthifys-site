import React, { useEffect, useState } from "react";
import Header from "../Header.js";
import Footer from "../Footer.js";
import PieChartComponent23 from "../charts/PieChartComponent23.js";
import PieChartComponent22 from "../charts/PieChartComponent22.js";
import AccuracyLineChart from "../charts/AccuracyLineChart.js";
import ErrorLineChart from "../charts/ErrorLineChart.js";
import Heatmap from "../charts/HeatMap.js";
import FeatureImportanceBarChart5 from "../charts/FeatureImportanceBarChart5.js";
import FeatureImportanceBarChart10 from "../charts/FeatureImportanceBarChart10.js";

const WorthifyChartPage = () => {
  // webflow.js
  useEffect(() => {
    window.Webflow && window.Webflow.destroy();
    window.Webflow && window.Webflow.ready();
    window.Webflow && window.Webflow.require("ix2").init();
    document.dispatchEvent(new Event("readystatechange"));
  }, []);

  // html node
  const html = document.getElementsByTagName("html")[0];
  html.setAttribute("data-wf-page", "65a4292a06a5231e6e3e7664");
  html.setAttribute("data-wf-site", "65a4292906a5231e6e3e760e");

  const [year, setYear] = useState(2023); // Default to 2023
  // Toggle between 2023 and 2022
  const toggleYear = () => {
    setYear(year === 2023 ? 2022 : 2023);
  };

  const [showTop5, setShowTop5] = useState(true); // State to toggle between top 5 and top 10
  const toggleChart = () => {
    setShowTop5(!showTop5); // Toggle between true and false
  };

  return (
    <div className="sales-body">
      <div className="page-wrapper">
        <Header />
        <main>
          <section className="section bottom-60px">
            <div className="container-default chart-page w-container">
              <div
                data-w-id="3b77e255-c948-c6bd-5f66-e009eb0d6ff0"
                style={{ opacity: 0 }}
                className="chart-hero"
              >
                <div className="about-hero-content chart">
                  <h1 className="display-1 about-hero-2">
                    <strong>Our charts are more than</strong> <br />
                    <span className="text-color-accent">
                      <strong>just visual representations</strong>
                    </span>
                  </h1>
                </div>
              </div>
              <div
                data-w-id="a105a7a1-a7a4-3b9a-7e11-63bb00005c9b"
                style={{ opacity: 0 }}
                className="w-layout-grid grid-2-col sales-sections"
              >
                <div id="w-node-cf8dcce5-8fd6-61bb-45fb-4e33267d7a84-6e3e7664">
                  <h2 className="chart-title">Car Sales Distribution</h2>
                  <p className="mg-bottom-40px">
                    This chart shows the distribution of car sales across
                    various brands in {year}, providing insights into consumer
                    preferences and market trends.
                  </p>
                  <div className="button-primary-gradient _2-buttons">
                    <button
                      onClick={toggleYear}
                      className="button-primary w-button"
                    >
                      Switch to {year === 2023 ? 2022 : 2023}
                    </button>
                  </div>
                </div>
                <div className="chart-div">
                  {year === 2023 ? (
                    <PieChartComponent23 />
                  ) : (
                    <PieChartComponent22 />
                  )}
                </div>
              </div>
              <div
                data-w-id="fac2aa87-e868-6e59-d10f-2375feecea42"
                style={{ opacity: 0 }}
                className="w-layout-grid grid-2-col sales-sections left-image"
              >
                <div>
                  <AccuracyLineChart />
                </div>
                <div id="w-node-fac2aa87-e868-6e59-d10f-2375feecea43-6e3e7664">
                  <h2 className="chart-title">
                    Model Accuracy Improvement Over Time
                  </h2>
                  <p className="mg-bottom-40px">
                    This visualization captures the essence of progress,
                    showcasing the consistent upward trajectory of our model's
                    accuracy over successive iterations. This chart represents
                    the hard-earned results of rigorous training and refinement.
                    As we navigate through iterations, we witness the
                    transformative power of machine learning - turning raw data
                    into reliable insights and robust predictions.
                  </p>
                </div>
              </div>
              <div
                data-w-id="dc1ec8d6-369e-c849-0ec9-25afa4e2ad8e"
                style={{ opacity: 0 }}
                className="w-layout-grid grid-2-col sales-sections"
              >
                <div id="w-node-dc1ec8d6-369e-c849-0ec9-25afa4e2ad8f-6e3e7664">
                  <h2 className="chart-title">
                    Model Error Reduction Over Iterations
                  </h2>
                  <p className="mg-bottom-40px">
                    As we chart the journey of our model's refinement, this
                    graph illustrates the pivotal declines in error percentage.
                    This steady decrease in error rates is a product of our
                    adaptive learning techniques and our pursuit of perfection.
                    With each iteration, we are edging closer to the pinnacle of
                    precision, ensuring that every prediction is a stride
                    towards certainty.
                  </p>
                </div>
                <div>
                  <ErrorLineChart />
                </div>
              </div>
              <div
                data-w-id="9198ae79-d0c8-4a16-b07d-1a20d7372449"
                style={{ opacity: 0 }}
                className="w-layout-grid grid-2-col sales-sections left-image"
              >
                <div className="map-wrapper">
                  <Heatmap />
                </div>
                <div id="w-node-_9198ae79-d0c8-4a16-b07d-1a20d737244b-6e3e7664">
                  <h2 className="chart-title">
                    Automotive Density and Distribution in the Region
                  </h2>
                  <p className="mg-bottom-40px">
                    This heatmap illustrates the distribution of cars within the
                    region, with brighter colors marking higher concentrations.
                    It serves as a snapshot of vehicle density, aiding in
                    traffic management and urban planning initiatives to
                    accommodate the area's transportation demands.
                  </p>
                </div>
              </div>
              <div
                data-w-id="050b0796-2111-ae39-25de-e5cebf594e9f"
                style={{ opacity: 0 }}
                className="w-layout-grid grid-2-col sales-sections"
              >
                <div id="w-node-_050b0796-2111-ae39-25de-e5cebf594ea0-6e3e7664">
                  <h2 className="chart-title">Model Feature Importance</h2>
                  <p className="mg-bottom-40px">
                    Explore the most influential features driving our AI model's
                    predictions. Toggle to view the top 5 or top 10 features
                    based on their importance scores, shedding light on what
                    factors most significantly impact the model's accuracy.
                  </p>
                  <div className="button-primary-gradient _2-buttons">
                    <button
                      onClick={toggleChart}
                      className="button-primary w-button"
                    >
                      Show {showTop5 ? "Top 10" : "Top 5"} Features
                    </button>
                  </div>
                </div>
                {showTop5 ? (
                  <FeatureImportanceBarChart5 />
                ) : (
                  <FeatureImportanceBarChart10 />
                )}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default WorthifyChartPage;
