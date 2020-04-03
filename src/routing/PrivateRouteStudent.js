import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAlert } from '../actions/alert';
import { getCurrentProfile } from '../actions/profile';
import Spinner from '../Component/Spinner/Spinner';

const PrivateRouteStudent = ({
  component: Component,
  auth: { isAuthenticated, loading, user },
  profile: { profile },
  setAlert,
  ...rest
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  let newProfile = null;
  newProfile = {
    dob: profile && profile.dob,
    state: profile && profile.state,
    country: profile && profile.country,
    sex: profile && profile.sex,
    qualitifcation: profile && profile.qualitifcation,
    location: profile && profile.location
  };
  let prof = Object.values(newProfile).every(item => item !== null);

  return loading ? <Spinner /> : (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated && !user  ? (
          <Redirect to='/login' />
        ) : user && user.currentUser.role.name !== 'STUDENT' ? (
          (setAlert('Please Signin has a Student', 'error'),
          (<Redirect to='/dashboard' />))
        ) : profile && !prof ? (
          (setAlert('You need to complete your profile', 'error'),
          (<Redirect to='/dashboard/student/settings' />))
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

PrivateRouteStudent.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, setAlert })(
  PrivateRouteStudent
);
