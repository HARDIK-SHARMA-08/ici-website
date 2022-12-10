import React from "react";
import Navigation from "../components/Navigation";
import JsonData from "../data/data.json";
import { Contact } from "../components/contact";
import "../assets/css/Events.css";
import { useState, useEffect } from "react";

// class Tabs extends React.Component {
//   state = {
//     activeTab: this.props.children[0].props.label,
//   };
//   changeTab = (tab) => {
//     this.setState({ activeTab: tab });
//   };
//   render() {
//     let content;
//     let buttons = [];
//     return (
//       <div>
//         {React.Children.map(this.props.children, (child) => {
//           buttons.push(child.props.label);
//           if (child.props.label === this.state.activeTab)
//             content = child.props.children;
//         })}

//         <TabButtons
//           activeTab={this.state.activeTab}
//           buttons={buttons}
//           changeTab={this.changeTab}
//         />
//         <div className="tab-content">{content}</div>
//       </div>
//     );
//   }
// }

// const TabButtons = ({ buttons, changeTab, activeTab }) => {
//   return (
//     <div className="tab-buttons">
//       {buttons.map((button) => {
//         return (
//           <button
//             className={button === activeTab ? "active" : ""}
//             onClick={() => changeTab(button)}
//           >
//             {button}
//           </button>
//         );
//       })}
//     </div>
//   );
// };

// const Tab = (props) => {
//   return <React.Fragment>{props.children}</React.Fragment>;
// };

export const HUnt = (props) => {
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
            <h2 className="title">The Hawk Eyes</h2>
            <h3 className="info">Date - 27 November 2022 | Time - 10:00 AM</h3>
            <h2 className="fee">Registration Fees - ₹100 per Team</h2>
          </div>
        </div>
        <div className="child">
          <h2>About</h2>
          <p>
            Unleash your inner Sherlock, crack the riddles, find the treasure
            and make yourself win!!
          </p>

          <h2> RULES </h2>
          <p>
            <ul>
              <li> Maximum 4 participants in a team.</li>
              <li>
                {" "}
                Mobile phones of all team members will be submitted to
                coordinators before starting the hunt.
              </li>
              <li>
                {" "}
                All team members need to stay together for the entire duration
                of the game and cannot split in smaller groups.
              </li>
              <li>
                Any damage to college properties during the search for clues
                will result in disqualification of the team.
              </li>
              <li>
                Forbidden areas will be informed before the start of the event
                and teams are requested to stay within the college premises.
              </li>
              Note - Team members are suggested to carry a diary and pen during
              the hunt for convinience.
            </ul>
          </p>
        </div>
      </div>
      <hr />
      <Contact data={landingPageData.Contact} />
    </>
  );
};
