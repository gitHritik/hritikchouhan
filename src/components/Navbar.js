import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Link from "react-scroll/modules/components/Link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink } from "react-router-dom";
function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isActive, setIsActive] = useState(0);

  const [width, setWidth] = useState(window.innerWidth);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const changeNavbarColor = () => {
    setIsActive(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return () => window.addEventListener("scroll", changeNavbarColor);
  }, []);

  const handleClick = () => {
    setIsMobile(!isMobile);
  };
  return (
    <div className="nav__container" id="navbar">
      <nav>
        <Link to="navbar" smooth={true} duration={50}>
          <div className="nav__logo">
            <img src="images/logo.webp" alt="portfolio" />
          </div>
        </Link>

        <div
          className={isMobile ? "image_componentsMobile" : "image__components"}
          onClick={() => setIsMobile(false)}
        >
          <ul className="image__component">
            <Link to="navbar" smooth={true} duration={50}>
              <li
                className={
                  isActive <= 489 && !isMobile ? "active" : "activeClass"
                }
                onClick={width < 768 && handleClick}
              >
                Home
              </li>
            </Link>

            <Link to="about" smooth={true} duration={50}>
              <li
                className={
                  isActive > 489 && isActive <= 1310 && !isMobile
                    ? "active"
                    : "activeClass"
                }
                onClick={width < 768 && handleClick}
              >
                About
              </li>
            </Link>
            <Link to="service" smooth={true} duration={50}>
              <li
                className={
                  isActive > 1310 && isActive <= 1920 && !isMobile
                    ? "active"
                    : "activeClass"
                }
                onClick={width < 768 && handleClick}
              >
                Services
              </li>
            </Link>

            <Link to="myskill" smooth={true} duration={50}>
              <li
                className={
                  isActive > 1920 && isActive <= 2515 && !isMobile
                    ? "active"
                    : "activeClass"
                }
                onClick={width < 768 && handleClick}
              >
                My Skill
              </li>
            </Link>
            <Link to="project" smooth={true} duration={50}>
              <li
                className={
                  isActive > 2515 && isActive <= 3900 && !isMobile
                    ? "active"
                    : "activeClass"
                }
                onClick={width < 768 && handleClick}
              >
                Projects
              </li>
            </Link>

            <Link to="contact" smooth={true} duration={50}>
              <li
                className={
                  isActive > 3900 && isActive < 5000 && !isMobile
                    ? "active"
                    : "activeClass"
                }
                onClick={width < 768 && handleClick}
              >
                Contact me
              </li>
            </Link>
          </ul>
        </div>
        <button
          className="navbar__humburger"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>
    </div>
  );
}

export default Navbar;
