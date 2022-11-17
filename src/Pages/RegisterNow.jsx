import React from "react";
import Navigation from "../components/Navigation";
import JsonData from "../data/data.json";
import { Contact } from "../components/contact";
import "../assets/RegisterNow.css";
import { useState, useEffect } from "react";

export const RegisterNow = (props) => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <>
      <Navigation />
      <div id="RegisterNow" className="text-center">
        <div className="accomodation">
          <h3>
            Accomodation will be provided for Students from outside Jaipur,
            Rajasthan
          </h3>
        </div>

        <div className="wrapper">
          <div className="Item1">
            <h2 className="Event1">Joist Kwik</h2>
            <a
              href="https://rzp.io/l/xT7hSTn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="Explore">Register</button>
            </a>
          </div>

          <div className="Item4">
            <h2 className="Event4">Bowling Alley</h2>
            <a
              href="https://rzp.io/l/xT7hSTn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="Explore">Register</button>
            </a>
          </div>

          <div className="Item7">
            <h2 className="Event4">Workshop</h2>
            <a
              href="https://rzp.io/l/xWzxLQybF"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="Explore">Register</button>
            </a>
          </div>

          <div className="Item3">
            <h2 className="Event3">Brick O Brick</h2>
            <a
              href="https://rzp.io/l/xT7hSTn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="Explore">Register</button>
            </a>
          </div>

          <div className="Item2">
            <h2 className="Event2">Crack the CAD</h2>
            <a
              href="https://rzp.io/l/xWzxLQybF"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="Explore">Register</button>
            </a>
          </div>

          <div className="Item5">
            <h2 className="Event">Cyclothon</h2>
            <a
              href="https://rzp.io/l/xWzxLQybF"
              alt="Cyclothon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="Explore">Register</button>
            </a>
          </div>

          <div className="Item9">
            <h2 className="Event">Walkathon</h2>
            <a
              href="https://rzp.io/l/xWzxLQybF"
              alt="Cyclothon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="Explore">Register</button>
            </a>
          </div>

          <div className="Item6">
            <h2 className="Event4">Treasure Hunt</h2>
            <a
              href="https://rzp.io/l/p48zAM6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="Explore">Register</button>
            </a>
          </div>

          <div className="Item8">
            <h2 className="Event4">Quiz</h2>
            <a
              href="https://rzp.io/l/xWzxLQybF"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="Explore">Register</button>
            </a>
          </div>
        </div>
      </div>
      <Contact data={landingPageData.Contact} />
    </>
  );
};
