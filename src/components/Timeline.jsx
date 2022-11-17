import React from "react";
import Accordion from "../assets/accordion";
import "../assets/Timeline.css";

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
        <Tab label="26 November 2022">
          <div className="child">
            <Accordion
              title="Inaugural Ceremony"
              time="Time- 10:00 AM"
              content="Unveiling the path for furture opportunities and Peeping into the insights of Civil Engineering Industry"
            />
            <Accordion
              title="Commencement of the Fest"
              time="Time- 10:30 AM"
              content="Initiation of Tech Events and Workshops <br /> Truss Making- 11:30 AM <br/> Bowling Alley- 11:30 AM <br/> Brick-O-Brick- 1:30 PM <br/> Crack the CAD- 1:30 PM"
            />
            <Accordion
              title="चर्चा से समाधान- THE TECH TALK"
              time="Time- 11:30 AM"
              content="Panel Discussions aimed at stimulating minds to identify and rectify Engineeing Problems"
            />
            <Accordion
              title="Masters' Meet"
              time="Time- 2:00 PM"
              content="Meeting the stalwarts for fruitful experience"
            />
            <Accordion
              title="Rejoice"
              time="Time- 3:00 PM"
              content="Tap of non tech in the whirlwind of tech events"
            />
          </div>
        </Tab>
        <Tab label="27 November 2022">
          <div className="child">
            <Accordion
              title="Walkathon and Cyclothon"
              time="Time- 7:00 AM"
              content="Explore the Sportsperson within you"
            />
            <Accordion
              title="Technical Events, Workshop"
              time="Time- 10:00 AM"
              content="Bowling Alley (ROUND 2) <br />
              Joist Kwik (ROUND 2) <br />
              Time- 11:30 AM
              The Hawk Eyes - Treasure Hunt <br />
              Con Q - Quiz <br />"
            />
            <Accordion
              title="Alumni Affairs"
              content="Old bonds coming alive for creating new
              memories"
            />
            <Accordion
              title="Rejoice"
              content="Tap of non tech in the whirlwind of tech events"
            />
            <Accordion
              title="Valedictory Ceremony"
              time="Time- 2:00 PM"
              content="Bidding farewell to the fest with learnings for future"
            />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};
