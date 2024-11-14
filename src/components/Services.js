import React from "react";
import "./Services.css";

function Services() {
  return (
    <div className="services__complete" id="service">
      <div className="services">
        <h1>Services</h1>
        <div className="services__container">
          <div className="services__card">
            <div className="services__img">
              <img src="images/web.svg" alt="" />
            </div>
            <div className="services__heading">
              <h5>Website Design</h5>
            </div>
            <div className="services__description">
              <p>
                I have a lot of experience in web design and have designed many
                websites. I can design any website related to your content and
                code it exactly the way you want.
              </p>
            </div>
          </div>
          <div className="services__card">
            <div className="services__img">
              <img src="images/card2.svg" alt="" />
            </div>
            <div className="services__heading">
              <h5>App Development</h5>
            </div>
            <div className="services__description">
              <p>
                I will create the app the way you want. I have knowledge of
                React Native, which I will use to build your app. I am very
                enthusiastic about app development.
              </p>
            </div>
          </div>
          <div className="services__card">
            <div className="services__img">
              <img src="images/card3.svg" alt="" />
            </div>
            <div className="services__heading">
              <h5>UI/UX Design</h5>
            </div>
            <div className="services__description">
              <p>
                UI/UX design is fundamental to creating a website; it is the
                first step in the process. I work closely with product
                management in UX ideation and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
