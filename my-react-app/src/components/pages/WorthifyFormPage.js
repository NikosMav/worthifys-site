import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import Header from "../Header";
import Footer from "../Footer";
import GroupedAutocomplete from "../Autocomplete";
import PostalCodeField from "../PostalCodeField";
import DescriptionInput from "../DescriptionInput";
import carData from "../../carData.json";
import Modal from "../Modal";
import { useLocation } from "react-router-dom";
// import { colors } from "@mui/material";
import colors from "../charts/data/colors.json";
import animationData from "../charts/data/Animation - 1708211745164.json";
//             brand,model,displ,cat,fuel,trans,doors,color,hp,merchant,seats
const array = ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"];

const WorthifyFormPage = () => {
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

  // Hook to access the current location
  const location = useLocation();

  // Initialize state
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedVariant, setSelectedVariant] = useState("");
  const [selectedEngine, setSelectedEngine] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedFuel, setSelectedFuel] = useState("");
  const [selectedTrans, setSelectedTrans] = useState("");
  const [selectedHP, setSelectedHP] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedMileage, setSelectedMileage] = useState("");
  const [selectedPostal, setSelectedPostal] = useState("");
  const [selectedDesc, setSelectedDesc] = useState("");

  // Extract brand and model from URL parameters
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    setSelectedBrand(queryParams.get("brand") || "");
    setSelectedModel(queryParams.get("model") || "");
  }, [location.search]); // Listen for changes in search parameters

  const [cars, setCars] = useState({
    Brand: [],
    Model: [],
    Variant: [],
    Cubic: [],
    Category: [],
    Fuel: [],
    Transmission: [],
    Doors: [],
    Color: [],
    Horsepower: [],
    Merchant: [],
    Seats: [],
    //Seats: [],
  });

  useEffect(() => {
    console.log(array);
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
        console.log(array);

        const data = await response.json();
        // console.log(data)
        console.log("AY YO");
        // console.log(data)
        setCars(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    // console.log(cars);
    // console.log(cars.hp);
    // console.log(cars.Cubic);
  }, []); //change the [] if you want to loop it somehow

  const handleChange = (event, value, i) => {
    if (value === null || value === undefined) {
      value = { firstLetter: "*", title: "*" };
    }
    // console.log(value);

    // Special handling for Brand and Model based on their index (0 for Brand, 1 for Model)
    if (i === 0) {
      // Brand
      setSelectedBrand(value.title);
    } else if (i === 1) {
      // Model
      setSelectedModel(value.title);
    } else if (i === 2) {
      // Engine
      setSelectedEngine(value.title);
    } else if (i === 3) {
      // Category
      setSelectedCategory(value.title);
    } else if (i === 4) {
      // Fuel
      setSelectedFuel(value.title);
    } else if (i === 5) {
      // Transmission
      setSelectedTrans(value.title);
    } else if (i === 7) {
      // Color
      setSelectedColor(value.title);
      return; // let's not destroy our options with the colors
    } else if (i === 8) {
      // HP
      setSelectedHP(value.title);
    } else if (i === 6) {
      // Date
      setSelectedDate(value.title);
      return;
    }

    array[i] = value.title;

    //let's keep the color options
    // colors = cars.colors

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
        // console.log(cars);
        // console.log(cars.Cubic);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    // cars.colors = colors;
    console.log(cars);
    console.log(cars.Horsepower);
    console.log(cars.Cubic);
  };

  //Initialize Reset Key State
  const [resetKey, setResetKey] = useState(0);

  const handleClearForm = () => {
    // This will force the form or components with this key to re-render
    // setResetKey((prevKey) => prevKey + 1);
    setSelectedBrand("");
    setSelectedModel("");
    setSelectedVariant("");
    setSelectedEngine("");
    setSelectedDate("");
    setSelectedCategory("");
    setSelectedFuel("");
    setSelectedTrans("");
    setSelectedHP("");
    setSelectedColor("");
    setSelectedMileage("");
    setSelectedPostal("");
    setSelectedDesc("");
    for (const i in array) {
      array[i] = "*";
    }
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
  };

  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [estimatedValue, setEstimatedValue] = useState("");

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    // Cleanup function to set overflow back to default when the component unmounts
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isModalOpen]); // Only re-run the effect if isModalOpen changes

  useEffect(() => {
    // Here you would fetch the estimated value and then set loading to false
    const fetchEstimatedValue = async () => {
      // Simulate fetching data with a timeout
      setTimeout(() => {
        setEstimatedValue("$10,000"); // Replace with actual value from API call
        setLoading(false);
      }, 3000); // Simulates a 3 second API call
    };

    if (isModalOpen) {
      fetchEstimatedValue();
    }
  }, [isModalOpen]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleSubmission = (event) => {
    console.log("YEAAAH BUDDY");
    event.preventDefault();
    const array2 = [
      selectedBrand,
      selectedModel,
      selectedVariant,
      selectedEngine,
      selectedDate,
      selectedCategory,
      selectedFuel,
      selectedTrans,
      selectedHP,
      selectedColor,
      selectedMileage,
      selectedPostal,
      selectedDesc,
    ];
    for (let i = 0; i < array2.length; i++) {
      console.log(i);
      console.log(array2[i]);
      if (i === 2 || i === 12) {
        continue;
      }
      if (array2[i] === "" || array2[i] === "*") {
        console.log("Please fill all the required fields!");
        return; // Exits the function. Use 'break' if you only want to exit the loop.
      }
    }
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://16.170.253.186:443/getEvaluation",
          {
            // URL of your Flask server
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ array: array2 }),
          }
        );
        const data = await response.json();
        console.log(data);
        // setCars(data);
        // console.log(cars.Cubic);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    setEstimatedValue("$10,000"); // Example value
    setIsModalOpen(true);
    fetchData();
    // console.log(cars);
  };

  const handlePostalCodeChange = (zipCode) => {
    // Handle zip code value
    setSelectedPostal(zipCode);
    console.log(zipCode);
  };

  const [description, setDescription] = useState("");
  const handleDescriptionChange = (event) => {
    setSelectedDesc(event.target.value);
  };

  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   // Form submission logic here
  // };

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   // Your logic to calculate the estimated value
  //   setEstimatedValue("$10,000"); // Example value
  //   setIsModalOpen(true);
  // };

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
                        onSubmit={(event) => {
                          handleSubmission(event);
                        }}
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
                            value={selectedBrand} // Pass the selected brand
                            onChange={(event, value) => {
                              setSelectedBrand(value);
                              handleChange(event, value, 0);
                            }} // Add onChange handler
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
                            value={selectedModel} // Pass the selected model
                            onChange={(event, value) => {
                              setSelectedModel(value);
                              // console.log(selectedModel)
                              handleChange(event, value, 1);
                            }} // Add onChange handler
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="variant-autocomplete"
                            className="field-label form-2"
                          >
                            Variant
                          </label>
                          <input
                            key={`grouped-autocomplete-variant-${resetKey}`}
                            type="text"
                            id="variant"
                            name="Variant"
                            placeholder="Input Variant"
                            className="brand-dropdown w-select "
                            onChange={(e) => {
                              setSelectedVariant(e.target.value); // Update the input's value
                              console.log(selectedVariant); // Log something when the input changes
                            }}
                            style={{
                              height: "61px",
                              border: "1px solid white",
                              padding: "15px",
                              borderRadius: "10px",
                              fontFamily: "Thicccboi",
                              fontSize: "18px",
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
                            value={selectedEngine}
                            onChange={(event, value) => {
                              setSelectedEngine(value);
                              handleChange(event, value, 2);
                            }} // Add onChange handler
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
                            value={selectedDate}
                            onChange={(event, value) => {
                              setSelectedDate(value); // Update the input's value
                              handleChange(event, value, 6);
                              console.log(selectedDate); // Log something when the input changes
                            }}
                            // onChange={(event, value) =>
                            //   handleChange(event, value, 4)
                            // } // Add onChange handler
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
                            value={selectedCategory}
                            onChange={(event, value) => {
                              setSelectedCategory(value);
                              handleChange(event, value, 3);
                            }} // Add onChange handler
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
                            value={selectedFuel}
                            onChange={(event, value) => {
                              setSelectedFuel(value);
                              handleChange(event, value, 4);
                            }} // Add onChange handler
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
                            value={selectedTrans}
                            onChange={(event, value) => {
                              setSelectedTrans(value);
                              handleChange(event, value, 5);
                            }} // Add onChange handler
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="HP-autocomplete"
                            className="field-label form-2"
                          >
                            Horsepower
                          </label>
                          <GroupedAutocomplete
                            key={`grouped-autocomplete-HP-${resetKey}`}
                            optionsData={cars.Horsepower}
                            label="Select Horsepower"
                            value={selectedHP}
                            onChange={(event, value) => {
                              setSelectedHP(value);
                              handleChange(event, value, 8);
                            }} // Add onChange handler
                          />
                        </div>
                        <div>
                          <label htmlFor="color" className="field-label form-2">
                            Color
                          </label>
                          <GroupedAutocomplete
                            key={`grouped-autocomplete-colors-${resetKey}`}
                            optionsData={colors.colors}
                            label="Select Color"
                            value={selectedColor}
                            onChange={(event, value) => {
                              setSelectedColor(value);
                              handleChange(event, value, 7);
                            }} // Add onChange handler
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
                            onChange={(e) => {
                              setSelectedMileage(e.target.value); // Update the input's value
                              console.log(selectedMileage); // Log something when the input changes
                            }}
                            style={{
                              height: "61px",
                              border: "1px solid white",
                              padding: "15px",
                              borderRadius: "10px",
                              fontFamily: "Thicccboi",
                              fontSize: "18px",
                            }}
                          ></input>
                        </div>
                        <div>
                          <label
                            htmlFor="zipcode"
                            className="field-label form-2"
                          >
                            Location
                          </label>
                          <PostalCodeField
                            key={`grouped-autocomplete-postalcode-${resetKey}`}
                            onChange={handlePostalCodeChange}
                          />
                          {/* <span
                            id="zipcodeError"
                            style={{ color: "red", display: "none" }}
                          >
                            Invalid Zip Code
                          </span> */}
                        </div>
                        <div id="description-id">
                          <label
                            htmlFor="description"
                            className="field-label form-2"
                          >
                            Description
                          </label>
                          <DescriptionInput
                            key={`grouped-autocomplete-desc-${resetKey}`}
                            value={selectedDesc}
                            onChange={handleDescriptionChange}
                          />
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
                      <Modal
                        isOpen={isModalOpen}
                        onClose={() => {
                          setIsModalOpen(false);
                          setLoading(true);
                        }}
                      >
                        {loading ? (
                          <Lottie
                            options={defaultOptions}
                            height={200}
                            width={200}
                          />
                        ) : (
                          <p className="modal-title">
                            Estimated Value: {estimatedValue}
                          </p>
                        )}
                      </Modal>
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
