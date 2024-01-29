import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div
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
              <Link
                to="/"
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
              </Link>
            </div>
            <div className="split-content header-center">
              <nav role="navigation" className="nav-menu w-nav-menu">
                <ul role="list" className="header-navigation w-list-unstyled">
                  <li className="nav-item-wrapper">
                    <Link to="/" className="nav-link w--current">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item-wrapper">
                    <Link to="/" className="nav-link">
                      Charts
                    </Link>
                  </li>
                  <li className="nav-item-wrapper">
                    <Link to="/" className="nav-link">
                      About
                    </Link>
                  </li>
                  <li className="nav-item-wrapper">
                    <Link to="/" className="nav-link">
                      Team
                    </Link>
                  </li>
                  {/* More internal navigation links */}
                </ul>
              </nav>
            </div>
            <div className="split-content header-left">
              <div className="button-primary-gradient header-button">
                <Link
                  to="/form-page"
                  className="button-primary small-v2 w-button"
                >
                  Fill out form
                </Link>
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
      </div>
    </header>
  );
};

export default Header;
