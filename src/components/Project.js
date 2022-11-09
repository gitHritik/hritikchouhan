import React, { useEffect, useState } from "react";
import "./Project.css";

import SimpleImageSlider from "react-simple-image-slider";

const Share = [
  { url: "images/share.png" },
  { url: "images/share1.png" },
  { url: "images/share2.png" },
  { url: "images/share3.png" },
  { url: "images/share4.png" },
  { url: "images/share5.png" },
  { url: "images/share6.png" },
  { url: "images/share7.png" },
];
const amazon = [
  { url: "images/amazon.png" },
  { url: "images/amazon1.png" },
  { url: "images/amazon2.png" },
  { url: "images/amazon3.png" },
  { url: "images/amazon4.png" },
];
const booking = [
  { url: "images/booking.png" },
  { url: "images/booking1.png" },
  { url: "images/booking2.png" },
  { url: "images/booking3.png" },
  { url: "images/booking4.png" },
];
const Project = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div className="project__complete" id="project">
      <div className="projects__container">
        <div className="mains">
          <h1 id="sHeading">Projects</h1>
          <div className="project__container">
            <div className="project__box">
              <div className="project__intro">
                <div className="project__title">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href={"https://github.com/gitHritik/ShareCourse"}
                  >
                    <h5>ShareCourse</h5>
                  </a>
                </div>

                <div className="project__details">
                  I have created this ShareCourse website design and here I have
                  used tailwind Css and ReactJS framework and for the payment
                  gateway I have used stripe js. This is just a simple design of
                  course selling website and I have also implement google
                  authentication using google auth.
                </div>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href={"https://github.com/gitHritik/ShareCourse"}
                >
                  <div className="btn">
                    <button className="project__btn">View Code</button>
                  </div>
                </a>
              </div>

              <div className="project__images">
                {width > 760 ? (
                  <SimpleImageSlider
                    width={590}
                    height={339}
                    images={Share}
                    showBullets={true}
                    showNavs={true}
                  />
                ) : (
                  <SimpleImageSlider
                    width={350}
                    height={200}
                    images={Share}
                    showBullets={true}
                    showNavs={true}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="project__container">
            <div className="project__box">
              <div className="project__intro">
                <div className="project__title">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href={"https://github.com/gitHritik/Amazon_clone"}
                  >
                    <h5>AmazonClone</h5>
                  </a>
                </div>
                <div className="project__details">
                  I have created Amazon Clone on my behalf and I have tried to
                  learn some of new things and try to explore how the real
                  websites have been created here I have used ReactJS and
                  Firebase for backend.This website is created for fun and to
                  explore something new.
                </div>
                <div className="btn">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href={"https://github.com/gitHritik/Amazon_clone"}
                  >
                    <div className="btn">
                      <button className="project__btn">View Code</button>
                    </div>
                  </a>
                </div>
              </div>

              <div className="project__images">
                {width > 760 ? (
                  <SimpleImageSlider
                    width={590}
                    height={339}
                    images={amazon}
                    showBullets={true}
                    showNavs={true}
                  />
                ) : (
                  <SimpleImageSlider
                    width={350}
                    height={200}
                    images={amazon}
                    showBullets={true}
                    showNavs={true}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="project__container">
            <div className="project__box">
              <div className="project__intro">
                <div className="project__title">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href={"https://github.com/gitHritik/Booking"}
                  >
                    <h5>HotelBooking</h5>
                  </a>
                </div>
                <div className="project__details">
                  I have created Booking website using complete MERN stack here
                  you can look for hotels and even use Rest API like post, get,
                  update, put and it is complete CRUD web application and
                  moongoose cluster for the database and it is also created for
                  learn something new this is not a real life project.
                </div>
                <div className="btn">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href={"https://github.com/gitHritik/Booking"}
                  >
                    <div className="btn">
                      <button className="project__btn">View Code</button>
                    </div>
                  </a>
                </div>
              </div>

              <div className="project__images">
                {width > 760 ? (
                  <SimpleImageSlider
                    width={590}
                    height={339}
                    images={booking}
                    showBullets={true}
                    showNavs={true}
                  />
                ) : (
                  <SimpleImageSlider
                    width={350}
                    height={200}
                    images={booking}
                    showBullets={true}
                    showNavs={true}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
