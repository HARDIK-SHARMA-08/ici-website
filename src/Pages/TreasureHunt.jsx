import React from "react";
import Navigation from "../components/Navigation";
import JsonData from "../data/data.json";
import { Contact } from "../components/contact";
import "../assets/Events.css";
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
        <h2 className="title">The Hawk Eyes</h2>
        <h3>27 November 2022</h3>
        <h3>Time - 10:00 AM</h3>
        <h2>Registration Fees- ₹100</h2>
        <div className="child">
          <h2>About</h2>
          <p>
            Unleash your inner Sherlock, crack the riddles, find the treasure
            and make yourself win!!
          </p>
        </div>
      </div>
      <hr />
      <Contact data={landingPageData.Contact} />
    </>
  );
};
