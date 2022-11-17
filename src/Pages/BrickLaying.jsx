import React from "react";
import Navigation from "../components/Navigation";
import { Contact } from "../components/contact";
import "../assets/Events.css";
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

export const BrickLaying = (props) => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <>
      <Navigation />
      <div id="Events" className="text-center">
        <Tab>
          <Fade delay="1000ms">
            <h2 className="title">Brick O Brick</h2>
            <h3>Time - 1:30 PM </h3>
            <h2>Registration Fees - ₹200 per Team</h2>

            <Tabs>
              <Tab label="About">
                <div className="child">
                  <h2>PROBLEM STATEMENT</h2>
                  <p>
                    Construct a L section of wall with the help of bricks First
                    side of the wall is (31-32)” other side of the wall is
                    (18-19)” (From exterior).
                  </p>
                  <h2> MATERIALS PROVIDED </h2>
                  <p>
                    <ul>
                      <li> Cement- 3kg </li>
                      <li> Sand - 15kg</li>
                      <li> Water source - 4 Litre</li>
                      <li> Trowel - 2 </li>
                      <li> Bricks- 25</li>
                      <li> Hand pan - 2</li>
                    </ul>
                  </p>
                  <h2>Participation</h2>
                  <p>In teams with 4 members each</p>
               
                <h2>DIMENSIONS</h2>
                <p>
                  <ul>
                    <li>First side (31-32)" </li>
                    <li>Other side (18-19)" </li>
                  </ul>
                </p>
                <h2>TIME LIMIT</h2>
                <p>
                  <ul>
                    <li>Briefing Time- 15min</li>
                    <li>Time limit for the task - 45 min</li>
                    <li>Result and checking- 30min</li>
                  </ul>
                </p>
                </div>
                <hr />
              </Tab>
              <Tab label="Structure">
                <div className="child">
                  <h2>Day 1 </h2>
                  <p>Construction (2 hrs.)</p>
                  <p>Examination</p>
                </div>
                <hr />
              </Tab>
              <Tab label="Judgement Criteria">
                <div className="child">
                  <h2>JUDGING CRITERIA</h2>
                  <p>
                    <ul>
                      <li>On the basis of appearance/geometry</li>
                      <li>Placement of Bricks and it's bond alignment</li>
                      <li>90° angle between the corners of wall.</li>
                      <li>Straightness of wall.</li>
                    </ul>
                  </p>
                </div>
                <hr />
              </Tab>
            </Tabs>
          </Fade>
        </Tab>
      </div>
      <Contact data={landingPageData.Contact} />
    </>
  );
};
