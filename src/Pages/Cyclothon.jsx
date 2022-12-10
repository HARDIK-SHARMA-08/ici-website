import React from "react";
import "../assets/css/Events.css";
import JsonData from "../data/data.json";
import Navigation from "../components/Navigation";
import { Contact } from "../components/contact";
import { useState, useEffect } from "react";
import { Fade } from "react-reveal";
import map from "../assets/img/map.png";

export const Cyclothon = (props) => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <>
      <Navigation />
      <div id="Events" className="text-center">
        <Fade delay="1000ms">
          <div className="container">
            <div className="TitleBox">
              <h2 className="title">Cyclothon & Walkathon </h2>
              <h3 className="info">Date - 27 November |Time - 7:00 AM</h3>
              <h2 className="fee">Registration Fees - ₹50</h2>
            </div>
          </div>
          <br />
          <div className="child">
            <h2>About</h2>
            <p>
              No traffic, no sound, & no disturbance. Join the Joy of Running
              and Riding with us. Inviting all to sweat it out and explore the
              limits.
            </p>
            <p>Kindly bring your own cycles. #BYOB #BringYourOwnBike</p>
            <img src={map} alt="" className="img-responsive" />
          </div>
        </Fade>
        <hr />
      </div>
      <Contact data={landingPageData.Contact} />
    </>
  );
};
