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
import PrivateRouteStudent from './routing/PrivateRouteStudent';
import Dashboard from './Component/Dashboard';
import Alert from './Component/Alert/Alert';
import Studentcoaches from './Component/Dashboard/Student//Coaches/Coaches';
import StudentCourses from './Component/Dashboard/Student/Courses/Courses';
import CreateProfile from './Component/Dashboard/ProfileSettings/CreateProfile';
import AdminServices from './Component/Dashboard/Admin/Services/Services';
import CoachServices from './Component/Dashboard/Coaches/Services/CoachServices';
import Courses from './Component/Dashboard/Coaches/Courses/Courses';
import CreateCourse from './Component/Dashboard/Coaches/Courses/CreateCourse';
import PostaJob from './Component/Dashboard/Recruiters/PostaJob';
import Overview from './Component/Dashboard/Recruiters';
import { loadProgressBar } from 'axios-progress-bar';
import CoachCourseDetails from './Component/Dashboard/Coaches/Courses/CourseDetails';
import CoachDetails from './Component/Dashboard/Student/Coaches/CoachDetails';
import BookCoach from './Component/Dashboard/Student/Coaches/BookCoach';
import { NotFoundPage } from './Component/Landing/NotFoundPage';
import Terms from './Component/Landing/Terms';
import Aboutus from './Component/Landing/Aboutus';
import Faq from './Component/Landing/Faq';
import Contact from './Component/Landing/Contact';
import CoachesLand from './Component/Landing/Coaches';
import CoursesLand from './Component/Landing/Courses';
import CoursesDetailsLand from './Component/Landing/CourseDetails';
import LandJobs from './Component/Landing/Jobs';
import LandJobDetails from './Component/Landing/JobDetails';
import ViewJobs from './Component/Dashboard/Recruiters/ViewJobs';
import ScrollToTop from './Component/ScrollToTop';
import Enrol from './Component/Dashboard/Student/Courses/Enrol';
import PostJobLand from './Component/Landing/PostAJob';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
    loadProgressBar();
  }, []);

  return (
    <Provider store={store}>
      <Router forceRefresh={true}>
        <ScrollToTop>
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
              <PrivateRouteStudent
                path='/dashboard/student/coaches'
                exact
                component={Studentcoaches}
              />
              <PrivateRouteStudent
                path='/dashboard/student/coaches/book/:id'
                exact
                component={BookCoach}
              />
              <PrivateRoute
                path='/dashboard/admin/services'
                exact
                component={AdminServices}
              />
              <PrivateRoute
                path='/dashboard/coaches/services'
                exact
                component={CoachServices}
              />
              <PrivateRoute
                path='/dashboard/coaches/courses'
                exact
                component={Courses}
              />
              <PrivateRoute
                path='/dashboard/coaches/courses/details/:id'
                exact
                component={CoachCourseDetails}
              />
              <PrivateRouteStudent
                path='/dashboard/student/coaches/:id'
                exact
                component={CoachDetails}
              />
              <PrivateRouteStudent
                path='/dashboard/student/courses'
                exact
                component={StudentCourses}
              />
              <PrivateRouteStudent
                path='/dashboard/student/courses/enrol/:id'
                exact
                component={Enrol}
              />
              <PrivateRoute
                path='/dashboard/coaches/courses/create'
                exact
                component={CreateCourse}
              />
              <PrivateRoute
                path='/dashboard/student/settings'
                exact
                component={CreateProfile}
              />
              <PrivateRoute
                path='/dashboard/coaches/settings'
                exact
                component={CreateProfile}
              />
              <PrivateRoute
                path='/dashboard/recruiter/postajob'
                exact
                component={PostaJob}
              />
              <PrivateRoute
                path='/dashboard/recruiter/overview'
                exact
                component={Overview}
              />
              <PrivateRoute
                path='/dashboard/recruiter/viewjobs'
                exact
                component={ViewJobs}
              />
              <PrivateRoute
                path='/dashboard/admin/settings'
                exact
                component={CreateProfile}
              />
              <PrivateRouteStudent
                path='/dashboard/student/overview'
                exact
                component={Dashboard}
              />
              <PrivateRoute
                path='/dashboard/coaches/overview'
                exact
                component={Dashboard}
              />
              <PrivateRoute
                path='/dashboard/admin'
                exact
                component={Dashboard}
              />
              <PrivateRoute path='/logout' exact component={Dashboard} />
              <PrivateRoute path='/dashboard' exact component={Dashboard} />
              <Route path='/terms' exact component={Terms} />
              <Route path='/postjobs' exact component={PostJobLand} />
              <Route path='/aboutus' exact component={Aboutus} />
              <Route path='/faq' exact component={Faq} />
              <Route path='/contact' exact component={Contact} />
              <Route path='/coaches' exact component={CoachesLand} />
              <Route path='/courses' exact component={CoursesLand} />
              <Route path='/courses/details/:id' exact component={CoursesDetailsLand} />
              <Route path='/jobs' exact component={LandJobs} />
              <Route
                path='/jobs/details/:id'
                exact
                component={LandJobDetails}
              />
              <Route path='/' exact component={Student} />
              <Route path='*' component={NotFoundPage} />
            </Switch>
          </Fragment>
        </ScrollToTop>
      </Router>
    </Provider>
  );
};

export default App;
