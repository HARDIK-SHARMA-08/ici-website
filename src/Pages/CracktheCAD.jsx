import React from "react";
import Navigation from "../components/Navigation";
import { Contact } from "../components/contact";
import "../assets/css/Events.css";
import JsonData from "../data/data.json";
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

export const CracktheCAD = (props) => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <>
      <Navigation />
      <div id="Events" className="text-center">
        <Fade delay="1000ms">
          <div className="container">
            <div className="TitleBox">
              <h2 className="title">Crack the CAD</h2>
              <h3 className="info">Date - 26 November | Time - 2:00 PM </h3>
              <h2 className="fee">Registration Fees - ₹50</h2>
            </div>
          </div>
          <Tabs>
            <Tab label="About">
              <div className="child">
                <h2>PROBLEM STATEMENT</h2>
                <p>
                  Draft a residential plan on a given plot of area 30’x60’
                  according to the client's requirements.
                </p>
                <h2>Participation</h2>
                <p>Individual</p>
              </div>
              <hr />
            </Tab>
            <Tab label="Structure">
              <div className="child">
                <h2>Round 1 </h2>
                <p>
                  <ol>
                    <li>Make the drawing in given time [90 MIN].</li>
                    <li>Requirements of client: - plot area (30’x60’)</li>
                    <li>Plot is North facing</li>
                  </ol>
                  <ul>
                    <li>1 Bedrooms + Attached Bathroom</li>
                    <li>1 Master Bedroom + Attached Bathroom</li>
                    <li>1 Kitchen</li>
                    <li>1 Common Washroom</li>
                    <li>1 Lobby + Dining Area</li>
                    <li>1 Drawing Room </li>
                    <li>1 Small Garden </li>
                    <li>Parking Area (1 Two-Wheeler + 1 Four-Wheeler)</li>
                    <li>Passage + Washing Area </li>
                    <li>1 Store Room </li>
                    <li>1 Pooja Room </li>
                  </ul>
                </p>
              </div>
              <hr />
            </Tab>
            <Tab label="Judgement Criteria">
              <div className="child">
                <h2>JUDGING CRITERIA</h2>
                <p>
                  <ul>
                    <li>Time</li>
                    <li>Aesthetics</li>
                    <li>Requirements Fulfilled</li>
                    <li>Planning</li>
                  </ul>
                </p>
              </div>
              <hr />
            </Tab>
          </Tabs>
        </Fade>
      </div>
      <Contact data={landingPageData.Contact} />
    </>
  );
};
