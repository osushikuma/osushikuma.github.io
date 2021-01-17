import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div>logo</div>
      <div>
        <p>Living the moment</p>
      </div>
      <div className="social-icons">
        <Link
          className="social-icon-link facebook"
          to="/"
          target="_blank"
          aria-label="Facebook"
        >
          <i className="fab fa-facebook-f" />
        </Link>
        <Link
          className="social-icon-link instagram"
          to="/"
          target="_blank"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram" />
        </Link>
        <Link
          className="social-icon-link youtube"
          to="/"
          target="_blank"
          aria-label="Youtube"
        >
          <i className="fab fa-youtube" />
        </Link>
        <Link
          className="social-icon-link twitter"
          to="/"
          target="_blank"
          aria-label="Twitter"
        >
          <i className="fab fa-twitter" />
        </Link>
        <Link
          className="social-icon-link twitter"
          to="/"
          target="_blank"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin" />
        </Link>
      </div>
      <div>Made by kirenariyu</div>
      <div>Made with create-react-app</div>
    </div>
  );
}

export default Footer;
