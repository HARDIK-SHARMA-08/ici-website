import React from "react";
import Prize from "../assets/img/prize.png";
import "../assets/css/prize.css";

export const PrizePool = (props) => {
  return (
    <>
      <div id="prize">
        <div className="container">
          <div className="PrizeBg">
            <img src={Prize} alt="" srcset="" className="img-responsive"/>
          </div>
        </div>
      </div>
    </>
  );
};
