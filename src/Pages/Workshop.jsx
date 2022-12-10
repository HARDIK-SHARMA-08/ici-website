import React from "react";
import Navigation from "../components/Navigation";
import JsonData from "../data/data.json";
import { Contact } from "../components/contact";
import "../assets/css/Events.css";
import { useState, useEffect } from "react";
import { Fade } from "react-reveal";

export const Workshop = (props) => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <>
      <Navigation />
      <Fade delay="1000ms">
        <div id="Events" className="text-center">
          <div className="container">
            <div className="TitleBox">
              <h2 className="title">Workshop</h2>
              <h3 className="info">Date - 26 November | Time - 12:30 PM </h3>
              <h2 className="fee">Registration Fees - ₹50</h2>
            </div>
          </div>
          <div className="child">
            <h2>About</h2>
            <p>
              Hands on experience with the right proportions of materials and
              facilitate yourself for industrial exposure and resolve queries
              with experts.
            </p>
            <p>Certificates will be provided</p>
          </div>
          <hr />
        </div>
      </Fade>
      <Contact data={landingPageData.Contact} />
    </>
  );
};
