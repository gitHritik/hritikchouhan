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
                    href={"https://github.com/gitHritik/Amazon_clone"}
                  >
                    <h5>TicketLess</h5>
                  </a>
                </div>
                <div className="project__details">
                  TicketLess is a fully-featured web application that allows
                  users to book tickets for monuments, museums, and other
                  attractions online, eliminating the need for physical visits.
                  This platform offers a seamless, user-friendly experience for
                  browsing available attractions and booking tickets directly
                  from the comfort of your home.
                </div>
                <div className="btn">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href={"https://github.com/gitHritik/TicketLess"}
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
                    href={"https://github.com/gitHritik/ShareCourse"}
                  >
                    <h5>ShareCourse</h5>
                  </a>
                </div>

                <div className="project__details">
                  I have designed the ShareCourse website, utilizing Tailwind
                  CSS and the ReactJS framework. The website features a seamless
                  payment gateway integration with Stripe.js, allowing users to
                  purchase courses easily. In addition, I have implemented
                  Google Authentication using Google Auth, enabling users to log
                  in effortlessly. This simple yet effective course-selling
                  platform provides an intuitive way to browse and purchase
                  courses online.
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
                    href={"https://github.com/gitHritik/Booking"}
                  >
                    <h5>HotelBooking</h5>
                  </a>
                </div>
                <div className="project__details">
                  I have developed a Hotel Booking website using the complete
                  MERN stack. This web application allows users to search for
                  hotels, manage bookings, and perform CRUD operations (Create,
                  Read, Update, Delete) through RESTful APIs using POST, GET,
                  UPDATE, and DELETE methods. The backend is powered by Node.js
                  and Express, with MongoDB and Mongoose managing the database,
                  utilizing a cloud-based MongoDB cluster for data storage and
                  retrieval.
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
