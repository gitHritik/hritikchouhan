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
              <img src="/images/web.svg" alt="" />
            </div>
            <div className="services__heading">
              <h5>Website Design</h5>
            </div>
            <div className="services__description">
              <p>
                I have a lot experience in web design i have design a lot
                website i will design any website realted to your content and i
                will just code the website the way you want..
              </p>
            </div>
          </div>
          <div className="services__card">
            <div className="services__img">
              <img src="/images/card2.svg" alt="" />
            </div>
            <div className="services__heading">
              <h5>App Development</h5>
            </div>
            <div className="services__description">
              <p>
                I will create the App the way you want i got the knowledge of
                React Native which i wil used for create your app i am very
                enthusiast for app development..
              </p>
            </div>
          </div>
          <div className="services__card">
            <div className="services__img">
              <img src="/images/card3.svg" alt="" />
            </div>
            <div className="services__heading">
              <h5>UI/UX Design</h5>
            </div>
            <div className="services__description">
              <p>
                UI/UX Design is the fundametal to create a website it is the
                first step to create website.Work closely with product
                management in UX ideation and innovation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
