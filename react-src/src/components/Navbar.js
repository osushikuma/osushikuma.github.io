import React, { useState } from "react";
import Interactive from "react-interactive";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  const [fa, setFa] = useState("fas");

  const handleClick = (fa) => setFa(fa);
  const scrollWidthOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = window.outerWidth <= "767" ? 0 : -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <>
      <nav>
        <div className="container">
          <Interactive
            as={HashLink}
            className="nav-logo non-mobile"
            offset={-80}
            scroll={(el) => scrollWidthOffset(el)}
            smooth
            to={`#Banner`}
          >
            <img src="images/main_logo.png" alt="Navbar Logo" />
          </Interactive>
          <ul className="nav-menu">
            <li className="mobile">
              <Interactive
                as={HashLink}
                scroll={(el) => scrollWidthOffset(el)}
                smooth
                to={`#Banner`}
              >
                <i className="fas fa-home mobile"></i>
              </Interactive>
            </li>
            <li>
              <Interactive
                as={HashLink}
                scroll={(el) => scrollWidthOffset(el)}
                smooth
                to={`#Skills`}
              >
                <span className="non-mobile">Skills</span>
                <i className="fas fa-cog mobile"></i>
              </Interactive>
            </li>
            <li>
              <Interactive
                as={HashLink}
                scroll={(el) => scrollWidthOffset(el)}
                smooth
                to={`#About`}
              >
                <span className="non-mobile">About</span>
                <i className="fas fa-user mobile"></i>
              </Interactive>
            </li>
            <li>
              <Interactive
                as={HashLink}
                scroll={(el) => scrollWidthOffset(el)}
                smooth
                to={`#Experience`}
              >
                <span className="non-mobile">Experience</span>
                <i className="fas fa-briefcase mobile"></i>
              </Interactive>
            </li>
            <li>
              <Interactive
                as={HashLink}
                scroll={(el) => scrollWidthOffset(el)}
                smooth
                to={`#Contact`}
              >
                <span className="non-mobile">Contact</span>
                <i className="fas fa-envelope mobile"></i>
              </Interactive>
            </li>
            <li>
              <a
                onClick={() => {
                  var root = document.getElementById("root");

                  if (root.classList.contains("dark-theme")) {
                    root.classList.remove("dark-theme");
                    root.classList.add("light-theme");
                    handleClick("fas");
                  } else {
                    root.classList.remove("light-theme");
                    root.classList.add("dark-theme");
                    handleClick("far");
                  }
                }}
              >
                <i className={`${fa} fa-lightbulb`}></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
