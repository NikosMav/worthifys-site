import React, { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import GroupedAutocomplete from "../Autocomplete";
import PostalCodeField from "../PostalCodeField";
import carData from "../../carData.json";

//             brand,model,displ,cat,fuel,trans,doors
const array = ["*", "*", "*", "*", "*", "*", "*"];

const WorthifyFormPage = () => {
  const [cars, setCars] = useState({
    Brand: [],
    Model: [],
    Variant: [],
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
  };

  //Initialize Reset Key State
  const [resetKey, setResetKey] = useState(0);

  const handleClearForm = () => {
    // This will force the form or components with this key to re-render
    setResetKey((prevKey) => prevKey + 1);
  };

  useEffect(() => {
    window.Webflow && window.Webflow.destroy();
    window.Webflow && window.Webflow.ready();
    window.Webflow && window.Webflow.require("ix2").init();
    document.dispatchEvent(new Event("readystatechange"));
  }, []);

  // html node
  const html = document.getElementsByTagName("html")[0];
  html.setAttribute("data-wf-page", "65a4292a06a5231e6e3e7670");
  html.setAttribute("data-wf-site", "65a4292906a5231e6e3e760e");

  const handlePostalCodeChange = (zipCode) => {
    // Handle zip code value
    console.log(zipCode);
  };

  return (
    <div className="bg-neutral-800">
      <div className="page-wrapper overflow-hidden">
        <Header />
        <main>
          <section className="section contact">
            <div className="container-default w-container">
              <div className="contact-wrapper">
                <div
                  data-w-id="a24e5678-371b-6260-a687-7ea64769673a"
                  style={{ opacity: 0 }}
                  className="split-content contact-form"
                >
                  <div className="container-small-552px contact-hero">
                    <h1
                      data-w-id="0e9745a2-0955-3554-41c0-d8d9eb1f57e6"
                      style={{
                        WebkitTransform:
                          "translate3d(0, 40%, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        MozTransform:
                          "translate3d(0, 40%, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        msTransform:
                          "translate3d(0, 40%, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        transform:
                          "translate3d(0, 40%, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                        opacity: 0,
                      }}
                      className="title contact-hero"
                    >
                      Evaluate your Car
                    </h1>
                  </div>
                </div>
                <div
                  data-w-id="59a930ba-1041-e0d0-2ddc-248a7c44a57b"
                  style={{ opacity: 0 }}
                  className="split-content contact-form"
                >
                  <div className="card contact-form evaluation-form">
                    <div className="contact-form-block w-form">
                      <form
                        key={resetKey}
                        id="wf-form-contact-form"
                        name="wf-form-Contact-Form"
                        data-name="Contact Form"
                        method="get"
                        className="card-contact-form form-2"
                        data-wf-page-id="65a4292a06a5231e6e3e7670"
                        data-wf-element-id="13235370-6615-b8f7-1966-ee3fe42ff50b"
                        //onSubmit={handleFormSubmit}
                      >
                        <div>
                          <label
                            htmlFor="brand-autocomplete"
                            className="field-label form-2"
                          >
                            Brand
                          </label>
                          <GroupedAutocomplete
                            key={`grouped-autocomplete-brand-${resetKey}`}
                            optionsData={cars.Brand}
                            label="Select Brand"
                            onChange={(event, value) =>
                              handleChange(event, value, 0)
                            } // Add onChange handler
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="model-autocomplete"
                            className="field-label form-2"
                          >
                            Model
                          </label>
                          <GroupedAutocomplete
                            key={`grouped-autocomplete-model-${resetKey}`}
                            optionsData={cars.Model}
                            label="Select Model"
                            onChange={(event, value) =>
                              handleChange(event, value, 1)
                            } // Add onChange handler
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="variant-autocomplete"
                            className="field-label form-2"
                          >
                            Variant
                          </label>
                          {/* <GroupedAutocomplete
                            key={`grouped-autocomplete-variant-${resetKey}`}
                            optionsData={cars.Variant}
                            label="Select Variant"
                            onChange={(event, value) =>
                              handleChange(event, value, 2)
                            } // Add onChange handler
                          /> */}
                          <input
                            key={`grouped-autocomplete-variant-${resetKey}`}
                            type="text"
                            id="variant"
                            name="Variant"
                            placeholder="Input Variant"
                            className="brand-dropdown w-select "
                            style={{
                              height: "61px",
                              border: "1px solid white",
                              padding: "15px",
                              borderRadius: "10px",
                              fontFamily: "Thicccboi",
                            }}
                          ></input>
                        </div>
                        <div>
                          <label
                            htmlFor="engine-autocomplete"
                            className="field-label form-2"
                          >
                            Engine
                          </label>
                          <GroupedAutocomplete
                            key={`grouped-autocomplete-cubic-${resetKey}`}
                            optionsData={cars.Cubic}
                            label="Select Engine"
                            onChange={(event, value) =>
                              handleChange(event, value, 3)
                            } // Add onChange handler
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="date-autocomplete"
                            className="field-label form-2"
                          >
                            Date
                          </label>
                          <GroupedAutocomplete
                            key={`grouped-autocomplete-date-${resetKey}`}
                            optionsData={carData.Year}
                            label="Select Date"
                            onChange={(event, value) =>
                              handleChange(event, value, 4)
                            } // Add onChange handler
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="category-autocomplete"
                            className="field-label form-2"
                          >
                            Category
                          </label>
                          <GroupedAutocomplete
                            key={`grouped-autocomplete-category-${resetKey}`}
                            optionsData={cars.Category}
                            label="Select Category"
                            onChange={(event, value) =>
                              handleChange(event, value, 5)
                            } // Add onChange handler
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="fuel-autocomplete"
                            className="field-label form-2"
                          >
                            Fuel
                          </label>
                          <GroupedAutocomplete
                            key={`grouped-autocomplete-fuel-${resetKey}`}
                            optionsData={cars.Fuel}
                            label="Select Fuel"
                            onChange={(event, value) =>
                              handleChange(event, value, 6)
                            } // Add onChange handler
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="transmission-autocomplete"
                            className="field-label form-2"
                          >
                            Transmission
                          </label>
                          <GroupedAutocomplete
                            key={`grouped-autocomplete-transmission-${resetKey}`}
                            optionsData={cars.Transmission}
                            label="Select Transmission"
                            onChange={(event, value) =>
                              handleChange(event, value, 7)
                            } // Add onChange handler
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="doors-autocomplete"
                            className="field-label form-2"
                          >
                            Doors
                          </label>
                          <GroupedAutocomplete
                            key={`grouped-autocomplete-doors-${resetKey}`}
                            optionsData={cars.Doors}
                            label="Select Doors"
                            onChange={(event, value) =>
                              handleChange(event, value, 8)
                            } // Add onChange handler
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="mileage"
                            className="field-label form-2"
                          >
                            Mileage
                          </label>
                          <input
                            key={`grouped-autocomplete-mileage-${resetKey}`}
                            type="number"
                            id="mileage"
                            min="0"
                            step="1000"
                            pattern="\d*"
                            name="Mileage"
                            placeholder="Input Mileage"
                            className="brand-dropdown w-select "
                            style={{
                              height: "61px",
                              border: "1px solid white",
                              padding: "15px",
                              borderRadius: "10px",
                              fontFamily: "Thicccboi",
                            }}
                          ></input>
                        </div>
                        <div>
                          <label
                            htmlFor="zipcode"
                            className="field-label form-2"
                          >
                            Postal Code
                          </label>
                          <PostalCodeField
                            key={`grouped-autocomplete-postalcode-${resetKey}`}
                            onChange={handlePostalCodeChange}
                          />
                          <span
                            id="zipcodeError"
                            style={{ color: "red", display: "none" }}
                          >
                            Invalid Zip Code
                          </span>
                        </div>
                        <div
                          id="w-node-_8ccbc011-c20c-04a7-65e7-f6cbb3c839d7-6e3e7670-2"
                          className="button-primary-gradient contact-form"
                        >
                          <input
                            type="button"
                            onClick={handleClearForm}
                            className="button-primary small w-button"
                            defaultValue="Clear"
                          />
                        </div>
                        {/* <button
                          type="button"
                          onClick={handleClearForm}
                          className="clear-button"
                        >
                          Clear
                        </button> */}
                        <div
                          id="w-node-_8ccbc011-c20c-04a7-65e7-f6cbb3c839d7-6e3e7670"
                          className="button-primary-gradient contact-form"
                        >
                          <input
                            type="submit"
                            data-wait="Please wait..."
                            className="button-primary small w-button"
                            defaultValue="Submit"
                          />
                        </div>
                      </form>
                      <div className="success-message w-form-done">
                        <div>
                          Your message has been submitted. <br />
                          We will get back to you within 24-48 hours.
                        </div>
                      </div>
                      <div className="error-message w-form-fail">
                        <div>Oops! Something went wrong.</div>
                      </div>
                    </div>
                  </div>
                  <div className="card-contact-form-gradient-blur" />
                </div>
              </div>
            </div>
          </section>
          <section className="section contact-hero">
            <div className="container-small-552px contact-hero">
              <h1
                data-w-id="dc363e27-9952-4db8-7f54-6dda2f29d433"
                style={{
                  WebkitTransform:
                    "translate3d(0, 40%, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  MozTransform:
                    "translate3d(0, 40%, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  msTransform:
                    "translate3d(0, 40%, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  transform:
                    "translate3d(0, 40%, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                  opacity: 0,
                }}
                className="title contact-hero"
              >
                Contact us
              </h1>
            </div>
            <div className="container-default contact-hero small w-container">
              <div className="w-layout-grid contact-categories-grid">
                <div
                  id="w-node-_3e7a8937-b0d4-0bb4-0996-b874a1c80065-6e3e7670"
                  data-w-id="3e7a8937-b0d4-0bb4-0996-b874a1c80065"
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
                >
                  <a
                    href="mailto:info@worthify.gr?subject=Contact%20Worthify"
                    className="card contact-category w-inline-block"
                  >
                    <div className="image-wrapper card-contact-category-icon">
                      <img
                        src="images/icon-2-contact-categories-dark-template.svg"
                        loading="lazy"
                        alt="Email Icon - Dark X Webflow Template"
                        className="image card-contact-category-icon"
                      />
                    </div>
                    <div className="card-contact-category-content">
                      <h2 className="title h4-size card-contact-category">
                        Get in Touch with the Worthify Team
                      </h2>
                      <div className="link-underline-main-wrapper card-contact-category">
                        <div className="link-underline-text-wrapper">
                          <div>Contact us</div>
                          <div className="link-underline-text-icon"></div>
                        </div>
                        <div className="link-underline-wrapper">
                          <div className="link-underline" />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="bg-gradient-blur-wrapper contact-hero">
                <div className="bg-gradient-blur-circle-3 pink top" />
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

export default WorthifyFormPage;
