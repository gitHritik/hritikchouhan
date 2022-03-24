import React from "react";
import Link from "react-scroll/modules/components/Link";
import "./Intro.css";

function Intro() {
  return (
    <div className="Intro__container">
      <div className="Intro__info">
        <h1 className="Intro__infoHeading">Hello,Guys I am Hritik Chouhan</h1>
        <h2 className="Intro__aboutMe">MERN-Stack Developer || C++</h2>
        <p className="Intro__description">
          I am a Full Stack developer with a lot of experience building websites
          and web applications. I specialize in React Js and javascript and have
          so much experience working with React.js and Node.js. I also have
          experience working with C++, Firebase, Tailwind Css and MongoDB.
        </p>
        <div className="Intro__buttons">
          <Link to="about" smooth={true} duration={50}>
            <button className="Intro__button">Learn More</button>
          </Link>

          <Link to="contact" smooth={true} duration={50}>
            <button className="Intro__button1">Hire Me</button>
          </Link>
        </div>
      </div>

      <div className="Intro__profile">
        <img src="/images/introImage1.png" />
      </div>
    </div>
  );
}

export default Intro;
