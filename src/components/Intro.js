import React from "react";
import Link from "react-scroll/modules/components/Link";
import "./Intro.css";

function Intro() {
  const onButtonClick = () => {
    fetch("Hritik_Chouhan.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);

        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Hritik_Chouhan.pdf";
        alink.click();
      });
    });
  };
  return (
    <div className="Intro__container">
      <div className="Intro__info">
        <h1 className="Intro__infoHeading">Hello, I'm Hritik Chouhan!</h1>
        <h2 className="Intro__aboutMe">Full Stack Developer | AI Enthusiast</h2>
        <p className="Intro__description">
          As a full stack developer, I’m passionate about crafting seamless,
          responsive web experiences. My core strengths are in JavaScript and
          React.js, where I turn ideas into interactive, user-friendly
          interfaces. On the backend, I bring Node.js and MongoDB expertise to
          build scalable, efficient architectures. From Firebase integration to
          sleek styling with Tailwind CSS, I prioritize performance and
          precision in every project. Let’s build something exceptional!
        </p>
        <div className="Intro__buttons">
          <button className="Intro__button" onClick={onButtonClick}>
            Download Resume
          </button>

          <Link to="contact" smooth={true} duration={50}>
            <button className="Intro__button1">Hire Me</button>
          </Link>
        </div>
      </div>

      <div className="Intro__profile">
        {/* <img alt="intro" src={require("./img/introImage1.png")} /> */}

        <img alt="intro" src="images/introImage1.png" />
      </div>
    </div>
  );
}

export default Intro;
