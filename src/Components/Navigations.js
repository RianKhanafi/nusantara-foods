import React, { Component } from "react";
import { Link } from "react-router-dom";

import Axios from "axios";

class Navigations extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-9  mr-0 pr-0">
          <nav className="navbar navbar-light bg-nav">
            <button
              className="navbar-toggler"
              id="side-toggle"
              type="button"
              data-toggle="collapse"
              data-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            ></button>
            <a className="navbar-brand">Nusantara Food</a>
            <form className="form-inline">
              <span className="fa fa-search"></span>
            </form>
          </nav>
        </div>
        <div className="col-md-3  ml-0 pl-0">
          <nav className="navbar navbar-light bg-nav cart">
            <p className="navbar-brand m-auto">
              Cart <span className="badge badge-primary">{}</span>
            </p>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navigations;
