import React from "react";
import "../assets/css/Header.css";
import VideoBgDesktop from "../assets/video/videoBg.mp4";
import VideoBgMobile from "../assets/video/Mobile.mp4";
import { Link } from "react-router-dom";

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
            <Link to="/register-now">
            <li className="button">
              <a
                href="#a"
                className="NavItem-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                REGISTER NOW
              </a>
            </li>
            <br />
            <a className="smoothscroll" href="#here">
              <h5>SCROLL DOWN</h5>
              <i className="	fa fa-chevron-down "></i>
            </a>
          </Link>
          </p>

        </div>
        <div id="here"></div>
      </div>
    );
  }
}

export default Header;
