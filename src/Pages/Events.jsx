import React from "react";
import "../assets/css/Events.css";
import Navigation from "../components/Navigation";
import JsonData from "../data/data.json";
import { Contact } from "../components/contact";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Fade } from "react-reveal";

export const Events = (props) => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <>
      <Navigation />
      <Fade cascade>
        <div id="Events" className="text-center">
          <div className="wrapper">
            <Link to="/joist-kwik">
              <div className="item1">
                <h2 className="Event1">Joist Kwik</h2>
                <button className="Explore">Explore More</button>
              </div>
            </Link>

            <Link to="/crack-the-cad">
              <div className="item2">
                <button className="Explore">Explore More</button>
                <h2 className="Event2">Crack the CAD</h2>
              </div>
            </Link>

            <Link to="/brick-o-brick">
              <div className="item3">
                <button className="Explore">Explore More</button>
                <h2 className="Event3">Brick - O - Brick</h2>
              </div>
            </Link>

            <Link to="/bowling-alley">
              <div className="item4">
                <button className="Explore">Explore More</button>
                <h2 className="Event4">Bowling Alley</h2>
              </div>
            </Link>

            <Link to="/cyclothon">
              <div className="item5">
                <button className="Explore">Explore More</button>
                <h2 className="Event4">
                  Cyclothon & <br /> Walkathon
                </h2>
              </div>
            </Link>

            <Link to="/workshop">
              <div className="item6">
                <button className="Explore">Explore More</button>
                <h2 className="Event4">Workshop</h2>
              </div>
            </Link>

            <Link to="/ConQ">
              <div className="item7">
                <button className="Explore">Explore More</button>
                <h2 className="Event4">Con Q</h2>
              </div>
            </Link>

            <Link to="/the-hawk-eyes">
              <div className="item8">
                <button className="Explore">Explore More</button>
                <h2 className="Event4">Treasure Hunt</h2>
              </div>
            </Link>
          </div>
        </div>
      </Fade>
      <Contact data={landingPageData.Contact} />
    </>
  );
};
