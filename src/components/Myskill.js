import React from "react";
import "./Myskill.css";

function Myskill() {
  return (
    <div className="myskill__complete" id="myskill">
      <div className="main">
        <h1 id="sHeading">My Skills</h1>
        <div className="skillContainer">
          <div className="lineUp">
            <div className="left">
              <div className="skillbox">
                {" "}
                Html:{" "}
                <div className="totalRating">
                  {" "}
                  <div className="skills hundered"></div>
                </div>
              </div>
              <div className="skillbox">
                {" "}
                Css:{" "}
                <div className="totalRating">
                  {" "}
                  <div className="skills seven"></div>
                </div>
              </div>
              <div className="skillbox">
                {" "}
                JavaScript:{" "}
                <div className="totalRating">
                  {" "}
                  <div className="skills five"></div>
                </div>
              </div>
              <div className="skillbox">
                {" "}
                NodeJs:{" "}
                <div className="totalRating">
                  {" "}
                  <div className="skills three"></div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="skillbox">
                {" "}
                ReactJs:{" "}
                <div className="totalRating">
                  {" "}
                  <div className="skills seven"></div>
                </div>
              </div>
              <div className="skillbox">
                {" "}
                MongoDB:{" "}
                <div className="totalRating">
                  {" "}
                  <div className="skills hundered"></div>
                </div>
              </div>
              <div className="skillbox">
                {" "}
                C++:{" "}
                <div className="totalRating">
                  {" "}
                  <div className="skills seven"></div>
                </div>
              </div>

              <div className="skillbox">
                {" "}
                Git:{" "}
                <div className="totalRating">
                  {" "}
                  <div className="skills hundered"></div>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="skillbox">
                {" "}
                Python:{" "}
                <div className="totalRating">
                  {" "}
                  <div className="skills seven"></div>
                </div>
              </div>
              <div className="skillbox">
                {" "}
                MySQL:{" "}
                <div className="totalRating">
                  {" "}
                  <div className="skills hundered"></div>
                </div>
              </div>
              <div className="skillbox">
                {" "}
                SEO:{" "}
                <div className="totalRating">
                  {" "}
                  <div className="skills seven"></div>
                </div>
              </div>

              <div className="skillbox">
                {" "}
                ReactNative:{" "}
                <div className="totalRating">
                  {" "}
                  <div className="skills hundered"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Myskill;
