import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateCoachRoute = ({
  component: Component,
  auth: { isAuthenticated, loading, role: {name} },
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      !isAuthenticated && name !== 'COACH' ? (
        <Redirect to='/login' />
      ) : (
        <Component {...props} />
      )
    }
  />
);

PrivateCoachRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateCoachRoute);
