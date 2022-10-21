import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Footer from "./components/footer";
import PortfolioContainer from "./components/PortfolioContainer";

const App = () => 
<Router>
  <PortfolioContainer />
  <Footer />;
</Router>

export default App;
