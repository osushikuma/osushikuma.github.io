import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-line">
        <img src="images/main_logo.png" alt="Main Logo" height="90px" />
      </div>
      <div className="footer-line">
        <p>Living the moment</p>
      </div>
      <div className="footer-line social-icons">
        <Link
          className="social-icon-link github"
          to="https://github.com/kirenariyu/"
          target="_blank"
          aria-label="GitHub"
        >
          <i className="fab fa-github" />
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
          className="social-icon-link linkedin"
          to="https://instagram.com/kirenariyu"
          target="_blank"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin" />
        </Link>
        <Link
          className="social-icon-link stack-overflow"
          to="https://stackoverflow.com/users/3618945/kirenariyu"
          target="_blank"
          aria-label="Stack Overflow"
        >
          <i className="fab fa-stack-overflow" />
        </Link>
        <Link
          className="social-icon-link twitter"
          to="https://twitter.com/kirenariyu"
          target="_blank"
          aria-label="Twitter"
        >
          <i className="fab fa-twitter" />
        </Link>
      </div>
      <div className="footer-line">
        <p>@kirenariyu &copy; 2021</p>
      </div>
      <div className="footer-line">
        <p>
          Made with <i className="fab fa-react" />
        </p>
      </div>
    </div>
  );
}

export default Footer;
