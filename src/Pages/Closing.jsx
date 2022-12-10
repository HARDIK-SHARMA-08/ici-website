import React from "react";
import Navigation from "../components/Navigation";
import JsonData from "../data/data.json";
import { Contact } from "../components/contact";
import "../assets/css/closed.css";
import { useState, useEffect } from "react";

export const Closed = (props) => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <>
      <Navigation />
      <div id="Closed" className="text-center">
        <h2>Due to overwhelming responses, we are closing registrations for this event !! &#128150; <br /> <br />
            Thank You for your support
        </h2>
      </div>
      <Contact data={landingPageData.Contact} />
    </>
  );
};
