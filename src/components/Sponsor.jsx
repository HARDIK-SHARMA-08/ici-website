import React from "react";
import "../assets/Sponsor.css";
import RHB from "../assets/RHB.png";

const Sponsor = (props) => {
  return (
    <div id="Sponsor">
      <div id="Text" className="text-center">
        <div class="Container">
          <div className="col-md-8 col-md-offset-2 sponsor-title">
            <h2 className="Money">In Association with</h2>
      
              <div className="icons-class1">
                {" "}
                <img src={RHB} alt="..." className="association" />
              </div>
        
          </div>
          
          <div className="col-md-8 col-md-offset-2 sponsor-title">
          <h2>Supported by</h2>
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
