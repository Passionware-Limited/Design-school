import React from "react";
import Home from "./screens/home";
import Graphic from "./screens/graphic";
import Seminars from "./screens/seminars";
import { Footer } from "./components/Footer";

import { Navigation } from "./components/Navigation";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { css } from "emotion";
import variables from "./config/style-variables";

const globalStyling = css`
  font-family: ${variables.fonts.$primaryFont};
`;

const AppRouter = () => (
  <Router>
    <div className={globalStyling}>
      <Navigation />
      <Route path="/" exact component={Home} />
      <Route path="/graphic" exact component={Graphic} />
      <Route path="/seminars" exact component={Seminars} />
      <Footer />
    </div>
  </Router>
);

export default AppRouter;
