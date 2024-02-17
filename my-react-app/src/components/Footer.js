import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer v3">
      <div className="container-default w-container">
        <div className="footer-content v3">
          <div className="footer-v3-col-left">
            <div className="footer-small-print">
              Copyright © Worthify | Designed by{" "}
              <a rel="noopener noreferrer">Worthify Team</a>
            </div>
          </div>
          <div className="footer-v3-col-middle">
            <Link
              to="/"
              onClick={() => window.scrollTo(0, 0)}
              className="footer-logo-container v3 w-inline-block"
            >
              <img
                src="/images/horizontal-logo.png"
                sizes="(max-width: 767px) 125px, 150px"
                srcSet="/images/horizontal-logo-p-500.png 500w, /images/horizontal-logo-p-800.png 800w, /images/horizontal-logo-p-1080.png 1080w, /images/horizontal-logo-p-1600.png 1600w, /images/horizontal-logo-p-2000.png 2000w, /images/horizontal-logo-p-2600.png 2600w, /images/horizontal-logo.png 3000w"
                alt="Worthify Logo"
                className="footer-logo v3"
              />
            </Link>
          </div>
          <div className="footer-v3-col-right">
            <div className="social-media-wrapper v3">
              <a className="social-media-link mg-bottom-0">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="social-media-link icon-size-13px mg-bottom-0">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="social-media-link icon-size-15px mg-bottom-0">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="social-media-link icon-size-13px mg-bottom-0">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="social-media-link icon-size-13px mg-bottom-0">
                <i className="fab fa-youtube"></i>
              </a>
              <a className="social-media-link last">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
