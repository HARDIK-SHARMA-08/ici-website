import React from "react";
import "../assets/Sponsor.css";

const Sponsor = (props) => {
  return (
    <div id="Sponsor">
      <div id="Text" className="text-center">
        <div class="Container">
          <div className="col-md-8 col-md-offset-2 sponsor-title">
            <h2>Sponsors</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p>
          </div>
          <div className="icons-class">
            {props.data
              ? props.data.map((Sponsor) => (
                  <div className="icons">
                    {" "}
                    <img src={Sponsor.img} alt="..." className="team-img" />
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
