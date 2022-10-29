import logo from "../assets/logo.png";
import React, { Component } from "react";
import "../assets/NavbarStyles.css";
import { Squash as Hamburger } from "hamburger-react";

class Navigation extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarScrolled">
        <div className="Navbar active" id="NavigationBar">
          <img src={logo} alt="" className="Logo" />

          <div className="HamBurgerIcon" onClick={this.handleClick}>
            <Hamburger rounded size={25}></Hamburger>
          </div>
          <ul className={this.state.clicked ? "NavMenu active" : "NavMenu"}>
            <li className="NavBarItem">
              <a href="#about" className="NavItem">
                ABOUT
              </a>
            </li>

            <li className="NavBaritem">
              <a href="#Resume" className="NavItem">
                TIMELINE
              </a>
            </li>

            <li className="NavBaritem">
              <a href="#team" className="NavItem">
                GUEST TALK
              </a>
            </li>

            <li className="NavBaritem">
              <a href="#Sponsor" className="NavItem">
                SPONSORS
              </a>
            </li>

            <li className="button">
              <a
                href="#team"
                className="NavItem2"
                target="_blank"
                rel="noopener noreferrer"
              >
                REGISTER NOW
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;
