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

export const JoistKwik = (props) => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <>
      <Navigation />
      <div id="Events" className="text-center">
      <h2 className="title">Joist Kwik</h2>
        <h3>Time - 11:30 AM </h3>
        <Fade delay="1000ms">
          <div className="container">
            <h2>Registration Fees - ₹200 per Team</h2>
            <Tabs>
              <Tab label="About">
                <div className="child">
                  <h2>PROBLEM STATEMENT</h2>
                  <p>
                    In the city of Jaipur, Narayan Singh Circle foot over bridge
                    is a huge steel bridge over Narayan Singh Road. The bridge
                    is in poor condition and needs to be replaced with a new
                    design. Your group will form an engineering firm that will
                    design and build a model bridge out of popsicle sticks and
                    adhesive.
                  </p>

                  <h2> MATERIALS PROVIDED</h2>
                  <p>
                    <ul>
                      <li> Ice cream sticks (flat). </li>
                      <li> Adhesive(glue). </li>
                      <li>
                        {" "}
                        Extra materials (cutter, ruler, paper clips, dustbin).
                      </li>
                    </ul>
                  </p>
                  <h2>Participation</h2>
                  <p>In teams with 4 members each.</p>
                </div>
                <hr />
              </Tab>
              <Tab label="Structure">
                <div className="child">
                  <h2>Round 1 (Day 1) </h2>
                  <p>
                    <ul>
                      <li>
                        Make the truss in give time [ 2.5 hrs ] submit the
                        model for next round.
                      </li>
                      <li>Material will be provided </li>
                    </ul>
                  </p>
                  <h2>Round 2 (Day 2)</h2>
                  <p>Testing of Model</p>
                </div>
                <hr />
              </Tab>
              <Tab label="Judgement Criteria">
                <div className="child">
                  <h2>JUDGING CRITERIA</h2>
                  <p>
                  Geometry - Size of the bridge should be:
                    <ul>
                      <li>Length - 45-50 cm</li>
                      <li>Width - 10-12 cm</li>
                      <li>Deflection - Load at failure</li>
                      <li>Economy - No of sticks</li>
                    </ul>
                  </p>
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
