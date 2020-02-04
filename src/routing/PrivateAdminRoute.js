import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateAdminRoute = ({
  component: Component,
  auth: { isAuthenticated, loading, role },
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      !isAuthenticated && role !== 'ADMIN' ? (
        <Redirect to='/login' />
      ) : (
        <Component {...props} />
      )
    }
  />
);

PrivateAdminRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateAdminRoute);
