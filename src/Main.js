import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Timeline } from "./components/Timeline";
import { PrizePool } from "./components/PrizePool";
import Sponsor from "./components/Sponsor";
import JsonData from "./data/data.json";


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
      <PrizePool />
      <hr />
      <Timeline />
      <hr />
      <Sponsor data={landingPageData.Sponsor} />
      <Contact data={landingPageData.Contact} />
    </>
  );
};

export default Main;
