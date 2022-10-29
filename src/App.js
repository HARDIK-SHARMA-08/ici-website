import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import { Header } from "./components/Header";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Contact } from "./components/contact";
import { Team } from "./components/Team";
import { Timeline } from "./components/Timeline";
import Sponsor from "./components/Sponsor";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});


const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Timeline />
      <Team data={landingPageData.Team}/>
      <Sponsor data={landingPageData.Sponsor} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
