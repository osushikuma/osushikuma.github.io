import React from "react";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-line">
        <img src="images/main_logo.png" alt="Main Logo" height="90px" />
      </div>
      <div className="footer-line">
        <p>Inspiring full-stack, improving one at a time.</p>
      </div>
      <div className="footer-line social-icons">
        <a
          className="social-icon-link github"
          rel="noreferrer"
          href="https://www.github.com/kirenariyu/"
          target="_blank"
          aria-label="GitHub"
        >
          <i className="fab fa-github" />
        </a>
        <a
          className="social-icon-link instagram"
          rel="noreferrer"
          href="https://www.instagram.com/kirenariyu/"
          target="_blank"
          aria-label="Instagram"
        >
          <i className="fab fa-instagram" />
        </a>
        <a
          className="social-icon-link linkedin"
          rel="noreferrer"
          href="https://www.linkedin.com/in/kirenariyu"
          target="_blank"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin" />
        </a>
        <a
          className="social-icon-link stack-overflow"
          rel="noreferrer"
          href="https://www.stackoverflow.com/users/3618945/kirenariyu"
          target="_blank"
          aria-label="Stack Overflow"
        >
          <i className="fab fa-stack-overflow" />
        </a>
        <a
          className="social-icon-link twitter"
          rel="noreferrer"
          href="https://www.twitter.com/kirenariyu"
          target="_blank"
          aria-label="Twitter"
        >
          <i className="fab fa-twitter" />
        </a>
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
