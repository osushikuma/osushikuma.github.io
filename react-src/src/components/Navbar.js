import React from "react";
import Interactive from "react-interactive";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = window.outerWidth <= "767" ? 0 : -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container container">
          <Interactive
            as={HashLink}
            className="navbar-logo"
            offset={-80}
            scroll={(el) => scrollWidthOffset(el)}
            smooth
            to={`#Banner`}
          >
            <img src="images/main_logo.png" alt="Navbar Logo" />
          </Interactive>
          <ul className="nav-menu">
            <li className="mobile-only nav-item">
              <Interactive
                as={HashLink}
                className="nav-links"
                scroll={(el) => scrollWidthOffset(el)}
                smooth
                to={`#Skills`}
              >
                <i className="fas fa-home"></i>
              </Interactive>
            </li>
            <li className="nav-item">
              <Interactive
                as={HashLink}
                className="nav-links"
                scroll={(el) => scrollWidthOffset(el)}
                smooth
                to={`#Skills`}
              >
                <span>Skills</span>
                <i className="fas fa-cog"></i>
              </Interactive>
            </li>
            <li className="nav-item">
              <Interactive
                as={HashLink}
                className="nav-links"
                scroll={(el) => scrollWidthOffset(el)}
                smooth
                to={`#About`}
              >
                <span>About</span>
                <i className="fas fa-user"></i>
              </Interactive>
            </li>
            <li className="nav-item">
              <Interactive
                as={HashLink}
                className="nav-links"
                scroll={(el) => scrollWidthOffset(el)}
                smooth
                to={`#Experience`}
              >
                <span>Experience</span>
                <i className="fas fa-briefcase"></i>
              </Interactive>
            </li>
            <li className="nav-item">
              <Interactive
                as={HashLink}
                className="nav-links"
                scroll={(el) => scrollWidthOffset(el)}
                smooth
                to={`#Contact`}
              >
                <span>Contact</span>
                <i className="fas fa-envelope"></i>
              </Interactive>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
