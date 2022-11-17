import React from "react";
import "../assets/Header.css";
import VideoBgDesktop from "../assets/videoBg.mp4";
import VideoBgMobile from "../assets/Mobile.mp4";

class Header extends React.Component {
  render() {
    return (
      <div className="main" id="Header">
        <div id="VideoBg">
          <video
            className="Desktop"
            src={VideoBgDesktop}
            autoPlay
            muted
            playsinline
            preload="auto"
            typeof="Video/mp4"
          />
        </div>
        <div id="VideoBg2">
          <video
            classname="Mobile"
            src={VideoBgMobile}
            autoPlay
            muted
            playsinline
            preload="auto"
            typeof="Video/mp4"
          />
        </div>
        <div className="content">
          <p className="scrolldown">
            <a className="smoothscroll" href="#here">
              <h5>SCROLL DOWN</h5>
              <i className="	fa fa-chevron-down "></i>
            </a>
          </p>
        </div>
        <div id="here"></div>
      </div>
    );
  }
}

export default Header;
