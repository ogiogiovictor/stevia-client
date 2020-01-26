import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Student from './Component/Landing/Student';
import Coach from './Component/Landing/Coach';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path='/coach' exact component={Coach} />
          <Route path='/' exact component={Student} />
        </div>
      </Router>
    );
  }
}

export default App;
