import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about__complete" id="about">
      <div className="about__container">
        <h1 className="about__heading">About Me</h1>
        <div className="about">
          <div className="about__profileImage">
            <img src="/images/1.jpeg" alt="" />
          </div>
          <div className="about__info">
            <h1>I Create Products Not Just Art.</h1>
            <p>
              I am passionate about Web Development & designing. I am a skilled
              full stack developer with 3+ years experience.
            </p>
            <p>
              I have rich experience in website design and building, Website
              Speed Optimization. I am a quick learner and a team worker that
              gets the job done.
            </p>
            <p>
              I can easily capitalize on low hanging fruits and quickly maximize
              timely deliverables for real-time schemas. I love to talk with you
              about our uniqueness......
            </p>
            <p>I have a lot of knowledge of vast topics...</p>
            <div className="row">
              <div className="info">
                Age: <span className="info__data"> 20</span>
              </div>
              <div className="info">
                Email:{" "}
                <span className="info__data"> hritikchouhan54@gmail.com</span>
              </div>
              <div className="info">
                State: <span className="info__data"> Uttrakhand/Roorkee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
