import React from "react";
import Accordion from "../assets/accordion";
import "../assets/css/Timeline.css";

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

export const Timeline = (props) => {
  return (
    <div id="Timeline" className="text-center">
      <div className="section-title">
        <h2>Timeline </h2>
      </div>

      <Tabs>
        <Tab label="26 NOVEMBER 2022">
          <div className="child">
            <Accordion
              title="Inaugural Ceremony"
              time="Time: 10:00 AM - 11:00 AM"
              content="Unveiling the path to furture opportunities and peeping into the insights of the Civil Engineering Industry"
            />
            <Accordion
              title="Commencement of the Fest"
              time="Time: 11:30 AM - 12:30 AM"
              content="Joist Kwik <br /> Bowling Alley"
              time2="Time: 12:30 AM - 01:30 AM"
              content2="Workshop"
              time3="Time: 2:00 PM - 03:30 PM"
              content3="Brick-O-Brick <br/> Crack the CAD"
            />
            <Accordion
              title="चर्चा से समाधान- THE TECH TALK"
              time="Time- 11:45 AM - 01:30 PM"
              content="Panel discussion aimed at stimulating minds to identify and rectify Engineeing Problems"
            />
            <Accordion
              title="Masters' Meet"
              time="Time- 2:00 PM - 03:30 PM"
              content="Meeting the stalwarts for a fruitful experience"
            />
            <Accordion
              title="Rejoice"
              time="Time- 3:30 PM onwards"
              content="A Tap of non tech in the whirlwind of tech events"
            />
          </div>
        </Tab>
        <Tab label="27 NOVEMBER 2022">
          <div className="child">
            <Accordion
              title="Cyclothon and Walkathon"
              time="Time- 7:30 AM - 9:00 AM"
              content="Explore the Sportsperson within you"
            />
            <Accordion
              title="Technical Events"
              time="Time- 10:00 AM - 11:00 AM"
              content="Bowling Alley (ROUND 2) <br />
              Joist Kwik (Testing) <br />"
              time2="Time- 10:00 AM - 12:00 AM"
              content2="
              The Hawk Eyes - Treasure Hunt <br />
              Con Q - Quiz"
            />
            <Accordion
              title="Alumni Affairs"
              time="Time- 10:00 AM"
              content="Old bonds coming alive for creating new
              memories"
            />
            <Accordion
              title="Rejoice"
              content="Tap of non tech in the whirlwind of tech events"
            />
            <Accordion
              title="Valedictory Ceremony"
              time="Time- 12:30 PM"
              content="Bidding farewell to the fest with learnings for future"
            />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};
