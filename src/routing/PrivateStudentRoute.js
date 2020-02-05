import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateStudentRoute = ({
  component: Component,
  auth: { isAuthenticated, loading, role },
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
       role !== 'STUDENT' ? (
        <Redirect to='/login' />
      ) : (
        <Component {...props} />
      )
  
    }
  />
);

PrivateStudentRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateStudentRoute);
