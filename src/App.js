import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
// import jquery from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css';
// root 
import Home from './Screens/Home'
import Login from './Screens/Login'
import registration from './Screens/registration'


class App extends Component {
  constructor(props) {
    super()
    this.state = {
      data: []
    }
  }

  render() {
    return (
      <div className="container-fluid pl-0 pr-0 overflow-hidden">
        <Router>
          <Route path={'/login'} component={Login} />
          <Route path={'/signup'} component={registration} />
          <Route path={'/home'} component={Home} />
        </Router>
      </div>
    )
  }
}

export default App



// https://bit.ly/2NUaaE4 => dialog example