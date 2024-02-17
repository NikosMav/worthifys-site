import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import GroupedAutocomplete from "../Autocomplete";

const array = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];

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
          "http://16.170.253.186:443/gottaCheckMyShite",
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
        const response = await fetch("http://16.170.253.186:443/process", {
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
    navigate(`/form-page?brand=${selectedBrand}&model=${selectedModel}`);
  };
  const redirectToChartPage = () => {
    navigate("/chart-page");
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };
  const redirectToAboutPage = () => {
    navigate("/about-page");
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };
  const redirectToForecasting = () => {
    navigate("/forecasting-page");
    // Scroll to the top of the page
    window.scrollTo(0, 0);
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
    redirectToForm();
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
                          {/* <i className="fas fa-car-side"></i> */}
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
                          {/* <i className="fas fa-car"></i> */}
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
                <div className="title-with-icon">
                  <i className="fas fa-chart-bar icon-left"></i>
                  <h2 className="title faqs">Analytics and Charts</h2>
                </div>
                <p>
                  Dive into our meticulously crafted analytics and explore
                  charts that capture the essence of data-driven
                  decision-making.
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
            <div className="container-default w-container forecasting">
              <div className="home-perks-wrapper">
                {/* <div className="home-perks-content-top-wrapper">
                  <div className="home-perks-content-top-content">
                    <h2 className="title home-perks">
                      Real-time trading like never before
                    </h2>
                    <p className="paragraph home-perks">
                      Lorem ipsum dolor sit amet consectetur adipiscing eli non
                      amet arcu auctor orci vitae diam arcu{" "}
                      <span className="text-no-wrap">tellus proin.</span>
                    </p>
                    <div className="w-layout-grid home-perks-grid">
                      <div className="home-perk-wrapper">
                        <img
                          src="images/icon-1-home-perks-dark-template.svg"
                          loading="eager"
                          alt="1 Sec Operation - Dark X Webflow Template"
                          className="image home-perk"
                        />
                        <div className="home-perk-content">
                          <h3 className="title h4-size home-perk">
                            &lt; 1 sec operations
                          </h3>
                          <p className="paragraph home-perk">
                            Lorem ipsum dolor sit amet consectetur adipisc eli
                            non amet arcu auctor orci vita tellus.
                          </p>
                        </div>
                      </div>
                      <div className="home-perk-wrapper">
                        <img
                          src="images/icon-2-home-perks-dark-template.svg"
                          loading="eager"
                          alt="No Commissions - Dark X Webflow Template"
                          className="image home-perk"
                        />
                        <div className="home-perk-content">
                          <h3 className="title h4-size home-perk">
                            No commissions
                          </h3>
                          <p className="paragraph home-perk">
                            Lorem ipsum dolor sit amet consectetur adipisc eli
                            non amet arcu auctor orci vita tellus.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-w-id="58ed6e0c-7961-e5e6-bc1d-6ae6c94a1e15"
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
                    className="image-wrapper home-perks-content-top-image"
                  >
                    <img
                      src="images/image-2-home-perks-dark-template.jpg"
                      loading="eager"
                      sizes="(max-width: 479px) 90vw, (max-width: 767px) 93vw, (max-width: 991px) 80vw, (max-width: 1919px) 50vw, 612px"
                      srcSet="images/image-2-home-perks-dark-template-p-500.jpeg 500w, images/image-2-home-perks-dark-template-p-800.jpeg 800w, images/image-2-home-perks-dark-template-p-1080.jpeg 1080w, images/image-2-home-perks-dark-template.jpg 1224w"
                      alt="Real Time Trading - Dark X Webflow Template"
                      className="image home-perks-content-top-image"
                    />
                  </div>
                </div> */}
                <div className="home-perks-content-bottom-wrapper">
                  <div
                    data-w-id="58ed6e0c-7961-e5e6-bc1d-6ae6c94a1e18"
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
                    className="image-wrapper home-perks-content-bottom-image"
                  >
                    <img
                      src="images/image-1-home-perks-dark-template.jpg"
                      loading="eager"
                      sizes="(max-width: 479px) 90vw, (max-width: 767px) 93vw, (max-width: 991px) 80vw, (max-width: 1919px) 50vw, 612px"
                      srcSet="images/image-2-home-perks-dark-template-p-500.jpeg 500w, images/image-2-home-perks-dark-template-p-800.jpeg 800w, images/image-2-home-perks-dark-template-p-1080.jpeg 1080w, images/image-2-home-perks-dark-template.jpg 1224w"
                      className="image home-perks-content-bottom-image"
                    />
                  </div>
                  <div className="home-perks-content-bottom-content">
                    <div className="title-with-icon">
                      <i className="fas fa-chart-line icon-left"></i>
                      <h2 className="title home-perks">Price Forecasting</h2>
                    </div>
                    <p className="paragraph home-perks">
                      Curious about your car's worth down the road?
                    </p>
                    <div className="w-layout-grid home-perks-grid">
                      <div className="home-perk-wrapper">
                        <div className="home-perk-content">
                          <div className="title-with-icon">
                            <i className="fas fa-circle small-dot icon-left"></i>
                            <h3 className="title h4-size home-perk">
                              Sophisticated Analytics
                            </h3>
                          </div>
                          <p className="paragraph home-perk">
                            Our price forecasting tool employs sophisticated
                            analytics to project the future value of your
                            vehicle. With just a few clicks, gain access to a
                            personalized forecast that helps you make informed
                            decisions about your car.
                          </p>
                        </div>
                      </div>
                      <div className="home-perk-wrapper">
                        <div className="home-perk-content">
                          <div className="title-with-icon">
                            <i className="fas fa-circle small-dot icon-left"></i>
                            <h3 className="title h4-size home-perk">
                              Informed Decisions
                            </h3>
                          </div>
                          <p className="paragraph home-perk">
                            Tap into our expertise and stay ahead of market
                            trends. Start your journey towards smart car
                            ownership now.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="button-primary-gradient card-team-page-careers margin-top">
                      <a
                        onClick={redirectToForecasting}
                        className="button-primary small w-button"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
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
                <div className="title-with-icon">
                  <i className="fas fa-users icon-left"></i>
                  <h2 className="title faqs">About Us</h2>
                </div>
              </div>
            </div>
            <div
              data-w-id="536544ec-77b7-39b3-106e-94faf2286668"
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
              className="card team-page-careers"
            >
              <div className="card-team-page-careers-content">
                <h3 className="title card-team-page-careers centered">
                  Interested in knowing more about our vision?
                </h3>
                <p className="paragraph card-team-page-careers centered">
                  Meet the dedicated team, explore our mission, and see
                  firsthand how passion fuels our every innovation.
                </p>
              </div>
              <div className="button-primary-gradient card-team-page-careers">
                <a
                  onClick={redirectToAboutPage}
                  className="button-primary small w-button"
                >
                  Learn About Us
                </a>
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
