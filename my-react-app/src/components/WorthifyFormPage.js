import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

const WorthifyFormPage = () => {
  useEffect(() => {
    window.Webflow && window.Webflow.destroy();
    window.Webflow && window.Webflow.ready();
    window.Webflow && window.Webflow.require("ix2").init();
    document.dispatchEvent(new Event("readystatechange"));
  });

  // html node
  const html = document.getElementsByTagName("html")[0];
  html.setAttribute("data-wf-page", "65a4292a06a5231e6e3e7670");
  html.setAttribute("data-wf-site", "65a4292906a5231e6e3e760e");

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
                        id="wf-form-contact-form"
                        name="wf-form-Contact-Form"
                        data-name="Contact Form"
                        method="get"
                        className="card-contact-form form-2"
                        data-wf-page-id="65a4292a06a5231e6e3e7670"
                        data-wf-element-id="13235370-6615-b8f7-1966-ee3fe42ff50b"
                      >
                        <div
                          id="w-node-_14d1cde4-4d4a-f24b-af06-6c985505dc06-6e3e7670"
                          className="input-wrapper form-2"
                        >
                          <label htmlFor="field" className="field-label form-2">
                            Brand
                          </label>
                          <select
                            id="field"
                            name="field"
                            data-name="Field"
                            className="brand-dropdown w-select"
                          >
                            <option value="">Select one...</option>
                            <option value="First">First choice</option>
                            <option value="Second">Second choice</option>
                            <option value="Third">Third choice</option>
                          </select>
                        </div>
                        <div
                          id="w-node-_42f4fb17-236a-4a2d-f114-8c80334f3f18-6e3e7670"
                          className="input-wrapper form-2"
                        >
                          <label
                            htmlFor="field-8"
                            className="field-label form-2"
                          >
                            Model
                          </label>
                          <select
                            id="field-8"
                            name="field-8"
                            data-name="Field 8"
                            className="brand-dropdown w-select"
                          >
                            <option value="">Select one...</option>
                            <option value="First">First choice</option>
                            <option value="Second">Second choice</option>
                            <option value="Third">Third choice</option>
                          </select>
                        </div>
                        <div
                          id="w-node-_6e835cbb-7261-fc37-7737-e52fe94feff6-6e3e7670"
                          className="input-wrapper form-2"
                        >
                          <label
                            htmlFor="Displacement"
                            className="field-label form-2"
                          >
                            Displacement
                          </label>
                          <select
                            id="Displacement"
                            name="Displacement"
                            data-name="Displacement"
                            className="brand-dropdown w-select"
                          >
                            <option value="">Select one...</option>
                            <option value="First">First choice</option>
                            <option value="Second">Second choice</option>
                            <option value="Third">Third choice</option>
                          </select>
                        </div>
                        <div
                          id="w-node-f0332866-6a23-9c5b-508a-4a533ff01ee6-6e3e7670"
                          className="input-wrapper form-2"
                        >
                          <label htmlFor="Date" className="field-label form-2">
                            Date
                          </label>
                          <select
                            id="Date"
                            name="Date"
                            data-name="Date"
                            className="brand-dropdown w-select"
                          >
                            <option value="">Select one...</option>
                            <option value="First">First choice</option>
                            <option value="Second">Second choice</option>
                            <option value="Third">Third choice</option>
                          </select>
                        </div>
                        <div
                          id="w-node-_2cdb8425-c167-9a3d-5df2-aa4d9575cd34-6e3e7670"
                          className="input-wrapper form-2"
                        >
                          <label
                            htmlFor="Category"
                            className="field-label form-2"
                          >
                            Category
                          </label>
                          <select
                            id="Category"
                            name="Category"
                            data-name="Category"
                            className="brand-dropdown w-select"
                          >
                            <option value="">Select one...</option>
                            <option value="First">First choice</option>
                            <option value="Second">Second choice</option>
                            <option value="Third">Third choice</option>
                          </select>
                        </div>
                        <div
                          id="w-node-_122377a8-8267-b7af-f9cb-4f0c53a4aba7-6e3e7670"
                          className="input-wrapper form-2"
                        >
                          <label htmlFor="Fuel" className="field-label form-2">
                            Fuel
                          </label>
                          <select
                            id="Fuel"
                            name="Fuel"
                            data-name="Fuel"
                            className="brand-dropdown w-select"
                          >
                            <option value="">Select one...</option>
                            <option value="First">First choice</option>
                            <option value="Second">Second choice</option>
                            <option value="Third">Third choice</option>
                          </select>
                        </div>
                        <div
                          id="w-node-_52a71856-fafc-88b1-e133-ad6c0cc1a51c-6e3e7670"
                          className="input-wrapper form-2"
                        >
                          <label
                            htmlFor="Transmission"
                            className="field-label form-2"
                          >
                            Transmission
                          </label>
                          <select
                            id="Transmission"
                            name="Transmission"
                            data-name="Transmission"
                            className="brand-dropdown w-select"
                          >
                            <option value="">Select one...</option>
                            <option value="First">First choice</option>
                            <option value="Second">Second choice</option>
                            <option value="Third">Third choice</option>
                          </select>
                        </div>
                        <div
                          id="w-node-_4ccede12-f0a4-c373-7cc1-202709254143-6e3e7670"
                          className="input-wrapper form-2"
                        >
                          <label
                            htmlFor="Mileage"
                            className="field-label form-2"
                          >
                            Mileage
                          </label>
                          <select
                            id="Mileage"
                            name="Mileage"
                            data-name="Mileage"
                            className="brand-dropdown w-select"
                          >
                            <option value="">Select one...</option>
                            <option value="First">First choice</option>
                            <option value="Second">Second choice</option>
                            <option value="Third">Third choice</option>
                          </select>
                        </div>
                        <div
                          id="w-node-_1e46c983-60d6-514f-835b-06039ba11559-6e3e7670"
                          className="input-wrapper form-2"
                        >
                          <label
                            htmlFor="field-9"
                            className="field-label form-2"
                          >
                            Doors
                          </label>
                          <select
                            id="field-7"
                            name="field-7"
                            data-name="Field 7"
                            className="brand-dropdown w-select"
                          >
                            <option value="">Select one...</option>
                            <option value="First">First choice</option>
                            <option value="Second">Second choice</option>
                            <option value="Third">Third choice</option>
                          </select>
                        </div>
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
