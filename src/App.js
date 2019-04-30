import React, { Component } from 'react';

// Style
import './style/App.css';
// Modules
import { MOODLE_URL} from './config.json';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from './Component/NavBar/NavBar';
import Homepage from './Component/Homepage/Homepage';
import LoginCard from './Component/Login/LoginCard';
import LogoutCard from './Component/Login/LogoutCard';
import Home from './Component/Home/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
      <Router>
        <div>
          <Route component={NavBar}/>
          <Switch>
            <Route path='/' exact component={Homepage}/>
            <Route path='/login' component={LoginCard} />
            <Route path='/logout' component={LogoutCard} />
            <Route path='/home' component={Home}/>
            <Route path='/moodle' component={() => { window.location = MOODLE_URL; return null;} }/>
          </Switch>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;