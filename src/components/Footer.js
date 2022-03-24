import React from "react";
import "./Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link, useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  const handlClick = (e) => {
    e.preventDefault();
    navigate("https://github.com/gitHritik");
  };
  const handleChickLinkedIn = (e) => {
    e.preventDefault();
    navigate("https://www.linkedin.com/in/hritik-chouhan-0522051b6/");
  };
  return (
    <div className="footer">
      <div className="footer__container">
        <img className="footer__img" src="/images/logo1.webp" alt="Portfolio" />
        <h2 className="footer__email">hritikchouhan54@gmail.com</h2>
        <p>Roorkee Haridware , Uttrakhand</p>
        <p>New Delhi , India</p>
        <div className="footer__icon">
          <GitHubIcon onClick={handlClick} className="footer__gitIcon" />

          <LinkedInIcon onClick={handleChickLinkedIn} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
