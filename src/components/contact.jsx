export const Contact = (props) => {
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="contact-item">
          <h2>CONTACT US</h2>
            <div className="contact">
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Address
                  </span>
                  <a href="https://www.google.com/maps/search/SKIT+Jaipur/@26.82226,75.8635785,17z/data=!3m1!4b1">
                    {props.data ? props.data.address : "loading"}
                  </a>
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Phone{" "}
                  </span>
                  <a href="tel:+918278631943 ">
                    {props.data ? props.data.phone : "loading"}
                  </a>
                  <br />
                  <a href="tel:+917742149493 ">
                    {props.data ? props.data.phone1 : "loading"}
                  </a>
                  <br />
                  <a href="tel:+919376343101">
                    {props.data ? props.data.phone2 : "loading"}
                  </a>
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> Email
                  </span>{" "}
                  <a href="mailto:ici@skit.ac.in" rel="nofollow">
                    {" "}
                    {props.data ? props.data.email : "loading"}{" "}
                  </a>
                </p>
              </div>
            </div>
          </div>
          {/* <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data ? props.data.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2022 Copyright by SKIT Jaipur. Design by{" "}
            <a
              href="https://www.linkedin.com/in/hardik-sharma8/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hardik Sharma
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
