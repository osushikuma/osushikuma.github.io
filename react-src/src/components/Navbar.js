import React, { useState } from "react";
import Interactive from "react-interactive";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container container">
          <Interactive
            as={HashLink}
            className="navbar-logo"
            onClick={closeMobileMenu}
            to={`#Banner`}
          >
            <img src="images/main_logo.png" alt="Navbar Logo" /> &nbsp; YUMI
          </Interactive>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Interactive
                as={HashLink}
                className="nav-links"
                onClick={closeMobileMenu}
                to={`#Skills`}
              >
                Skills
              </Interactive>
            </li>
            <li className="nav-item">
              <Interactive
                as={HashLink}
                className="nav-links"
                onClick={closeMobileMenu}
                to={`#About`}
              >
                About
              </Interactive>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
