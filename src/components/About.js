import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about__complete" id="about">
      <div className="about__container">
        <h1 className="about__heading">About Me</h1>
        <div className="about">
          <div className="about__profileImage">
            <img src="images/9.png" alt="" />
            {/* <img alt="about" src={require("./img/9.png")} /> */}
          </div>
          <div className="about__info">
            <h1>I Create Products Not Just Art.</h1>
            <p>
              I'm Hritik Chouhan, a Full Stack Developer and AI Enthusiast with
              a creative mindset and a dedication to impactful web development.
              My passion lies in building digital experiences that are not only
              visually appealing but also highly functional and optimized for
              performance.
            </p>
            <p>
              With expertise in the latest technologies like React.js, Node.js,
              MongoDB, and Tailwind CSS, I bring an all-rounded approach to full
              stack development, designing user-friendly interfaces while
              ensuring robust backend performance. Whether it's crafting
              seamless front-end designs or developing efficient server-side
              logic, I focus on every detail to make each project stand out.
            </p>
            <p>
              I’m a quick learner and thrive in collaborative environments where
              ideas and skills are shared. Alongside my technical skills, I’m
              always exploring new trends in technology and expanding my
              knowledge to stay at the forefront of web development. I believe
              in continuous learning and am excited about the endless
              possibilities within the tech world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
