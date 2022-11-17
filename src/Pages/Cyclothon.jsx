import React from "react";
import "../assets/Events.css";
import JsonData from "../data/data.json";
import Navigation from "../components/Navigation";
import { Contact } from "../components/contact";
import { useState, useEffect } from "react";
import { Fade } from "react-reveal";
import map from "../assets/map.png";

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
          <h2 className="title">Cyclothon & Walkathon </h2>
          <h3>27 November 2022 </h3>
          <h3>Time - 7:00 AM</h3>
          <h2>Registration Fees- ₹50</h2>
          <br />
          <br />
          <div className="child">
            <h2>About</h2>
            <p>
              No traffic, no sound, & no disturbances. Join the Joy of Running
              and Riding with us. Inviting all to sweat it out and explore the
              limits.
            </p>
            <img src={map} alt="" className="img-responsive" />
            <h2>Participation</h2>
            <p>Individual</p>
          </div>
        </Fade>
      </div>
      <Contact data={landingPageData.Contact} />
    </>
  );
};
