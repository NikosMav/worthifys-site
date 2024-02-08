import React, { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";

const WorthifyAboutPage = () => {
  // webflow.js
  useEffect(() => {
    window.Webflow && window.Webflow.destroy();
    window.Webflow && window.Webflow.ready();
    window.Webflow && window.Webflow.require("ix2").init();
    document.dispatchEvent(new Event("readystatechange"));
  }, []);

  // html node
  const html = document.getElementsByTagName("html")[0];
  html.setAttribute("data-wf-page", "65a4292a06a5231e6e3e766b");
  html.setAttribute("data-wf-site", "65a4292906a5231e6e3e760e");

  return (
    <div className="bg-neutral-800">
      <div className="page-wrapper overflow-hidden">
        <Header />
        <main>
          <section className="section about-hero">
            <div className="container-default about-hero w-container">
              <div className="about-hero-content">
                <h1
                  data-w-id="b42fd7e7-e95e-50da-a4d5-49b29a7ab5b0"
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
                  className="display-1 about-hero"
                >
                  <strong>Empowering Ownership</strong>{" "}
                  <span className="text-color-accent">
                    <strong>with AI-Driven Valuations</strong>
                  </span>
                </h1>
                <p
                  data-w-id="3f802938-f81c-851d-0426-a4ce47b5c6bd"
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
                  className="paragraph-large about-hero"
                >
                  Leveraging advanced AI technology, we provide accurate,
                  real-time valuations of used items, beginning with a focus on
                  automobiles.
                </p>
              </div>
              <div className="w-layout-grid about-hero-achievements-grid">
                <div
                  data-w-id="150fd7d4-f94d-a8c9-c55b-9f45a17a3040"
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
                  className="card about-hero-achievement"
                >
                  <div className="card-about-hero-achievement-wrapper">
                    <div className="number-big card-about-hero-achievement">
                      250M<span className="accent-primary-2">+</span>
                    </div>
                    <div className="card-about-hero-achievement-text">
                      Traded monthly
                    </div>
                  </div>
                </div>
                <div
                  data-w-id="40bc82d6-0258-2321-36e1-f70d194a7e1e"
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
                  className="card about-hero-achievement"
                >
                  <div className="card-about-hero-achievement-wrapper">
                    <div className="number-big card-about-hero-achievement">
                      300K<span className="accent-secondary-1">+</span>
                    </div>
                    <div className="card-about-hero-achievement-text">
                      Active users
                    </div>
                  </div>
                </div>
                <div
                  data-w-id="c3d23ee5-6324-8041-6f18-f0ba728d9ad2"
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
                  className="card about-hero-achievement"
                >
                  <div className="card-about-hero-achievement-wrapper">
                    <div className="number-big card-about-hero-achievement">
                      10M<span className="accent-secondary-2">+</span>
                    </div>
                    <div className="card-about-hero-achievement-text">
                      Saved in commissions
                    </div>
                  </div>
                </div>
                <div
                  data-w-id="d6144c25-d7ad-cefe-cc66-014ae5b0d349"
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
                  className="card about-hero-achievement"
                >
                  <div className="card-about-hero-achievement-wrapper">
                    <div className="number-big card-about-hero-achievement">
                      75M<span className="accent-secondary-3">+</span>
                    </div>
                    <div className="card-about-hero-achievement-text">
                      Capital in funding
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-blur-wrapper big about-hero">
                <div className="bg-gradient-blur-circle-3 pink big" />
                <div className="bg-gradient-blur-circle-2 blue-2" />
                <div className="bg-gradient-blur-circle-1 purple-2 big" />
              </div>
            </div>
          </section>
          <section className="section story">
            <div className="container-default w-container">
              <div className="story-wrapper">
                <div className="split-content story-left">
                  <div className="story-left-content">
                    <h2 className="title story">The story behind us</h2>
                    <p className="paragraph story">
                      At Worthify, we are revolutionizing the way individuals
                      understand and value their possessions. In a world where
                      the worth of used items is often shrouded in ambiguity,
                      our mission is to bring clarity and confidence to our
                      users. Leveraging advanced AI technology, we provide
                      accurate, real-time valuations of used items, beginning
                      with a focus on automobiles.
                    </p>
                  </div>
                  <div
                    data-w-id="e9a508b3-0840-afef-5088-7a8813803360"
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
                    className="image-wrapper story-left"
                  >
                    <img
                      src="images/favicon.jpg"
                      loading="eager"
                      sizes="(max-width: 479px) 90vw, (max-width: 991px) 94vw, (max-width: 1919px) 43vw, 539.1000366210938px"
                      srcSet="images/favicon-p-500.jpg 500w, images/favicon-p-800.jpg 800w, images/favicon-p-1080.jpg 1080w, images/favicon-p-1600.jpg 1600w, images/favicon-p-2000.jpg 2000w, images/favicon-p-2600.jpg 2600w, images/favicon.jpg 3000w"
                      alt=""
                      className="image story-left"
                    />
                  </div>
                  <div className="story-left-content _2">
                    <h2 className="title story">
                      <strong>User-Centric Approach</strong>
                    </h2>
                    <p className="paragraph story">
                      Worthify is designed with you in mind. Our platform is
                      intuitive, easy to use, and accessible to everyone. By
                      simplifying the valuation process, we aim to remove the
                      guesswork and provide our users with peace of mind.
                      Whether you are a car enthusiast, a potential buyer, or
                      seller, Worthify offers a seamless experience to discover
                      the true value of your vehicle.
                    </p>
                  </div>
                </div>
                <div className="split-content story-right">
                  <div
                    data-w-id="26cbbdce-3edc-357c-6e4a-645dddb7ee93"
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
                    className="image-wrapper story-right"
                  >
                    <img
                      src="images/image-2-home-hero-dark-template.svg"
                      loading="eager"
                      alt="Investor App - Dark X Webflow Template"
                      className="image story-right"
                    />
                  </div>
                  <div className="story-right-content">
                    <h2 className="title story">
                      <strong>Innovation at the Core</strong>
                    </h2>
                    <p className="paragraph story">
                      Founded on the principle that technology can transform
                      traditional valuation methods, Worthify uses cutting-edge
                      artificial intelligence to analyze vast amounts of real
                      data. Our AI model is trained to assess the value of used
                      cars, considering factors such as brand, model, condition,
                      and market trends. This ensures that our users receive a
                      reliable estimate of their item's worth, empowering them
                      to make informed decisions whether they are buying,
                      selling, or simply exploring their options.
                    </p>
                  </div>
                  <div
                    data-w-id="332ec4a0-6585-ef5b-a8ed-32ba23cb3b2d"
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
                    className="image-wrapper story-right _2"
                  >
                    <img
                      src="images/image-2-home-perks-dark-template.jpg"
                      loading="eager"
                      sizes="(max-width: 479px) 90vw, (max-width: 991px) 94vw, (max-width: 1919px) 43vw, 539.1000366210938px"
                      srcSet="images/image-2-home-perks-dark-template-p-500.jpeg 500w, images/image-2-home-perks-dark-template-p-800.jpeg 800w, images/image-2-home-perks-dark-template-p-1080.jpeg 1080w, images/image-2-home-perks-dark-template.jpg 1224w"
                      alt="Real Time Trading - Dark X Webflow Template"
                      className="image story-right"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section about-team">
            <div
              data-w-id="c5a80f02-586b-90a7-c98f-129815074338"
              style={{ opacity: 0 }}
              className="container-small-578px about-team"
            >
              <h2 className="title about-team">The Team</h2>
              <p className="paragraph about-team">
                Mattis nunc sed blandit libero volutpat sed cras ornare arcu a
                diam sollicitudin tempor id eu{" "}
                <span className="text-no-wrap">mattis vulputate</span>
              </p>
            </div>
            <div className="container-default w-container">
              <div
                data-w-id="99b53aaf-fd7b-807f-d2e5-4cfde949c621"
                style={{ opacity: 0 }}
                className="w-dyn-list"
              >
                <div role="list" className="team-grid w-dyn-items">
                  <div role="listitem" className="team-item w-dyn-item">
                    <a
                      href="https://www.linkedin.com/in/anastasios-melidonis/"
                      className="team-item-wrapper w-inline-block"
                      target="_blank"
                    >
                      <div className="team-item-content-top">
                        <div className="image-wrapper team-item">
                          <img
                            src=""
                            loading="eager"
                            alt=""
                            className="image team-item"
                          />
                        </div>
                        <div className="team-item-job-tag-gradient">
                          <text className="team-item-job-tag">Member</text>
                        </div>
                      </div>
                      <div className="team-item-content">
                        <h3 className="title team-item">
                          Anastasios Melidonis
                        </h3>
                        <p className="paragraph team-item">
                          Software Developer
                        </p>
                      </div>
                    </a>
                  </div>
                  <div role="listitem" className="team-item w-dyn-item">
                    <a
                      href="https://www.linkedin.com/in/dimitris-makaronis-4aa147266/"
                      className="team-item-wrapper w-inline-block"
                      target="_blank"
                    >
                      <div className="team-item-content-top">
                        <div className="image-wrapper team-item">
                          <img
                            src=""
                            loading="eager"
                            alt=""
                            className="image team-item"
                          />
                        </div>
                        <div className="team-item-job-tag-gradient">
                          <text className="team-item-job-tag">Member</text>
                        </div>
                      </div>
                      <div className="team-item-content">
                        <h3 className="title team-item">Dimitrios Makaronis</h3>
                        <p className="paragraph team-item">Data Scientist</p>
                      </div>
                    </a>
                  </div>
                  <div role="listitem" className="team-item w-dyn-item">
                    <a
                      href="https://www.linkedin.com/in/dimitrios-foteinos-9008941b8/"
                      className="team-item-wrapper w-inline-block"
                      target="_blank"
                    >
                      <div className="team-item-content-top">
                        <div className="image-wrapper team-item">
                          <img
                            src=""
                            loading="eager"
                            alt=""
                            className="image team-item"
                          />
                        </div>
                        <div className="team-item-job-tag-gradient">
                          <text className="team-item-job-tag">Member</text>
                        </div>
                      </div>
                      <div className="team-item-content">
                        <h3 className="title team-item">Dimitrios Foteinos</h3>
                        <p className="paragraph team-item">Data Scientist</p>
                      </div>
                    </a>
                  </div>
                  <div role="listitem" className="team-item w-dyn-item">
                    <a
                      href="https://www.linkedin.com/in/nikolaos-mavrapidis/"
                      className="team-item-wrapper w-inline-block"
                      target="_blank"
                    >
                      <div className="team-item-content-top">
                        <div className="image-wrapper team-item">
                          <img
                            src=""
                            loading="eager"
                            alt=""
                            className="image team-item"
                          />
                        </div>
                        <div className="team-item-job-tag-gradient">
                          <text className="team-item-job-tag">Member</text>
                        </div>
                      </div>
                      <div className="team-item-content">
                        <h3 className="title team-item">Nikolaos Mavrapidis</h3>
                        <p className="paragraph team-item">
                          Frontend Developer
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default WorthifyAboutPage;
