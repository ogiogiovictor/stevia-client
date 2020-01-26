import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Student from './Component/Landing/Student';
import Coach from './Component/Landing/Coach';
import Login from './Component/Auth/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
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
