import React from "react";
import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import { Contact } from "../components/contact";
import JsonData from "../data/data.json";
import { Jaipur } from "../components/Jaipur";
import { Team } from "../components/Team";
import { TechTeam } from "../components/TechTeam";
import "../assets/AboutUs.css";

export const AboutUs = (props) => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <>
      <Navigation />
      <div id="AboutUs">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h1>
                    {props.data ? props.data.title : "About SKIT"}
                    <span></span>
                  </h1>
                  <p>{props.data ? props.data.paragraph : " Swami Keshvanand Institute of Technology, Management & Gramothan (SKIT), inspired from the learnings of Swami Keshvanand, was established in the year 2000 by Technocrats and Managers Society for Advanced Learning and Gramothan. Today the institute is recognized as one of the centres of academic excellence in Northern India. Located in the Pink City Jaipur, which is a blend of traditional history and modern outlook, SKIT is putting in efforts for making industry ready engineers and managers through effective Industry–Institute Interface. "}</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Jaipur />
      <hr />
      <Team data={landingPageData.Team} />
      <TechTeam data={landingPageData.TechTeam} />
      <Contact data={landingPageData.Contact} />
    </>
  );
};
