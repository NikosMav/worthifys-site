import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const WorthifyHome = () => {
  return (
    <div className="bg-neutral-800">
      <div style={{ opacity: 0 }} className="page-wrapper">
        <Header />
        {/* <div
          data-collapse="medium"
          data-animation="over-left"
          data-duration={400}
          data-w-id="8640b442-83a4-d9ad-83e5-220522c67ed5"
          data-easing="ease"
          data-easing2="ease"
          role="banner"
          className="header-2 w-nav"
        >
          <div className="container-default w-container">
            <div className="header-wrapper">
              <div className="split-content header-right">
                <a
                  href="/"
                  aria-current="page"
                  className="brand w-nav-brand w--current"
                >
                  <img
                    src="/images/horizontal-logo.png"
                    sizes="(max-width: 479px) 130px, 200px"
                    srcSet="/images/horizontal-logo-p-500.png 500w, /images/horizontal-logo-p-800.png 800w, /images/horizontal-logo-p-1080.png 1080w, /images/horizontal-logo-p-1600.png 1600w, /images/horizontal-logo-p-2000.png 2000w, /images/horizontal-logo-p-2600.png 2600w, /images/horizontal-logo.png 3000w"
                    alt="Logo"
                    className="header-logo"
                  />
                </a>
              </div>
              <div className="split-content header-center">
                <nav role="navigation" className="nav-menu w-nav-menu">
                  <ul role="list" className="header-navigation w-list-unstyled">
                    <li className="nav-item-wrapper">
                      <a
                        href="/"
                        aria-current="page"
                        className="nav-link w--current"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item-wrapper">
                      <a href="#" className="nav-link">
                        About
                      </a>
                    </li>
                    <li className="nav-item-wrapper">
                      <a href="#" className="nav-link">
                        Team
                      </a>
                    </li>
                    <li className="nav-item-wrapper">
                      <div
                        data-hover="true"
                        data-delay={0}
                        data-w-id="8640b442-83a4-d9ad-83e5-220522c67ee8"
                        className="nav-link-dropdown w-dropdown"
                      >
                        <div className="nav-link dropdown w-dropdown-toggle">
                          <div>
                            Pages&nbsp;&nbsp;
                            <span className="dropdown-arrow"></span>
                          </div>
                        </div>
                        <nav className="dropdown-list w-dropdown-list">
                          <div className="dropdown-nav-main-wrapper">
                            <div className="dropdown-nav-pages-wrapper">
                              <div className="title dropdown">Menu</div>
                              <div className="dropdown-nav-content">
                                <ul role="list" className="dropdown-nav">
                                  <li className="dropdown-nav-item">
                                    <a
                                      href="old-home.html"
                                      className="dropdown-nav-link"
                                    >
                                      Sales Home
                                    </a>
                                  </li>
                                  <li className="dropdown-nav-item">
                                    <a
                                      href="home-page.html"
                                      className="dropdown-nav-link"
                                    >
                                      Primary Home
                                    </a>
                                  </li>
                                  <li className="dropdown-nav-item">
                                    <a
                                      href="about.html"
                                      className="dropdown-nav-link"
                                    >
                                      About
                                    </a>
                                  </li>
                                  <li className="dropdown-nav-item">
                                    <a
                                      href="form-page.html"
                                      className="dropdown-nav-link"
                                    >
                                      Contact
                                    </a>
                                  </li>
                                  <li className="dropdown-nav-item">
                                    <a
                                      href="blog.html"
                                      className="dropdown-nav-link"
                                    >
                                      Blog
                                    </a>
                                  </li>
                                  <li className="dropdown-nav-item">
                                    <a
                                      href="https://darktemplate.webflow.io/blog/7-best-online-brokers-for-stocks-cryptos"
                                      className="dropdown-nav-link tag w-inline-block"
                                    >
                                      <div className="footer-nav-link-tag-text">
                                        Blog Post
                                      </div>
                                      <div className="nav-link-tag-wrapper">
                                        <div className="nav-link-tag">CMS</div>
                                        <div className="nav-link-tag-blur" />
                                      </div>
                                    </a>
                                  </li>
                                  <li className="dropdown-nav-item">
                                    <a
                                      href="pricing.html"
                                      className="dropdown-nav-link"
                                    >
                                      Pricing
                                    </a>
                                  </li>
                                  <li className="dropdown-nav-item">
                                    <a
                                      href="https://darktemplate.webflow.io/product/advanced"
                                      className="dropdown-nav-link tag w-inline-block"
                                    >
                                      <div className="footer-nav-link-tag-text">
                                        Pricing Single
                                      </div>
                                      <div className="nav-link-tag-wrapper">
                                        <div className="nav-link-tag">CMS</div>
                                        <div className="nav-link-tag-blur" />
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                                <ul role="list" className="dropdown-nav last">
                                  <li className="dropdown-nav-item">
                                    <a
                                      href="integrations.html"
                                      className="dropdown-nav-link"
                                    >
                                      Integrations
                                    </a>
                                  </li>
                                  <li className="dropdown-nav-item">
                                    <a
                                      href="https://darktemplate.webflow.io/integrations/facebook"
                                      className="dropdown-nav-link tag w-inline-block"
                                    >
                                      <div className="footer-nav-link-tag-text">
                                        Integration Single
                                      </div>
                                      <div className="nav-link-tag-wrapper">
                                        <div className="nav-link-tag">CMS</div>
                                        <div className="nav-link-tag-blur" />
                                      </div>
                                    </a>
                                  </li>
                                  <li className="dropdown-nav-item">
                                    <a
                                      href="careers.html"
                                      className="dropdown-nav-link"
                                    >
                                      Careers
                                    </a>
                                  </li>
                                  <li className="dropdown-nav-item">
                                    <a
                                      href="https://darktemplate.webflow.io/career/ui-ux-design-lead"
                                      className="dropdown-nav-link tag w-inline-block"
                                    >
                                      <div className="footer-nav-link-tag-text">
                                        Careers Single
                                      </div>
                                      <div className="nav-link-tag-wrapper">
                                        <div className="nav-link-tag">CMS</div>
                                        <div className="nav-link-tag-blur" />
                                      </div>
                                    </a>
                                  </li>
                                  <li className="dropdown-nav-item">
                                    <a
                                      href="features.html"
                                      className="dropdown-nav-link"
                                    >
                                      Features
                                    </a>
                                  </li>
                                  <li className="dropdown-nav-item">
                                    <a
                                      href="team.html"
                                      className="dropdown-nav-link"
                                    >
                                      Team
                                    </a>
                                  </li>
                                  <li className="dropdown-nav-item">
                                    <a
                                      href="https://darktemplate.webflow.io/team/john-carter"
                                      className="dropdown-nav-link tag w-inline-block"
                                    >
                                      <div className="footer-nav-link-tag-text">
                                        Team Single
                                      </div>
                                      <div className="nav-link-tag-wrapper">
                                        <div className="nav-link-tag">CMS</div>
                                        <div className="nav-link-tag-blur" />
                                      </div>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="dropdown-nav-pages-wrapper last">
                              <div className="title dropdown">
                                Utility pages
                              </div>
                              <div className="dropdown-nav-content">
                                <ul role="list" className="dropdown-nav last">
                                  <li className="dropdown-nav-item">
                                    <a
                                      href="utility-pages/start-here.html"
                                      className="dropdown-nav-link"
                                    >
                                      Start Here
                                    </a>
                                  </li>
                                  <li className="dropdown-nav-item">
                                    <a
                                      href="utility-pages/style-guide.html"
                                      className="dropdown-nav-link"
                                    >
                                      Style Guide
                                    </a>
                                  </li>
                                  <li className="dropdown-nav-item">
                                    <a
                                      href="https://darktemplate.webflow.io/401"
                                      className="dropdown-nav-link"
                                    >
                                      Password Protected
                                    </a>
                                  </li>
                                  <li className="dropdown-nav-item">
                                    <a
                                      href="https://darktemplate.webflow.io/404"
                                      className="dropdown-nav-link"
                                    >
                                      404 Not Found
                                    </a>
                                  </li>
                                  <li className="dropdown-nav-item">
                                    <a
                                      href="utility-pages/licenses.html"
                                      className="dropdown-nav-link"
                                    >
                                      Licenses
                                    </a>
                                  </li>
                                  <li className="dropdown-nav-item">
                                    <a
                                      href="utility-pages/changelog.html"
                                      className="dropdown-nav-link"
                                    >
                                      Changelog
                                    </a>
                                  </li>
                                  <li className="dropdown-nav-item">
                                    <a
                                      href="https://brixtemplates.com/more-webflow-templates"
                                      className="dropdown-nav-link special"
                                    >
                                      Browse More Templates
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </nav>
                      </div>
                    </li>
                    <li className="nav-item-wrapper mobile-button">
                      <div className="button-primary-gradient header-button mobile-button">
                        <a
                          href="form-page.html"
                          className="button-primary small-v2 mobile-button w-button"
                        >
                          Get started
                        </a>
                      </div>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="split-content header-left">
                <div className="button-primary-gradient header-button">
                  <a
                    href="form-page.html"
                    className="button-primary small-v2 w-button"
                  >
                    Fill out form
                  </a>
                </div>
                <div className="menu-button w-nav-button">
                  <div className="header-menu-button-icon-wrapper">
                    <div className="icon-wrapper">
                      <div className="header-menu-button-icon-top" />
                      <div className="header-menu-button-icon-medium" />
                      <div className="header-menu-button-icon-bottom" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
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
                data-w-id="58ed6e0c-7961-e5e6-bc1d-6ae6c94a1d95"
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
                className="card"
              >
                <div className="w-form">
                  <form
                    id="email-form"
                    name="email-form"
                    data-name="Email Form"
                    method="get"
                    data-wf-page-id="65a4292a06a5231e6e3e76a1"
                    data-wf-element-id="d5a43df2-b20a-9ebc-4c22-0c4cd3b60235"
                  >
                    <label htmlFor="name">Name</label>
                    <input
                      className="w-input"
                      maxLength={256}
                      name="name"
                      data-name="Name"
                      placeholder=""
                      type="text"
                      id="name"
                    />
                    <label htmlFor="email">Email Address</label>
                    <input
                      className="w-input"
                      maxLength={256}
                      name="email-2"
                      data-name="Email 2"
                      placeholder=""
                      type="email"
                      id="email-2"
                      required=""
                    />
                    <input
                      type="submit"
                      data-wait="Please wait..."
                      className="w-button"
                      defaultValue="Submit"
                    />
                  </form>
                  <div className="w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div className="w-form-fail">
                    <div>
                      Oops! Something went wrong while submitting the form.
                    </div>
                  </div>
                </div>
                <div className="button-primary-gradient _2-buttons">
                  <a href="pricing.html" className="button-primary w-button">
                    Fill out form
                  </a>
                </div>
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
          <section className="section home-features">
            <div
              data-w-id="58ed6e0c-7961-e5e6-bc1d-6ae6c94a1daf"
              style={{ opacity: 0 }}
              className="container-medium-756px home-features"
            >
              <h2>
                Packed with cutting-
                <span className="text-no-wrap">edge features</span>
              </h2>
              <p className="paragraph home-features">
                Lorem ipsum dolor sit amet consectetur adipiscing elit blandit
                id dolor venenatis auctor maecenas egestas arcu{" "}
                <span className="text-no-wrap">ut consectetur.</span>
              </p>
            </div>
            <div className="container-default home-features w-container">
              <div
                data-w-id="58ed6e0c-7961-e5e6-bc1d-6ae6c94a1db9"
                style={{ opacity: 0 }}
                className="w-layout-grid home-features-grid"
              >
                <div className="card home-feature">
                  <img
                    src="/images/icon-1-features-dark-template.svg"
                    loading="eager"
                    alt="Real Time Trading - Dark X Webflow Template"
                    className="image card-home-feature"
                  />
                  <div className="card-home-feature-content">
                    <h3 className="title card-home-feature">
                      Real-time trading
                    </h3>
                    <p className="paragraph card-home-feature">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit{" "}
                      <span className="text-no-wrap">blandit id</span>
                    </p>
                  </div>
                </div>
                <div className="card home-feature">
                  <img
                    src="/images/icon-2-features-dark-template.svg"
                    loading="eager"
                    alt="Advanced Charts - Dark X Webflow Template"
                    className="image card-home-feature"
                  />
                  <div className="card-home-feature-content">
                    <h3 className="title card-home-feature">Advanced charts</h3>
                    <p className="paragraph card-home-feature">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit{" "}
                      <span className="text-no-wrap">blandit id</span>
                    </p>
                  </div>
                </div>
                <div className="card home-feature">
                  <img
                    src="/images/icon-3-features-dark-template.svg"
                    loading="eager"
                    alt="Security - Dark X Webflow Template"
                    className="image card-home-feature"
                  />
                  <div className="card-home-feature-content">
                    <h3 className="title card-home-feature">
                      Enterprise grade security
                    </h3>
                    <p className="paragraph card-home-feature">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit{" "}
                      <span className="text-no-wrap">blandit id</span>
                    </p>
                  </div>
                </div>
                <div className="card home-feature">
                  <img
                    src="/images/icon-4-features-dark-template.svg"
                    loading="eager"
                    alt="Stocks - Dark X Webflow Template"
                    className="image card-home-feature"
                  />
                  <div className="card-home-feature-content">
                    <h3 className="title card-home-feature">ETFs and stocks</h3>
                    <p className="paragraph card-home-feature">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit{" "}
                      <span className="text-no-wrap">blandit id</span>
                    </p>
                  </div>
                </div>
                <div className="card home-feature">
                  <img
                    src="/images/icon-5-features-dark-template.svg"
                    loading="eager"
                    alt="Currencies - Dark X Webflow Template"
                    className="image card-home-feature"
                  />
                  <div className="card-home-feature-content">
                    <h3 className="title card-home-feature">
                      Currencies &amp; commodities
                    </h3>
                    <p className="paragraph card-home-feature">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit{" "}
                      <span className="text-no-wrap">blandit id</span>
                    </p>
                  </div>
                </div>
                <div className="card home-feature">
                  <img
                    src="/images/icon-6-features-dark-template.svg"
                    loading="eager"
                    alt="Cryptocurrencies - Dark X Webflow Template"
                    className="image card-home-feature"
                  />
                  <div className="card-home-feature-content">
                    <h3 className="title card-home-feature">
                      Cryptocurrencies
                    </h3>
                    <p className="paragraph card-home-feature">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit{" "}
                      <span className="text-no-wrap">blandit id</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-vc home-features">
                <div className="_2-buttons-wrapper">
                  <div className="button-primary-gradient _2-buttons">
                    <a href="pricing.html" className="button-primary w-button">
                      Get started
                    </a>
                  </div>
                  <a
                    href="features.html"
                    className="button-secondary _2-buttons w-button"
                  >
                    Browse features
                  </a>
                </div>
              </div>
              <div className="bg-gradient-blur-wrapper big">
                <div className="bg-gradient-blur-circle-3 pink big" />
                <div className="bg-gradient-blur-circle-2 blue-2" />
                <div className="bg-gradient-blur-circle-1 purple-2 big" />
              </div>
            </div>
          </section>
          <section className="section home-perks">
            <div className="container-default w-container">
              <div className="home-perks-wrapper">
                <div className="home-perks-content-top-wrapper">
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
                          src="/images/icon-1-home-perks-dark-template.svg"
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
                          src="/images/icon-2-home-perks-dark-template.svg"
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
                      src="/images/image-2-home-perks-dark-template.jpg"
                      loading="eager"
                      sizes="100vw"
                      srcSet="/images/image-2-home-perks-dark-template-p-500.jpeg 500w, /images/image-2-home-perks-dark-template-p-800.jpeg 800w, /images/image-2-home-perks-dark-template-p-1080.jpeg 1080w, /images/image-2-home-perks-dark-template.jpg 1224w"
                      alt="Real Time Trading - Dark X Webflow Template"
                      className="image home-perks-content-top-image"
                    />
                  </div>
                </div>
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
                      src="/images/image-1-home-perks-dark-template.jpg"
                      loading="eager"
                      sizes="100vw"
                      srcSet="/images/image-1-home-perks-dark-template-p-500.jpeg 500w, /images/image-1-home-perks-dark-template-p-800.jpeg 800w, /images/image-1-home-perks-dark-template-p-1080.jpeg 1080w, /images/image-1-home-perks-dark-template.jpg 1224w"
                      alt="Security - Dark X Webflow Template"
                      className="image home-perks-content-bottom-image"
                    />
                  </div>
                  <div className="home-perks-content-bottom-content">
                    <h2 className="title home-perks">
                      Built-in enterprise encryption and security
                    </h2>
                    <p className="paragraph home-perks">
                      Lorem ipsum dolor sit amet consectetur adipiscing eli non
                      amet arcu auctor orci vitae diam arcu{" "}
                      <span className="text-no-wrap">tellus proin.</span>
                    </p>
                    <div className="w-layout-grid home-perks-grid">
                      <div className="home-perk-wrapper">
                        <img
                          src="/images/icon-3-home-perks-dark-template.svg"
                          loading="eager"
                          alt="Encryption - Dark X Webflow Template"
                          className="image home-perk"
                        />
                        <div className="home-perk-content">
                          <h3 className="title h4-size home-perk">
                            256-bit AES encryption
                          </h3>
                          <p className="paragraph home-perk">
                            Lorem ipsum dolor sit amet consectetur adipisc eli
                            non amet arcu auctor orci vita tellus.
                          </p>
                        </div>
                      </div>
                      <div className="home-perk-wrapper">
                        <img
                          src="/images/icon-4-home-perks-dark-template.svg"
                          loading="eager"
                          alt="Security - Dark X Webflow Template"
                          className="image home-perk"
                        />
                        <div className="home-perk-content">
                          <h3 className="title h4-size home-perk">
                            Advanced security standards
                          </h3>
                          <p className="paragraph home-perk">
                            Lorem ipsum dolor sit amet consectetur adipisc eli
                            non amet arcu auctor orci vita tellus.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section cta">
            <div className="container-default w-container">
              <div className="cta-card-wrapper">
                <div
                  data-w-id="8848cb72-b24b-fd5b-4a1b-312ad063e45c"
                  className="card cta"
                >
                  <h2 className="title card-cta">
                    Create your account and start trading today
                  </h2>
                  <div className="_2-buttons-wrapper">
                    <a
                      href="pricing.html"
                      className="button-primary button-white _2-buttons w-button"
                    >
                      Get started
                    </a>
                    <a
                      href="pricing.html"
                      className="button-secondary button-white-outline _2-buttons w-button"
                    >
                      View pricing
                    </a>
                  </div>
                </div>
                <div
                  data-w-id="8848cb72-b24b-fd5b-4a1b-312ad063e464"
                  className="cta-gradient-blur"
                />
              </div>
            </div>
          </section>
          <section className="section home-steps">
            <div className="container-default w-container">
              <div className="home-steps-wrapper">
                <div className="split-content home-steps-left">
                  <h2>How to get started</h2>
                  <p className="paragraph home-steps">
                    Eget mi proin sed libero enim sed faucibus viverrate
                    maecenas accumsan lacus vel facilisis volutpat viverra
                    maecenas <span className="text-no-wrap">accumsan it.</span>
                  </p>
                  <div className="button-primary-gradient">
                    <a href="pricing.html" className="button-primary w-button">
                      Get started
                    </a>
                  </div>
                </div>
                <div className="split-content home-steps-right">
                  <div className="w-layout-grid home-steps-grid">
                    <div
                      data-w-id="58ed6e0c-7961-e5e6-bc1d-6ae6c94a1e41"
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
                      className="card home-step"
                    >
                      <div className="card-home-step-content">
                        <div className="title h3-size card-home-step-number">
                          1
                        </div>
                        <h3 className="title card-home-step">
                          Create your account
                        </h3>
                        <p className="paragraph card-home-step">
                          Lorem ipsum dolor sit amet, consec adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et{" "}
                          <span className="text-no-wrap">dolore elit.</span>
                        </p>
                      </div>
                      <div className="image-wrapper card-home-step">
                        <img
                          src="/images/image-1-home-steps-dark-template.jpg"
                          loading="eager"
                          sizes="100vw"
                          srcSet="/images/image-1-home-steps-dark-template-p-500.jpeg 500w, /images/image-1-home-steps-dark-template.jpg 646w"
                          alt="Create Account - Dark X Webflow Template"
                          className="image card-home-step"
                        />
                      </div>
                    </div>
                    <div
                      data-w-id="58ed6e0c-7961-e5e6-bc1d-6ae6c94a1e4d"
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
                      className="card home-step"
                    >
                      <div className="card-home-step-content">
                        <div className="title h3-size card-home-step-number">
                          2
                        </div>
                        <h3 className="title card-home-step">
                          Customize your profile
                        </h3>
                        <p className="paragraph card-home-step">
                          Lorem ipsum dolor sit amet, consec adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et{" "}
                          <span className="text-no-wrap">dolore elit.</span>
                        </p>
                      </div>
                      <div className="image-wrapper card-home-step">
                        <img
                          src="/images/image-2-home-steps-dark-template.jpg"
                          loading="eager"
                          sizes="100vw"
                          srcSet="/images/image-2-home-steps-dark-template-p-500.jpeg 500w, /images/image-2-home-steps-dark-template.jpg 646w"
                          alt="Customize Your Profile - Dark X Webflow Template"
                          className="image card-home-step"
                        />
                      </div>
                    </div>
                    <div
                      data-w-id="58ed6e0c-7961-e5e6-bc1d-6ae6c94a1e59"
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
                      className="card home-step"
                    >
                      <div className="card-home-step-content">
                        <div className="title h3-size card-home-step-number">
                          3
                        </div>
                        <h3 className="title card-home-step">
                          Start earning money
                        </h3>
                        <p className="paragraph card-home-step">
                          Lorem ipsum dolor sit amet, consec adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et{" "}
                          <span className="text-no-wrap">dolore elit.</span>
                        </p>
                      </div>
                      <div className="image-wrapper card-home-step">
                        <img
                          src="/images/image-3-home-steps-dark-template.jpg"
                          loading="eager"
                          alt="Start Earning Money - Dark X Webflow Template"
                          className="image card-home-step"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-blur-wrapper home-steps">
                    <div className="bg-gradient-blur-circle-3 pink" />
                    <div className="bg-gradient-blur-circle-2 blue" />
                    <div className="bg-gradient-blur-circle-1 purple" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section testimonials">
            <div
              data-w-id="58ed6e0c-7961-e5e6-bc1d-6ae6c94a1e6a"
              style={{ opacity: 0 }}
              className="container-medium-603px testimonials"
            >
              <h2>
                What our <span className="text-no-wrap">clients say</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit blandit
                id dolor venenatis auctor maecenas egestas arcu{" "}
                <span className="text-no-wrap">ut consectetur.</span>
              </p>
            </div>
            <div className="container-default testimonials w-container">
              <div
                data-delay={4000}
                data-animation="outin"
                className="testimonials-slider w-slider"
                data-autoplay="false"
                data-easing="ease"
                style={{ opacity: 0 }}
                data-hide-arrows="false"
                data-disable-swipe="false"
                data-w-id="58ed6e0c-7961-e5e6-bc1d-6ae6c94a1e74"
                data-autoplay-limit={0}
                data-nav-spacing={3}
                data-duration={500}
                data-infinite="true"
              >
                <div className="card testimonial w-slider-mask">
                  <div className="testimonial-slide w-slide">
                    <div className="card-testimonial-wrapper">
                      <div className="card-testimonial-content">
                        <h3 className="title card-testimonial">
                          “A truly next-gen{" "}
                          <span className="text-no-wrap">trading app”</span>
                        </h3>
                        <p className="paragraph card-testimonial">
                          Lorem ipsum dolor sit amet consectetur adipiscing
                          platea amet risus tincidunt erat lacus eu id nisl
                          commo sit purus integer purus quis amet fames{" "}
                          <span className="text-no-wrap">egestas inter.</span>
                        </p>
                        <div className="card-testimonial-content-bottom">
                          <div className="card-testimonial-about">
                            <div className="card-testimonial-name">
                              Matt Cannon
                            </div>
                            <div className="card-testimonial-rol">
                              VP of Marketing at Facebook
                            </div>
                          </div>
                          <img
                            src="/images/institute-logo-testimonial-dark-x-webflow-template.svg"
                            loading="eager"
                            alt="Institute Logo - Dark X Webflow Template"
                            className="image card-testimonial-logo"
                          />
                        </div>
                      </div>
                      <div className="image-wrapper card-testimonial">
                        <img
                          src="/images/image-1-testimonial-dark-template.jpg"
                          loading="eager"
                          alt="Testimonial - Dark X Webflow Template"
                          className="image card-testimonial"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-slide w-slide">
                    <div className="card-testimonial-wrapper">
                      <div className="card-testimonial-content">
                        <h3 className="title card-testimonial">
                          “The best app for trading
                          <span className="text-no-wrap">”</span>
                        </h3>
                        <p className="paragraph card-testimonial">
                          Lorem ipsum dolor sit amet consectetur adipiscing
                          platea amet risus tincidunt erat lacus eu id nisl
                          commo sit purus integer purus quis amet fames{" "}
                          <span className="text-no-wrap">egestas inter.</span>
                        </p>
                        <div className="card-testimonial-content-bottom">
                          <div className="card-testimonial-about">
                            <div className="card-testimonial-name">
                              Matt Cannon
                            </div>
                            <div className="card-testimonial-rol">
                              VP of Marketing at Facebook
                            </div>
                          </div>
                          <img
                            src="/images/agency-logo-testimonial-dark-x-webflow-template.svg"
                            loading="eager"
                            alt="Agency Logo - Dark X Webflow Template"
                            className="image card-testimonial-logo"
                          />
                        </div>
                      </div>
                      <div className="image-wrapper card-testimonial">
                        <img
                          src="/images/image-2-testimonial-dark-template.jpg"
                          loading="eager"
                          alt="Testimonial - Dark X Webflow Template"
                          className="image card-testimonial"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="testimonials-left-arrow w-slider-arrow-left">
                  <div></div>
                </div>
                <div className="testimonials-right-arrow w-slider-arrow-right">
                  <div></div>
                </div>
                <div className="slide-nav w-slider-nav w-round" />
              </div>
              <div className="bg-gradient-blur-wrapper big">
                <div className="bg-gradient-blur-circle-3 pink big" />
                <div className="bg-gradient-blur-circle-2 blue-2" />
                <div className="bg-gradient-blur-circle-1 purple-2 big" />
              </div>
            </div>
          </section>
          <section className="section home-blog">
            <div className="container-default w-container">
              <div
                data-w-id="58ed6e0c-7961-e5e6-bc1d-6ae6c94a1eab"
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
                className="content-top home-blog"
              >
                <div className="split-content home-blog-left">
                  <h2 className="title home-blog">Latest articles</h2>
                </div>
                <div className="split-content home-blog-right">
                  <a href="blog.html" className="button-secondary w-button">
                    Browse all articles
                  </a>
                </div>
              </div>
              <div
                data-w-id="58ed6e0c-7961-e5e6-bc1d-6ae6c94a1eb2"
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
                    <a href="#" className="card post-item w-inline-block">
                      <div className="image-wrapper card-post-item">
                        <img
                          src=""
                          loading="eager"
                          alt=""
                          className="image card-post-item"
                        />
                        <div className="card-post-item-category-wrapper">
                          <img
                            src=""
                            loading="eager"
                            alt=""
                            className="image card-post-item-category-icon"
                          />
                          <div className="card-post-item-category-text" />
                        </div>
                      </div>
                      <div className="card-post-item-content">
                        <h3 className="title card-post-item" />
                        <div className="card-post-item-about-wrapper">
                          <div className="card-post-item-about-content">
                            <img
                              src="/images/icon-1-post-about-dark-template.svg"
                              loading="eager"
                              alt="Calendar Icon - Dark X Webflow Template"
                              className="image card-post-item-about-icon"
                            />
                            <div />
                          </div>
                          <div className="card-post-item-about-content">
                            <img
                              src="/images/icon-2-post-about-dark-template.svg"
                              loading="eager"
                              alt="Clock Icon - Dark X Webflow Template"
                              className="image card-post-item-about-icon"
                            />
                            <div />
                            <div>&nbsp;min read</div>
                          </div>
                        </div>
                        <div className="link-underline-main-wrapper">
                          <div className="link-underline-text-wrapper">
                            <div>Read more</div>
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
                <div className="empty-state w-dyn-empty">
                  <div>No items found.</div>
                </div>
                <div
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
                </div>
              </div>
            </div>
          </section>
        </main>
        {/* <footer className="footer v3">
          <div className="container-default w-container">
            <div
              data-w-id="4b90563c-00e2-b45e-2009-84b98ef810d9"
              className="footer-content v3"
            >
              <div className="footer-v3-col-left">
                <div className="footer-small-print">
                  Copyright © Worthify | Designed by{" "}
                  <a href="https://brixtemplates.com/" target="_blank">
                    Worthify Team
                  </a>
                </div>
              </div>
              <div className="footer-v3-col-middle">
                <a
                  href="/"
                  aria-current="page"
                  className="footer-logo-container v3 w-inline-block w--current"
                >
                  <img
                    src="/images/horizontal-logo.png"
                    sizes="(max-width: 767px) 125px, 150px"
                    srcSet="/images/horizontal-logo-p-500.png 500w, /images/horizontal-logo-p-800.png 800w, /images/horizontal-logo-p-1080.png 1080w, /images/horizontal-logo-p-1600.png 1600w, /images/horizontal-logo-p-2000.png 2000w, /images/horizontal-logo-p-2600.png 2600w, /images/horizontal-logo.png 3000w"
                    alt=""
                    className="footer-logo v3"
                  />
                </a>
              </div>
              <div className="footer-v3-col-right">
                <div className="social-media-wrapper v3">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    className="social-media-link mg-bottom-0"
                  >
                    
                  </a>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    className="social-media-link icon-size-13px mg-bottom-0"
                  >
                    
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    className="social-media-link icon-size-15px mg-bottom-0"
                  >
                    
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    className="social-media-link icon-size-13px mg-bottom-0"
                  >
                    
                  </a>
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    className="social-media-link icon-size-13px mg-bottom-0"
                  >
                    
                  </a>
                  <a
                    href="https://www.whatsapp.com/"
                    target="_blank"
                    className="social-media-link last"
                  >
                    
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer> */}
        <Footer />
      </div>
    </div>
  );
};

export default WorthifyHome;
