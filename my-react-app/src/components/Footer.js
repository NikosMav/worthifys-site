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
              <a
                href="https://brixtemplates.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Worthify Team
              </a>
            </div>
          </div>
          <div className="footer-v3-col-middle">
            <Link to="/" className="footer-logo-container v3 w-inline-block">
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
              {/* Update social media links with correct icons */}
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-media-link mg-bottom-0"
              >
                Facebook Icon
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-media-link icon-size-13px mg-bottom-0"
              >
                Twitter Icon
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-media-link icon-size-15px mg-bottom-0"
              >
                Instagram Icon
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-media-link icon-size-13px mg-bottom-0"
              >
                LinkedIn Icon
              </a>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-media-link icon-size-13px mg-bottom-0"
              >
                YouTube Icon
              </a>
              <a
                href="https://www.whatsapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-media-link last"
              >
                WhatsApp Icon
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
