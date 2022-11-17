import React from "react";
import Event from "../assets/Event.png";
import Expo from "../assets/Expo.png";
import Talk from "../assets/Talk.png";
import { Link } from "react-router-dom";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>What's in it for You?</h2>
        </div>
        <div className="wrapper">
          <div className="item1">
            <Link to="/events">
              <h2 className="Event">Events and Workshops</h2>
              <button>Know More</button>
            </Link>
            <img src={Event} alt="" srcset="" />
          </div>
          <div className="item2">
            <h2 className="Event">Charcha se Samadhan</h2>
            <img src={Talk} alt="" srcset="" />
          </div>
          <div className="item3">
            <h2 className="Event">Civil Expo</h2>
            <img src={Expo} alt="" srcset="" />
          </div>
        </div>
      </div>
    </div>
  );
};
