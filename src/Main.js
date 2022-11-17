import { useState, useEffect } from "react";
import JsonData from "./data/data.json";
import Navigation from "./components/Navigation";
import  Header  from "./components/Header";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Timeline } from "./components/Timeline";
import Sponsor from "./components/Sponsor";

const Main = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <hr />
      <Timeline />
      <hr />
      <Sponsor data={landingPageData.Sponsor} />
      <Contact data={landingPageData.Contact} />
    </>
  );
};

export default Main;
