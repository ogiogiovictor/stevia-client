import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRouteStudent = ({
  component: Component,
  auth: { isAuthenticated, loading, user },
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      !isAuthenticated && user && user.currentUser.role.name !== 'STUDENT' ? (
        <Redirect to='/login' />
      ) : (
        <Component {...props} />
      )
  
    }
  />
);

PrivateRouteStudent.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRouteStudent);
