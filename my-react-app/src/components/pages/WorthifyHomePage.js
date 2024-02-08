import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import GroupedAutocomplete from "../Autocomplete";

const array = ["*", "*", "*", "*", "*", "*", "*"];

const WorthifyHomePage = () => {
  const [cars, setCars] = useState({
    Brand: [],
    Model: [],
    Cubic: [],
    Category: [],
    Fuel: [],
    Transmission: [],
    Doors: [],
  });

  useEffect(() => {
    console.log("YEAAAH BUDDY");
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://51.20.7.61:443/gottaCheckMyShite",
          {
            // URL of your Flask server
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ array: array }),
          }
        );
        const data = await response.json();
        // console.log(data)
        setCars(data);
        // console.log(cars.Cubic);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    console.log(cars);
  }, []); //change the [] if you want to loop it somehow

  const handleChange = (event, value, i) => {
    if (value === null || value === undefined) {
      value = { firstLetter: "*", title: "*" };
    }
    // console.log(value);
    array[i] = value.title;
    // console.log(array)
    const fetchData = async () => {
      try {
        const response = await fetch("http://51.20.7.61:443/process", {
          // URL of your Flask server
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ array: array }),
        });
        const data = await response.json();
        // console.log(data)
        setCars(data);
        console.log(cars);
        // console.log(cars.Cubic);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    if (i === 0) {
      handleBrandChange(event, value);
    } else {
      handleModelChange(event, value);
    }
  };

  // webflow.js
  useEffect(() => {
    window.Webflow && window.Webflow.destroy();
    window.Webflow && window.Webflow.ready();
    window.Webflow && window.Webflow.require("ix2").init();
    document.dispatchEvent(new Event("readystatechange"));
  }, []);

  // html node
  const html = document.getElementsByTagName("html")[0];
  html.setAttribute("data-wf-page", "65a4292a06a5231e6e3e76a1");
  html.setAttribute("data-wf-site", "65a4292906a5231e6e3e760e");

  // Navigation to different pages
  const navigate = useNavigate();
  const redirectToForm = () => {
    navigate("/form-page");
  };
  const redirectToChartPage = () => {
    navigate("/chart-page");
  };

  // Brands and Models
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const handleBrandChange = (event, value) => {
    event.preventDefault(); // Prevent default if it's a submit event
    setSelectedBrand(value ? value.title : ""); // Set the selected brand title or reset
    setSelectedModel(""); // Reset the selected model when brand changes
    if (selectedBrand === "") {
      setSubmitAttempted(false);
    }
  };

  const handleModelChange = (event, value) => {
    if (value && value.title) {
      setSelectedModel(value.title); // Set the model
    } else {
      setSelectedModel(""); // Reset the model state
      setSubmitAttempted(false);
    }
  };

  useEffect(() => {
    setSelectedModel(""); // Reset model when brand changes
  }, [selectedBrand]); // Dependency array with selectedBrand

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    setSubmitAttempted(true); // Indicate that a submit attempt was made
    if (!isFormValid) {
      // setSubmitAttempted(false);
      // Form is not valid, error message will be shown
      // setSubmitAttempted(false); // Indicate that submission
      return;
    }

    // Proceed with form submission logic (e.g., API call)
  };

  useEffect(() => {
    // Check if both brand and model are selected
    setIsFormValid(
      selectedBrand !== "" && selectedModel !== "" //||
      //(selectedBrand === "" && selectedModel === "")
    );
  }, [selectedBrand, selectedModel]);

  return (
    <div className="bg-neutral-800">
      <div style={{ opacity: 0 }} className="page-wrapper">
        <Header />
        <main>
          <section className="section home-hero">
            <div className="container-medium-940px home-hero small">
              <div className="info">
                <h1 className="display-1 small">
                  <strong>
                    Elevating Automotive Worth with Precision and
                    Responsibility.
                  </strong>
                </h1>
                <h1 className="display-1-copy small">
                  <strong className="text-color-accent">
                    Welcome to Worthify!
                  </strong>
                </h1>
                <p
                  data-w-id="58ed6e0c-7961-e5e6-bc1d-6ae6c94a1d91"
                  style={{
                    WebkitTransform:
                      "translate3d(0, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    msTransform:
                      "translate3d(0, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    opacity: 0,
                  }}
                  className="paragraph-large home-hero small"
                >
                  Fill out our simple form with your car's specifications and
                  let Worthify reveal its true market worth.
                </p>
              </div>
              <div
                data-w-id="afb9b871-31e8-c258-d227-e3d4471c65e1"
                style={{ opacity: 0 }}
                className="split-content contact-form"
              >
                <div className="card front-form">
                  <div className="contact-form-block w-form">
                    <form
                      id="wf-form-contact-form"
                      name="wf-form-Contact-Form"
                      data-name="Contact Form"
                      method="get"
                      className="card-contact-form small"
                      data-wf-page-id="65a4292a06a5231e6e3e76a1"
                      data-wf-element-id="afb9b871-31e8-c258-d227-e3d4471c65e4"
                      onSubmit={handleFormSubmit} // Add the onSubmit event here
                    >
                      <div
                        id="w-node-afb9b871-31e8-c258-d227-e3d4471c65f1-6e3e76a1"
                        className="input-wrapper"
                      >
                        <label
                          htmlFor="brand-autocomplete"
                          className="field-label"
                        >
                          Brand
                        </label>
                        <GroupedAutocomplete
                          optionsData={cars.Brand}
                          label="Select Brand"
                          value={selectedBrand}
                          onChange={(event, value) =>
                            handleChange(event, value, 0)
                          } // Add onChange handler
                        />
                      </div>
                      <div
                        id="w-node-_71352fe0-859c-9f60-a10d-12645b34fb89-6e3e76a1"
                        className="input-wrapper"
                      >
                        <label
                          htmlFor="model-autocomplete"
                          className="field-label"
                        >
                          Model
                        </label>
                        <GroupedAutocomplete
                          key={selectedBrand}
                          optionsData={cars.Model}
                          label="Select Model"
                          value={selectedModel}
                          onChange={(event, value) =>
                            handleChange(event, value, 1)
                          } // Add onChange handler
                        />
                      </div>
                      <div
                        id="w-node-afb9b871-31e8-c258-d227-e3d4471c65f9-6e3e76a1"
                        className="button-primary-gradient contact-form"
                      >
                        <button className="button-primary small w-button">
                          Evaluate your Car
                        </button>
                      </div>
                      {!isFormValid && submitAttempted && (
                        <div className="error-message">
                          Please select both brand and model.
                        </div>
                      )}
                    </form>
                  </div>
                </div>
                <div className="card-contact-form-gradient-blur" />
              </div>
            </div>
            <div className="container-medium-800px faqs front">
              <div
                data-w-id="9b8946bb-913e-7adf-a432-673d5fac326f"
                style={{
                  WebkitTransform:
                    "translate3d(0, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  MozTransform:
                    "translate3d(0, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  msTransform:
                    "translate3d(0, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  transform:
                    "translate3d(0, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  opacity: 0,
                }}
                className="faqs-title-wrapper"
              >
                <h2 className="title faqs">Analytics and Charts</h2>
                <p>
                  View our perfect analytics and charts to shut your mouths.
                </p>
              </div>
            </div>
            <div className="container-default home-hero w-container">
              <div
                data-w-id="58ed6e0c-7961-e5e6-bc1d-6ae6c94a1d9c"
                onClick={redirectToChartPage}
                style={{
                  WebkitTransform:
                    "translate3d(0, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  MozTransform:
                    "translate3d(0, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  msTransform:
                    "translate3d(0, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  transform:
                    "translate3d(0, 40px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  opacity: 0,
                }}
                className="home-hero-images-wrapper"
              >
                <img
                  src="/images/image-1-home-hero-dark-template.svg"
                  loading="eager"
                  alt="placeholder image"
                  className="image home-hero-1"
                />
                <img
                  src="/images/image-2-home-hero-dark-template.svg"
                  loading="eager"
                  alt="placeholder image"
                  className="image home-hero-2"
                />
                <img
                  src="/images/image-3-home-hero-dark-template.svg"
                  loading="eager"
                  alt="placeholder image"
                  className="image home-hero-3"
                />
              </div>
              <div className="bg-gradient-blur-wrapper home-hero-1">
                <div className="bg-gradient-blur-circle-3" />
                <div className="bg-gradient-blur-circle-2" />
                <div className="bg-gradient-blur-circle-1" />
              </div>
              <div className="bg-gradient-blur-wrapper home-hero-2">
                <div className="bg-gradient-blur-circle-3" />
                <div className="bg-gradient-blur-circle-2 blue" />
                <div className="bg-gradient-blur-circle-1 purple" />
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default WorthifyHomePage;
