import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import PieChartComponent23 from "./charts/PieChartComponent23";
import PieChartComponent22 from "./charts/PieChartComponent22";

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

  return (
    <div className="sales-body">
      <div className="page-wrapper">
        <Header />
        <main>
          <section className="section bottom-60px">
            <div className="container-default w-container">
              <div
                data-w-id="3b77e255-c948-c6bd-5f66-e009eb0d6ff0"
                style={{ opacity: 0 }}
                className="container-medium-840px center"
              >
                <div className="text-center">
                  <h2>
                    Our charts are more than just visual representations...
                  </h2>
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
                <img
                  src="images/notification-banner-dark-x-webflow-template.png"
                  srcSet="images/notification-banner-dark-x-webflow-template-p-500.png 500w, images/notification-banner-dark-x-webflow-template-p-800.png 800w, images/notification-banner-dark-x-webflow-template.png 1288w"
                  id="w-node-fac2aa87-e868-6e59-d10f-2375feecea4b-6e3e7664"
                  sizes="(max-width: 479px) 90vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, (max-width: 1919px) 96vw, 1198px"
                  alt="Notifications - Dark X Webflow Template"
                  className="sales-image-wrapper"
                />
                <div id="w-node-fac2aa87-e868-6e59-d10f-2375feecea43-6e3e7664">
                  <h2>3 Notification Bars</h2>
                  <p className="mg-bottom-40px">
                    If you are looking to get more sales, use one of our 3
                    notification bars included in the Dark X Webflow Template,
                    and start promoting your products or services.
                  </p>
                  <div className="button-primary-gradient _2-buttons">
                    <a
                      href="https://webflow.com/templates/html/dark-x-app-website-template"
                      className="button-primary w-button"
                    >
                      Buy Template
                    </a>
                  </div>
                </div>
              </div>
              <div
                data-w-id="dc1ec8d6-369e-c849-0ec9-25afa4e2ad8e"
                style={{ opacity: 0 }}
                className="w-layout-grid grid-2-col sales-sections"
              >
                <div id="w-node-dc1ec8d6-369e-c849-0ec9-25afa4e2ad8f-6e3e7664">
                  <h2>Custom Icon Set</h2>
                  <p className="mg-bottom-40px">
                    The Dark X Webflow Template includes 3 sets of custom icons
                    (rounded, square and filled), so you can easily use more
                    icon fonts in your template.
                    <br />
                    <br />
                    No matter if you are looking to add another social media
                    icon in the footer, or change the cart icon in the header,
                    we got you covered.
                  </p>
                  <div className="_2-buttons-wrapper left">
                    <div className="button-primary-gradient _2-buttons">
                      <a
                        href="https://webflow.com/templates/html/dark-x-app-website-template"
                        className="button-primary w-button"
                      >
                        Buy Template
                      </a>
                    </div>
                    <a
                      href="https://brixtemplates.com/icon-fonts"
                      className="button-secondary _2-buttons w-button"
                    >
                      View icon font
                    </a>
                  </div>
                </div>
                <img
                  src="images/icons-dark-x-webflow-template.png"
                  srcSet="images/icons-dark-x-webflow-template-p-500.png 500w, images/icons-dark-x-webflow-template-p-800.png 800w, images/icons-dark-x-webflow-template.png 1288w"
                  id="w-node-dc1ec8d6-369e-c849-0ec9-25afa4e2ad97-6e3e7664"
                  sizes="(max-width: 479px) 90vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, (max-width: 1919px) 96vw, 1198px"
                  alt="Icons - Dark X Webflow Template"
                  className="sales-image-wrapper"
                />
              </div>
              <div
                data-w-id="9198ae79-d0c8-4a16-b07d-1a20d7372449"
                style={{ opacity: 0 }}
                className="w-layout-grid grid-2-col sales-sections left-image"
              >
                <img
                  src="images/social-media-assets-dark-x-webflow-template.png"
                  srcSet="images/social-media-assets-dark-x-webflow-template-p-500.png 500w, images/social-media-assets-dark-x-webflow-template-p-800.png 800w, images/social-media-assets-dark-x-webflow-template.png 1288w"
                  id="w-node-_9198ae79-d0c8-4a16-b07d-1a20d737244a-6e3e7664"
                  sizes="(max-width: 479px) 90vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, (max-width: 1919px) 96vw, 1198px"
                  alt="Social Media Banners - Dark X Webflow Template"
                  className="sales-image-wrapper"
                />
                <div id="w-node-_9198ae79-d0c8-4a16-b07d-1a20d737244b-6e3e7664">
                  <h2>Social Media Assets</h2>
                  <p className="mg-bottom-40px">
                    Our Dark X Webflow Template Figma file includes a collection
                    of social media covers that match with the Webflow Template
                    design (for Facebook, Twitter and LinkedIn), so you can
                    easily edit, customize, and use them for your own social
                    media profiles.
                  </p>
                  <div className="button-primary-gradient _2-buttons">
                    <a
                      href="https://webflow.com/templates/html/dark-x-app-website-template"
                      className="button-primary w-button"
                    >
                      Buy Template
                    </a>
                  </div>
                </div>
              </div>
              <div
                data-w-id="050b0796-2111-ae39-25de-e5cebf594e9f"
                style={{ opacity: 0 }}
                className="w-layout-grid grid-2-col sales-sections"
              >
                <div id="w-node-_050b0796-2111-ae39-25de-e5cebf594ea0-6e3e7664">
                  <h2>Email Signature</h2>
                  <p className="mg-bottom-40px">
                    Our Dark X Webflow Template Figma file includes 2 custom
                    email signature templates that match with the Webflow
                    template, and you can use them to impress your customers
                    with an amazing email signature.
                  </p>
                  <div className="button-primary-gradient _2-buttons">
                    <a
                      href="https://webflow.com/templates/html/dark-x-app-website-template"
                      className="button-primary w-button"
                    >
                      Buy Template
                    </a>
                  </div>
                </div>
                <img
                  src="images/icons-dark-x-webflow-template.png"
                  srcSet="images/icons-dark-x-webflow-template-p-500.png 500w, images/icons-dark-x-webflow-template-p-800.png 800w, images/icons-dark-x-webflow-template.png 1288w"
                  id="w-node-_050b0796-2111-ae39-25de-e5cebf594eae-6e3e7664"
                  sizes="(max-width: 479px) 90vw, (max-width: 767px) 94vw, (max-width: 991px) 95vw, (max-width: 1919px) 96vw, 1198px"
                  alt="Icons - Dark X Webflow Template"
                  className="sales-image-wrapper"
                />
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
