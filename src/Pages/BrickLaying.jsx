import React from "react";
import Navigation from "../components/Navigation";
import { Contact } from "../components/contact";
import "../assets/css/Events.css";
import JsonData from "../data/data.json";
import { useState, useEffect } from "react";
import brickEx from "../assets/img/brickex.jpeg";

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
        <div className="container">
          <div className="TitleBox">
            <h2 className="title">Brick - O - Brick</h2>
            <h3 className="info">Date - 26 November | Time - 2:00 PM </h3>
            <h2 className="fee">Registration Fees - ₹200 per Team</h2>
          </div>
        </div>
        <Tabs>
          <Tab label="About">
            <div className="child">
              <h2>PROBLEM STATEMENT</h2>
              <img src={brickEx} alt="" className="img-responsive brick" />
              <p>
                <br />
                Construct an L section of the wall with the help of bricks.{" "}
                <br />
                <ul>
                  Dimensions (Exterior) :-{" "}
                  <li>First side of the wall is (31-32)” </li>
                  <li>Other side of the wall is (18-19)”.</li>
                </ul>
              </p>

              <h2> MATERIALS PROVIDED </h2>
              <p>
                <ul>
                  <li> Cement- 3kg </li>
                  <li> Sand - 15kg</li>
                  <li> Water source - 4 Litre</li>
                  <li> Trowel - 2 </li>
                  <li> Bricks- 25</li>
                  <li> Hand pan - 1</li>
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
              <p>
                <ul>
                  <li>Construction (2 hrs.)</li>
                  <li>Examination</li>
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
                  <li>On the basis of appearance/geometry.</li>
                  <li>Placement of Bricks and it's bond alignment.</li>
                  <li>90° angle between the corners of the wall.</li>
                  <li>Straightness of wall.</li>
                </ul>
              </p>
            </div>
            <hr />
          </Tab>
        </Tabs>
      </div>
      <Contact data={landingPageData.Contact} />
    </>
  );
};
