import React from "react";
import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import { Contact } from "../components/contact";
import JsonData from "../data/data.json";
import { AboutSkit } from "./AboutSkit";
import { Jaipur } from "../components/Jaipur";
import { Team } from "../components/Team";
import { TechTeam } from "../components/TechTeam";
import "../assets/css/AboutUs.css";

export const AboutUs = (props) => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <>
      <Navigation />
      <AboutSkit />
      <Jaipur />
      <hr />
      <Team data={landingPageData.Team} />
      <TechTeam data={landingPageData.TechTeam} />
      <Contact data={landingPageData.Contact} />
    </>
  );
};
