import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ls from "local-storage";

//redux

import "./App.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
// import jquery from 'jquery'
import "bootstrap/dist/css/bootstrap.min.css";
// root
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import registration from "./Screens/registration";
import History from "./Screens/History";
// import Hooks from "../Screens/Hooks"

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      data: []
    };
  }

  render() {
    const token = ls.get("token");
    return (
      <div className="container-fluid pl-0 pr-0 overflow-hidden">
        <Router>
          <Route exact path={"/"} component={Login} />
          <Route exact path={"/signup"} component={registration} />
          <Route exact path={"/home"} component={Home} />
          <Route exact path={"/history"} component={History} />
          {/* <Route exact path={'/hooks'} component={Hooks} /> */}
        </Router>
      </div>
    );
  }
}

export default App;
