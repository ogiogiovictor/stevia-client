import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Student from './Component/Landing/Student';
import Coach from './Component/Landing/Coach';
import Signup from './Component/Auth/Signup';
import Login from './Component/Auth/Login';
import Success from './Component/Auth/Success';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path='/signup' exact component={Signup} />
            <Route path='/success' exact component={Success} />
            <Route path='/coach' exact component={Coach} />
            <Route path='/login' exact component={Login} />
            <Route path='/' exact component={Student} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
