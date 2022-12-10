import Tech1 from "../assets/img/icons/Tech1.png";
import Expo1 from "../assets/img/icons/expo1.png";
import Workshop1 from "../assets/img/icons/Workshop1.png";
import Meet1 from "../assets/img/icons/meet1.png";
import Panel1 from "../assets/img/icons/panel1.png";
import Rejoice1 from "../assets/img/icons/Rejoice.png";

export const About = (props) => {
  return (
    <>
      <div id="about">
        <div className="col-xs-14 col-md-6">
          <div className="about-text">
            <h2>About ICI Fest</h2>
            <p>{props.data ? props.data.paragraph : "loading..."}</p>
            <p>
              <h4>
                <i className="fa fa-calendar"></i> Dates:
              </h4>
              26<sup>th</sup> & 27<sup>th</sup> November 2022
            </p>
            <p>
              <h4>
                <i className="fa fa-map-marker"></i> Venue:
              </h4>
              <a href="https://www.google.com/maps/search/SKIT+Jaipur/@26.82226,75.8635785,17z/data=!3m1!4b1">
                SKIT Campus, Ram Nagariya Rd, Shivam Nagar, Jagatpura, Jaipur,
                Rajasthan 302017{" "}
              </a>
            </p>
          </div>
        </div>

        <div className="whatIn">
          <div className="box1">
            <img src={Tech1} alt="" srcset="" />
            <h3>
              Tech Events & <br /> Workshops
            </h3>
          </div>
          <div className="box2">
            <img src={Panel1} alt="" srcset="" />
            <h3>
              चर्चा से समाधान <br /> The Tech Talk
            </h3>
          </div>
          <div className="box3">
            <img src={Workshop1} alt="" srcset="" />
            <h3>
              Cyclothon & <br /> Walkathon
            </h3>
          </div>
          <div className="box4">
            <img src={Expo1} alt="" srcset="" />
            <h3>Civil Expo</h3>
          </div>
          <div className="box5">
            <img src={Meet1} alt="" srcset="" />
            <h3>Masters' Meet</h3>
          </div>
          <div className="box6">
            <img src={Rejoice1} alt="" srcset="" />
            <h3>Rejoice</h3>
          </div>
        </div>
      </div>
    </>
  );
};
