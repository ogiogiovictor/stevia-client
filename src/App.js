import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Student from './Component/Landing/Student';
import Coach from './Component/Landing/Coach';
import Signup from './Component/Auth/Signup';
import Login from './Component/Auth/Login';
import Success from './Component/Auth/Success';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './Utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <ToastContainer
              position='top-right'
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnVisibilityChange
              draggable
              pauseOnHover
            />
            <ToastContainer />
            <Switch>
              <Route path='/signup' exact component={Signup} />
              <Route path='/success' exact component={Success} />
              <Route path='/coach' exact component={Coach} />
              <Route path='/login' exact component={Login} />
              <Route path='/' exact component={Student} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
