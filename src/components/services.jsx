import { Fade } from "react-reveal";
export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <Fade duration={1300}>
          <div className="section-title">
            <h2>What's in it for You?</h2>
          </div>
          <div className="row">
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className="col-md-4">
                    {" "}
                    <img src={d.icon} alt="" />
                    <div className="service-desc">
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </Fade>
      </div>
    </div>
  );
};
