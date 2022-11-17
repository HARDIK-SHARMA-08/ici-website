import Main from "./Main";
import "./App.css";
import SmoothScroll from "smooth-scroll";
import ScrollToTop from "./assets/ScrollToTop";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Events } from "./Pages/Events";
import { CracktheCAD } from "./Pages/CracktheCAD";
import { BrickLaying } from "./Pages/BrickLaying";
import { BowlingAlley } from "./Pages/BowlingAlley";
import { AboutUs } from "./Pages/AboutUs";
import { RegisterNow } from "./Pages/RegisterNow";
import { JoistKwik } from "./Pages/JoistKwik";
import { Cyclothon } from "./Pages/Cyclothon";
import { Workshop } from "./Pages/Workshop";
import { Quiz } from "./Pages/ConQ";
import { HUnt } from "./Pages/TreasureHunt";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 800,
  speedAsDuration: true,
});

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/events" component={Events} />
          <Route path="/crack-the-cad" component={CracktheCAD} />
          <Route path="/joist-kwik" component={JoistKwik} />
          <Route path="/brick-o-brick" component={BrickLaying} />
          <Route path="/bowling-alley" component={BowlingAlley} />
          <Route path="/cyclothon" component={Cyclothon} />
          <Route path="/workshop" component={Workshop} />
          <Route path="/ConQ" component={Quiz} />
          <Route path="/the-hawk-eyes" component={HUnt} />
          <Route path="/register-now" component={RegisterNow} />
          <Route path="/about" component={AboutUs} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
