import { Fade } from "react-reveal";
export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <Fade duration={1300}>
            <div className="col-sm-12 col-md-6">
              {" "}
              <img src="img/about.png" className="img-responsive" alt="" />{" "}
            </div>
          </Fade>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About ICI Fest</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
