import React from "react";
import Navigation from "../components/Navigation";
import JsonData from "../data/data.json";
import { Contact } from "../components/contact";
import "../assets/Events.css";
import { useState, useEffect } from "react";
import { Fade } from "react-reveal";

class Tabs extends React.Component {
  state = {
    activeTab: this.props.children[0].props.label,
  };
  changeTab = (tab) => {
    this.setState({ activeTab: tab });
  };
  render() {
    let content;
    let buttons = [];
    return (
      <div>
        {React.Children.map(this.props.children, (child) => {
          buttons.push(child.props.label);
          if (child.props.label === this.state.activeTab)
            content = child.props.children;
        })}

        <TabButtons
          activeTab={this.state.activeTab}
          buttons={buttons}
          changeTab={this.changeTab}
        />
        <div className="tab-content">{content}</div>
      </div>
    );
  }
}

const TabButtons = ({ buttons, changeTab, activeTab }) => {
  return (
    <div className="tab-buttons">
      {buttons.map((button) => {
        return (
          <button
            className={button === activeTab ? "active" : ""}
            onClick={() => changeTab(button)}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
};

const Tab = (props) => {
  return <React.Fragment>{props.children}</React.Fragment>;
};

export const Workshop = (props) => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <>
      <Navigation />
      <div id="Events" className="text-center">
        <h2 className="title">Workshop</h2>
        <h3>Time - 12:30 PM </h3>
        <Fade delay="1000ms">
          <div className="container">
            <h2>Registration Fees - ₹50</h2>
            <Tabs>
              <Tab label="About">
                <div className="child">
                  <p>
                    Hands on experience with the right proportions of materials.
                    And facilitate yourself to industrial exposure and resolve
                    queries with experts.
                  </p>
                </div>
                <hr />
              </Tab>
              <Tab label="Prize">
                <div className="child">
                  <p>Certificates will be provided</p>
                </div>
                <hr />
              </Tab>
            </Tabs>
          </div>
        </Fade>
      </div>
      <Contact data={landingPageData.Contact} />
    </>
  );
};
