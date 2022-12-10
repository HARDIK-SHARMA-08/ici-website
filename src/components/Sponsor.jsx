import React from "react";
import "../assets/css/Sponsor.css";
import RHB from "../assets/img/logo/RHB.png";
import JDA from "../assets/img/logo/JDA.png";
import JK from "../assets/img/logo/jk.webp";

const Sponsor = (props) => {
  return (
    <div id="Sponsor">
      <div id="Text" className="text-center">
        <div class="Container">
          <div className="col-md-8 col-md-offset-2 sponsor-title">
            <h2 className="Money">Title Sponsor</h2>

            <div className="icons-class1">
              {" "}
              <img src={JK} alt="..." className="association" />
            </div>
            <h2>In Association with</h2>

            <div className="icons-class2">
              {" "}
              <img src={RHB} alt="..." className="association" />
              <img src={JDA} alt="..." className="association" />
            </div>
          </div>

          <div className="col-md-8 col-md-offset-2 sponsor-title">
            <h3>Supported by</h3>
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
