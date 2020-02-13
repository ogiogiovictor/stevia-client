import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import StudentIndex from './Student';
import CoachesIndex from './Coaches';
import AdminDashboard from './Admin';
import Header from './Layout/Header';
import Topnav from './Layout/Topnav';
import { Maintitle } from '../Maintitle';
import Spinner from '../Spinner/Spinner';
import { getCurrentProfile } from '../../actions/profile';
import { setAlert } from '../../actions/alert';

const Dashboard = ({ getCurrentProfile, auth: { user }, profile:{ profile, loading }, setAlert, }) => {

  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);


  if (loading && profile === null) {
    return <Spinner />;
  }

  let newProfile = null;

  const { dob, state, country, sex, qualitifcation, location } = profile;
  newProfile = { dob, state, country, sex, qualitifcation, location };
  let prof = Object.values(newProfile).every(item => item !== null);
  return !prof && user.currentUser.role.name === 'STUDENT' ? (
    setAlert('You need to complete your profile', 'error'),
    <Redirect to='/dashboard/student/settings' />
  ) : (
    <Fragment>
      {user && user.currentUser.role.name !== 'STUDENT' ? (
      ''
    ) : (
      <Maintitle title='Stevia: Student Dashboard' />
    )}
    {user && user.currentUser.role.name !== 'COACH' ? (
      ''
    ) : (
      <Maintitle title='Stevia: Coach Dashboard' />
    )}
    {user && user.currentUser.role.name !== 'ADMIN' ? (
      ''
    ) : (
      <Maintitle title='Stevia: Admin Dashboard' />
    )}

    <section className='whole_page_wrapper'>
      <Header menu={user && user.menu} />

      <section className='dashboard_body'>
        <Topnav user={user} htitle='Overview' />

        {user && user.currentUser.role.name !== 'STUDENT' ? (
          ''
        ) : (
          <StudentIndex />
        )}
        {user && user.currentUser.role.name !== 'COACH' ? (
          ''
        ) : (
          <CoachesIndex />
        )}
        {user && user.currentUser.role.name !== 'ADMIN' ? (
          ''
        ) : (
          <AdminDashboard />
        )}
      </section>
    </section>
  </Fragment>
  )
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired  
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, setAlert })(Dashboard);
