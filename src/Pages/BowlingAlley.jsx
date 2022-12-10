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

export const BowlingAlley = (props) => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  return (
    <>
      <Navigation />
      <div id="Events" className="text-center">
        <Fade>
          <div className="container">
            <Tab>
              <div className="TitleBox">
                <h2 className="title">Bowling Alley</h2>
                <h3 className="info">
                  Date - 26 & 27 November | Time -
                  11:30 AM{" "}
                </h3>
                <h2 className="fee">Registration Fees - ₹200 per Team</h2>
              </div>
              <Tabs>
                <Tab label="About">
                  <div className="child">
                    <h2>PROBLEM STATEMENT</h2>
                    <p>
                      Cast a perfect bowling ball using cement concrete and hit
                      the brick pins aiming the maximum highest score.
                    </p>
                    <h2> MATERIALS PROVIDED</h2>
                    <p>
                      <ul>
                        <li>Cement-3 kg (per ball)</li>
                        <li>Fine Sand-2kg (per ball)</li>
                        <li>Mould (small balls)</li>
                        <li>Water source</li>
                      </ul>
                    </p>
                    <h2>Participation</h2>
                    <p>In teams with 3-4 members each.</p>
                  </div>
                  <hr />
                </Tab>
                <Tab label="Structure">
                  <div className="child">
                    <h2>Round 1 (Day 1)</h2>
                    <p>
                      <ul>
                        <li>
                          Cast the ball in given time (2 hrs.) and leave it for
                          a day to settle.
                        </li>
                      </ul>
                    </p>
                    <h2>Round 2 (Day 2)</h2>
                    <p>
                      <ul>
                        <li>Bowling Event</li>
                        <li>
                          Aim at the bricks arranged in the form of pins and
                          swing your ball through the alley.
                        </li>
                        <li>
                          Each team will get certain no. of chances (3 or more)
                          to hit the pins.
                        </li>
                        <li>The team with maximum score will win.</li>
                      </ul>
                    </p>
                  </div>
                  <hr />
                </Tab>
                <Tab label="Judgement Criteria">
                  <div className="child">
                    <h2>Judgement Criteria</h2>{" "}
                    <p>
                      <ul>
                        <li>
                          10 Pin Bowling The goal of bowling is simple – to
                          knock down as many pins as possible. The more pins you
                          knock down, the more points you score.
                        </li>

                        <li>
                          Your game will consist of 6 frames (12 throws), with
                          each frame consisting of two chances to knock down ten
                          pins.
                        </li>

                        <li>
                          Each pin you knock down earns you a point, while you
                          can also score extra points by hitting “strikes” or
                          “spares”.
                        </li>
                      </ul>
                    </p>
                  </div>
                  <hr />
                </Tab>
              </Tabs>
            </Tab>
          </div>
        </Fade>
      </div>
      <Contact data={landingPageData.Contact} />
    </>
  );
};
