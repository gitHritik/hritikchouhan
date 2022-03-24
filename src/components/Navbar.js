import React, { useState } from "react";
import "./Navbar.css";
import Link from "react-scroll/modules/components/Link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div className="nav__container" id="navbar">
      <nav>
        <Link to="navbar" smooth={true} duration={50}>
          <div className="nav__logo">
            <img src="/images/logo.webp" alt="portfolio" />
          </div>
        </Link>

        <div
          className={isMobile ? "image_componentsMobile" : "image__components"}
          onClick={() => setIsMobile(false)}
        >
          <ul className="image__component">
            <Link to="navbar" smooth={true} duration={50}>
              <li>Home</li>
            </Link>

            <Link to="about" smooth={true} duration={50}>
              <li>About</li>
            </Link>
            <Link to="service" smooth={true} duration={50}>
              <li>Services</li>
            </Link>

            <Link to="myskill" smooth={true} duration={50}>
              <li>My Skill</li>
            </Link>

            <Link to="contact" smooth={true} duration={50}>
              <li>Contact me</li>
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
