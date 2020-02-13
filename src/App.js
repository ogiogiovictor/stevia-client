import React, { Fragment, useEffect } from 'react';
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
import PrivateRoute from './routing/PrivateRoute';
import Dashboard from './Component/Dashboard';
import Alert from './Component/Alert/Alert';
import Studentcoaches from './Component/Dashboard/Student/Coaches';
import CreateProfile from './Component/Dashboard/ProfileSettings/CreateProfile';



if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
        <Router>
          <Fragment>
            <ToastContainer
              position='top-right'
              autoClose={100}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnVisibilityChange
              draggable
              pauseOnHover
            />
            <ToastContainer />
            <Alert />
            <Switch>
              <Route path='/signup' exact component={Signup} />
              <Route path='/success' exact component={Success} />
              <Route path='/coach' exact component={Coach} />
              <Route path='/login' exact component={Login} />
              <PrivateRoute path='/dashboard/student/coaches' exact component={Studentcoaches} />
              <PrivateRoute path='/dashboard/student/settings' exact component={CreateProfile} />
              <PrivateRoute path='/dashboard/coaches/settings' exact component={CreateProfile} />
              <PrivateRoute path='/dashboard' exact component={Dashboard} />
              <PrivateRoute path='/dashboard/student' exact component={Dashboard} />
              <PrivateRoute path='/dashboard/coaches' exact component={Dashboard} />
              <Route path='/' exact component={Student} />
            </Switch>
          </Fragment>
        </Router>
      </Provider>
  );
};

export default App;
