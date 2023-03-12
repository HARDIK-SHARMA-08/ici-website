import logo from "../assets/logo.svg";
import React, { Component } from "react";
import "../assets/css/NavbarStyles.css";
import { Squash as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";

class Navigation extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  componentDidMount() {
    window.addEventListener("scroll", this.resizeHeaderOnScroll);
  }
  resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 25,
      headerEl = document.getElementById("NavigationBar");

    if (distanceY > shrinkOn) {
      headerEl.classList.add("Shrink");
    } else {
      headerEl.classList.remove("Shrink");
    }
  }

  render() {
    return (
      <nav className="NavbarScrolled">
        <div className="Navbar" id="NavigationBar">
          <img src={logo} alt="" className="Logo" />

          <div className="HamBurgerIcon" onClick={this.handleClick}>
            <Hamburger rounded size={25}></Hamburger>
          </div>
          
          <div className={this.state.clicked ? "NavMenu bg" : "NavMenu"}> </div>
          <ul className={this.state.clicked ? "NavMenu active" : "NavMenu"}>
            <li className="NavBarItem">
              <Link to="/">
                <a href="# " className="NavItem">
                  HOME
                </a>
              </Link>
            </li>

            <li className="NavBaritem">
              <Link to="/events">
                <a href="# " className="NavItem">
                  EVENTS
                </a>
              </Link>
            </li>

            <li className="NavBaritem">
              <Link to="/about">
                <a href="# " className="NavItem">
                  ABOUT US
                </a>
              </Link>
            </li>
            
            <Link to="/register-now">
            <li className="button">
              <a
                href="#a"
                className="NavItem2"
                target="_blank"
                rel="noopener noreferrer"
              >
                REGISTER NOW
              </a>
            </li>
            </Link>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;
