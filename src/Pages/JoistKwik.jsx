import React from "react";
import Navigation from "../components/Navigation";
import JsonData from "../data/data.json";
import { Contact } from "../components/contact";
import "../assets/css/Events.css";
import { useState, useEffect } from "react";
import { Fade } from "react-reveal";
import truss from "../assets/img/img.png";

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
      <Fade delay="1000ms">
        <div id="Events" className="text-center">
          <div className="container">
            <div className="TitleBox">
              <h2 className="title">Joist Kwik</h2>
              <h3 className="info">Date - 26 November | Time - 11:30 AM </h3>
              <h2 className="fee">Registration Fees - ₹200 per Team</h2>
            </div>
          </div>
          <Tabs>
            <Tab label="About">
              <div className="child">
                <h2>PROBLEM STATEMENT</h2>
                <img src={truss} alt="" className="img-responsive" />
                <p>
                  In the city of Jaipur, the Narayan Singh Circle foot over
                  bridge is a huge steel bridge over Narayan Singh Road. The
                  bridge is in poor condition and needs to be replaced with a
                  new design. Your group will form an engineering firm that will
                  design and build a model bridge out of popsicle sticks and
                  adhesive. The span of the bridge should be of 45cm to 50cm
                  with an additional 5cm on either side. The width of the bridge
                  should be of 11cm to 12cm.
                </p>

                <h2> MATERIALS PROVIDED </h2>
                <p>
                  <ul>
                    <li> Ice cream sticks (flat). </li>
                    <li> Adhesive(glue). </li>
                    <li> Extra materials (Cutter, Ruler, Paper clips)</li>
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
                      Make the truss in given time of 2.5 hrs. Submit the model
                      for next round.
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
                    <li>Economy - No. of sticks</li>
                  </ul>
                </p>
              </div>
              <hr />
            </Tab>
          </Tabs>
        </div>
      </Fade>
      <Contact data={landingPageData.Contact} />
    </>
  );
};
