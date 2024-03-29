import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import ForecastingLineChart from "../charts/ForecastingLineChart";
import ForecastingLineChart2 from "../charts/ForecastingLineChart2";

const WorthifyForecastingPage = () => {
  // webflow.js
  useEffect(() => {
    window.Webflow && window.Webflow.destroy();
    window.Webflow && window.Webflow.ready();
    window.Webflow && window.Webflow.require("ix2").init();
    document.dispatchEvent(new Event("readystatechange"));
  }, []);

  // html node
  const html = document.getElementsByTagName("html")[0];
  html.setAttribute("data-wf-page", "65a4292a06a5231e6e3e766c");
  html.setAttribute("data-wf-site", "65a4292906a5231e6e3e760e");

  const [activeItem, setActiveItem] = useState(null);
  // Handler to set active item
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  return (
    <div className="page-wrapper overflow-hidden">
      <Header />
      <main>
        <section className="section blog-hero">
          <div className="container-medium-713px blog-hero">
            <h1
              data-w-id="6770fed3-0848-4b14-c9ef-95fcff3f16d4"
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
              className="title blog-hero"
            >
              Price Forecasting
            </h1>
            <p
              data-w-id="b52ca7d1-bd68-5172-e003-cf2540b2e13c"
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
              className="paragraph blog-hero"
            >
              Enter your car's make and model to get a glimpse into its future
              value, backed by our cutting-edge predictive analytics.
            </p>
            <div
              data-w-id="cf573a1b-b40f-dbaa-55e6-498ccce2ed27"
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
              className="blog-newsletter-form-block w-form"
            >
              <form
                id="email-form"
                name="email-form"
                data-name="Email Form"
                method="get"
                className="blog-newsletter-form"
                data-wf-page-id="65a4292a06a5231e6e3e766c"
                data-wf-element-id="cf573a1b-b40f-dbaa-55e6-498ccce2ed28"
              >
                <input
                  className="input blog-newsletter w-input"
                  maxLength={256}
                  name="CarSearch"
                  placeholder="Enter car make and model"
                  type="email"
                  id="email"
                  required=""
                />
                <div className="button-primary-gradient blog-newsletter">
                  <input
                    type="submit"
                    data-wait="Please wait..."
                    className="button-primary small w-button"
                    defaultValue="Search"
                  />
                </div>
              </form>
              <div className="success-message w-form-done">
                <div>Thanks for joining our newsletter.</div>
              </div>
              <div className="error-message w-form-fail">
                <div>Oops! Something went wrong.</div>
              </div>
            </div>
          </div>
        </section>
        <div className="container-default w-container">
          <div className="divider" />
        </div>
        <section className="section blog">
          <div className="container-default blog w-container">
            <div
              data-w-id="ab6c026c-de17-2a01-2298-c89641aea498"
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
              className="content-top blog"
            >
              <h2 className="title blog">Results</h2>
              <div className="categories-collection-list-wrapper w-dyn-list">
                <div role="list" className="categories-wrapper w-dyn-items">
                  <div role="listitem" className="category-item w-dyn-item">
                    <button
                      href="blog.html"
                      aria-current="page"
                      className="button-secondary button-category all w-inline-block w--current"
                    >
                      <div className="button-category-text">All</div>
                    </button>
                    <button
                      href="#"
                      className="button-secondary button-category w-inline-block"
                    >
                      <img
                        src=""
                        loading="eager"
                        alt=""
                        className="image button-category-icon"
                      />
                      <div className="button-category-text" />
                    </button>
                  </div>
                </div>
                <div className="empty-state small w-dyn-empty">
                  <div>No items found.</div>
                </div>
              </div>
            </div>
            <div
              data-w-id="6fde36c0-8d94-cbbf-0b0f-82b48e3ec186"
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
              className="blog-collection-list-wrapper w-dyn-list"
            >
              <div role="list" className="blog-grid w-dyn-items">
                <div role="listitem" className="post-item w-dyn-item">
                  <div
                    onClick={() => handleItemClick("opel-corsa")}
                    className={`card post-item w-inline-block ${
                      activeItem === "opel-corsa" ? "active" : ""
                    }`}
                  >
                    <div className="image-wrapper card-post-item">
                      <img
                        src="images/2016-Opel-Corsa.jpg"
                        loading="eager"
                        alt="opel corsa 2016"
                        className="image card-post-item"
                      />
                      {/* <div className="card-post-item-category-wrapper">
                        <img
                          src=""
                          loading="eager"
                          alt=""
                          className="image card-post-item-category-icon"
                        />
                        <div className="card-post-item-category-text" />
                      </div> */}
                    </div>
                    <div className="card-post-item-content">
                      <h3 className="title card-post-item">Opel Corsa 2016</h3>
                      <div className="card-post-item-about-wrapper">
                        <div className="card-post-item-about-content">
                          {/* <img
                            src="images/icon-1-post-about-dark-template.svg"
                            loading="eager"
                            alt="Calendar Icon - Dark X Webflow Template"
                            className="image card-post-item-about-icon"
                          /> */}
                          <div />
                        </div>
                        <div className="card-post-item-about-content">
                          {/* <img
                            src="images/icon-2-post-about-dark-template.svg"
                            loading="eager"
                            alt="Clock Icon - Dark X Webflow Template"
                            className="image card-post-item-about-icon"
                          /> */}
                          <div />
                          {/* <div>&nbsp;min read</div> */}
                        </div>
                      </div>
                      <div className="link-underline-main-wrapper">
                        <div className="link-underline-text-wrapper">
                          <div>Find out more</div>
                          <div className="link-underline-text-icon"></div>
                        </div>
                        <div className="link-underline-wrapper">
                          <div className="link-underline" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div role="listitem" className="post-item w-dyn-item">
                  <div
                    onClick={() => handleItemClick("toyota-yaris")}
                    className={`card post-item w-inline-block ${
                      activeItem === "toyota-yaris" ? "active" : ""
                    }`}
                  >
                    <div className="image-wrapper card-post-item">
                      <img
                        src="images/2016-toyota-yaris.jpg"
                        loading="eager"
                        alt="toyota yaris 2016"
                        className="image card-post-item"
                      />
                      {/* <div className="card-post-item-category-wrapper">
                        <img
                          src=""
                          loading="eager"
                          alt=""
                          className="image card-post-item-category-icon"
                        />
                        <div className="card-post-item-category-text" />
                      </div> */}
                    </div>
                    <div className="card-post-item-content">
                      <h3 className="title card-post-item">
                        Toyota Yaris 2016
                      </h3>
                      <div className="card-post-item-about-wrapper">
                        <div className="card-post-item-about-content">
                          {/* <img
                            src="images/icon-1-post-about-dark-template.svg"
                            loading="eager"
                            alt="Calendar Icon - Dark X Webflow Template"
                            className="image card-post-item-about-icon"
                          /> */}
                          <div />
                        </div>
                        <div className="card-post-item-about-content">
                          {/* <img
                            src="images/icon-2-post-about-dark-template.svg"
                            loading="eager"
                            alt="Clock Icon - Dark X Webflow Template"
                            className="image card-post-item-about-icon"
                          /> */}
                          <div />
                          {/* <div>&nbsp;min read</div> */}
                        </div>
                      </div>
                      <div className="link-underline-main-wrapper">
                        <div className="link-underline-text-wrapper">
                          <div>Find out more</div>
                          <div className="link-underline-text-icon"></div>
                        </div>
                        <div className="link-underline-wrapper">
                          <div className="link-underline" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="empty-state w-dyn-empty">
                <div>No items found.</div>
              </div> */}
              {/* <div
                role="navigation"
                aria-label="List"
                className="w-pagination-wrapper pagination"
              >
                <a
                  href="#"
                  aria-label="Previous Page"
                  className="w-pagination-previous pagination-link"
                >
                  <div className="pagination-link-icon-left"></div>
                  <div className="w-inline-block">Previous</div>
                </a>
                <div
                  aria-label="Page 1 of 1"
                  role="heading"
                  className="w-page-count page-count"
                />
                <a
                  href="#"
                  aria-label="Next Page"
                  className="w-pagination-next pagination-link"
                >
                  <div className="w-inline-block">Next</div>
                  <div className="pagination-link-icon-right"></div>
                </a>
              </div> */}
            </div>
            <div className="bg-gradient-blur-wrapper blog">
              <div className="bg-gradient-blur-circle-3 pink" />
              <div className="bg-gradient-blur-circle-2 blue-2 blog" />
              <div className="bg-gradient-blur-circle-1 pink" />
            </div>
            <div className="forecast-line-chart-div">
              {activeItem === "opel-corsa" && (
                <div className="additional-content">
                  <p>Opel Corsa 2016</p>
                  <div
                    style={{
                      height: "2px",
                      backgroundColor: "#333",
                      width: "12%",
                      marginTop: "-10px",
                      marginBottom: "15px",
                    }}
                  ></div>
                  <h2 className="title blog-2">Time Series Validation Chart</h2>
                  <ForecastingLineChart />
                </div>
              )}
              {activeItem === "opel-corsa" && (
                <div className="additional-content">
                  <p>Opel Corsa 2016</p>
                  <div
                    style={{
                      height: "2px",
                      backgroundColor: "#333",
                      width: "12%",
                      marginTop: "-10px",
                      marginBottom: "15px",
                    }}
                  ></div>
                  <h2 className="title blog-2">Price Forecasting Chart</h2>
                  <ForecastingLineChart2 />
                </div>
              )}
              {activeItem === "toyota-yaris" && (
                <div className="additional-content">
                  <p>Toyota Yaris 2016</p>
                  <div
                    style={{
                      height: "2px",
                      backgroundColor: "#333",
                      width: "12%",
                      marginTop: "-10px",
                      marginBottom: "15px",
                    }}
                  ></div>
                  <h2 className="title blog-2">Time Series Validation Chart</h2>
                  <ForecastingLineChart />
                </div>
              )}
              {activeItem === "toyota-yaris" && (
                <div className="additional-content">
                  <p>Toyota Yaris 2016</p>
                  <div
                    style={{
                      height: "2px",
                      backgroundColor: "#333",
                      width: "12%",
                      marginTop: "-10px",
                      marginBottom: "15px",
                    }}
                  ></div>
                  <h2 className="title blog-2">Price Forecasting Chart</h2>
                  <ForecastingLineChart2 />
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WorthifyForecastingPage;
