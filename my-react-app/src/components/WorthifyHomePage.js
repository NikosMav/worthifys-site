import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const WorthifyHomePage = () => {
  useEffect(() => {
    window.Webflow && window.Webflow.destroy();
    window.Webflow && window.Webflow.ready();
    window.Webflow && window.Webflow.require("ix2").init();
    document.dispatchEvent(new Event("readystatechange"));
  });

  // html node
  const html = document.getElementsByTagName("html")[0];
  html.setAttribute("data-wf-page", "65a4292a06a5231e6e3e76a1");
  html.setAttribute("data-wf-site", "65a4292906a5231e6e3e760e");

  const navigate = useNavigate();
  const redirectToForm = () => {
    navigate("/form-page");
  };

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
                  let Worthify reveal its true market worth. Start now and make
                  an informed decision about your vehicle's future.
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
                    >
                      <div
                        id="w-node-afb9b871-31e8-c258-d227-e3d4471c65f1-6e3e76a1"
                        className="input-wrapper"
                      >
                        <label htmlFor="field" className="field-label">
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
                        id="w-node-_71352fe0-859c-9f60-a10d-12645b34fb89-6e3e76a1"
                        className="input-wrapper"
                      >
                        <label htmlFor="Company-2" className="field-label">
                          Model
                        </label>
                        <select
                          id="field-2"
                          name="field-2"
                          data-name="Field 2"
                          className="brand-dropdown w-select"
                        >
                          <option value="">Select one...</option>
                          <option value="First">First choice</option>
                          <option value="Second">Second choice</option>
                          <option value="Third">Third choice</option>
                        </select>
                      </div>
                      <div
                        id="w-node-afb9b871-31e8-c258-d227-e3d4471c65f9-6e3e76a1"
                        className="button-primary-gradient contact-form"
                      >
                        <input
                          type="submit"
                          data-wait="Please wait..."
                          className="button-primary small w-button"
                          defaultValue="Evaluate your Car"
                          onClick={redirectToForm} // Add the onClick event here
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
              </div>
              <div
                data-w-id="9b8946bb-913e-7adf-a432-673d5fac3276"
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
                className="faqs-wrapper"
              >
                <div className="card faq">
                  <div className="card-faq-content-top">
                    <h3 className="title h4-size card-faq">
                      Does Dark X offers a free trial?
                    </h3>
                    <div className="card-faq-icon-gradient">
                      <div className="card-faq-icon-wrapper">
                        <div className="card-faq-icon-1" />
                        <div className="card-faq-icon-2" />
                      </div>
                    </div>
                  </div>
                  <div className="card-faq-content-bottom">
                    <p className="paragraph card-faq">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                <div className="card faq">
                  <div className="card-faq-content-top">
                    <h3 className="title h4-size card-faq">
                      Do you currently have open positions?
                    </h3>
                    <div className="card-faq-icon-gradient">
                      <div className="card-faq-icon-wrapper">
                        <div className="card-faq-icon-1" />
                        <div className="card-faq-icon-2" />
                      </div>
                    </div>
                  </div>
                  <div className="card-faq-content-bottom">
                    <p className="paragraph card-faq">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                <div className="card faq">
                  <div className="card-faq-content-top">
                    <h3 className="title h4-size card-faq">
                      Do you offer discounts for non-profits?
                    </h3>
                    <div className="card-faq-icon-gradient">
                      <div className="card-faq-icon-wrapper">
                        <div className="card-faq-icon-1" />
                        <div className="card-faq-icon-2" />
                      </div>
                    </div>
                  </div>
                  <div className="card-faq-content-bottom">
                    <p className="paragraph card-faq">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                <div className="card faq">
                  <div className="card-faq-content-top">
                    <h3 className="title h4-size card-faq">
                      What is your product refund policy?
                    </h3>
                    <div className="card-faq-icon-gradient">
                      <div className="card-faq-icon-wrapper">
                        <div className="card-faq-icon-1" />
                        <div className="card-faq-icon-2" />
                      </div>
                    </div>
                  </div>
                  <div className="card-faq-content-bottom">
                    <p className="paragraph card-faq">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                <div className="card faq last">
                  <div className="card-faq-content-top">
                    <h3 className="title h4-size card-faq">
                      What are current features in the roadmap?
                    </h3>
                    <div className="card-faq-icon-gradient">
                      <div className="card-faq-icon-wrapper">
                        <div className="card-faq-icon-1" />
                        <div className="card-faq-icon-2" />
                      </div>
                    </div>
                  </div>
                  <div className="card-faq-content-bottom">
                    <p className="paragraph card-faq">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-blur-wrapper faqs">
                <div className="bg-gradient-blur-circle-3" />
                <div className="bg-gradient-blur-circle-2 blue left" />
                <div className="bg-gradient-blur-circle-1 pink" />
              </div>
            </div>
            <div className="container-default home-hero w-container">
              <div
                data-w-id="58ed6e0c-7961-e5e6-bc1d-6ae6c94a1d9c"
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
                  alt="Investor Image - Dark X Webflow Template"
                  className="image home-hero-1"
                />
                <img
                  src="/images/image-2-home-hero-dark-template.svg"
                  loading="eager"
                  alt="Investor App - Dark X Webflow Template"
                  className="image home-hero-2"
                />
                <img
                  src="/images/image-3-home-hero-dark-template.svg"
                  loading="eager"
                  alt="Investor App - Dark X Webflow Template"
                  className="image home-hero-3"
                />
              </div>
              <div className="home-hero-companies-wrapper">
                <div className="home-hero-companies">
                  <img
                    src="/images/agency-logo-dark-x-webflow-template.svg"
                    loading="eager"
                    alt="Agency Logo - Dark X Webflow Template"
                    className="image home-hero-company"
                  />
                  <img
                    src="/images/application-logo-dark-x-webflow-template.svg"
                    loading="eager"
                    alt="Application Logo - Dark X Webflow Template"
                    className="image home-hero-company google"
                  />
                  <img
                    src="/images/company-logo-dark-x-webflow-template.svg"
                    loading="eager"
                    alt="Company Logo - Dark X Webflow Template"
                    className="image home-hero-company youtube"
                  />
                  <img
                    src="/images/business-logo-dark-x-webflow-template.svg"
                    loading="eager"
                    alt="Business Logo - Dark X Webflow Template"
                    className="image home-hero-company"
                  />
                </div>
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
