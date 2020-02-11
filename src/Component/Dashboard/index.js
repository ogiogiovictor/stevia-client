import React, { Fragment, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { getCurrentProfile } from '../../actions/profile';

import Sidebar from './Sidebar';
import Spinner from '../Spinner/Spinner';
import { setAlert } from '../../actions/alert';
import StudentIndex from './Student';
import CoachesIndex from './Coaches';
import AdminDashboard from './Admin';


const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
  setAlert,
  logout
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  let newProfile = null;

  if (loading && profile === null) {
    return <Spinner />;
  }
  const { dob, state, country, sex, qualitifcation, location } = profile;
  newProfile = { dob, state, country, sex, qualitifcation, location };
  let prof = Object.values(newProfile).every(item => item !== null);
  return !prof && user.currentUser.role.name === 'STUDENT' ? (
    setAlert('You need to complete your profile', 'error'),
    <Redirect to='/dashboard/student/settings' />
  ) : (
    <Fragment>
      <section className='whole_page_wrapper'>
        <aside className='side_nav'>
          <div className='full_row flex_r_a_center logo_div'>
            {user && user.currentUser.role.name !== 'STUDENT' ? (
              ''
            ) : (
              <Link to='/dashboard'>
                <img
                  src={process.env.PUBLIC_URL + '../assets/utils/images/34.svg'}
                  alt=''
                />
              </Link>
            )}
            {user && user.currentUser.role.name !== 'COACH' ? (
              ''
            ) : (
              <Link to='/dashboard'>
              <img
                src={process.env.PUBLIC_URL + '../assets/utils/images/48.png'}
                alt=''
              />
              </Link>
            )}
            {user && user.currentUser.role.name !== 'ADMIN' ? (
              ''
            ) : (
              <Link to='/dashboard'>
              <img
                src={process.env.PUBLIC_URL + '../assets/utils/images/51.png'}
                alt=''
              />
              </Link>
            )}

            <div className='close_sideNav ml_auto'>
              <i className='far fa-times-circle'></i>
            </div>
          </div>
          <div className='side_nav_wrapper'>
            <Sidebar menu={user ? user.menu : ''} />
            <Link onClick={logout} to='/#!'>
              <i className='fas fa-sign-out-alt'> </i> N Logout
            </Link>
          </div>
        </aside>
        <section className='dashboard_body'>
          {/* {<!-- top nav -->} */}
          <div className='full_row top_nav'>
            <div className='dashboard_center'>
              <div className='flex_r_j_between_align_center'>
                <div className='flex_r_a_center left_side'>
                  <div className='dashboard_sidenav_toggler'>
                    <div className='bars'></div>
                    <div className='bars'></div>
                    <div className='bars'></div>
                  </div>
                  <h4>Overview</h4>
                </div>
                <div className='flex_r_j_between_align_center right_side'>
                  <div className='bell'>
                    <i className='far fa-bell'></i>
                  </div>
                  <div className='flex_r_j_between_align_center username'>
                    <span>IU</span>
                    <h6>
                      {user && user.currentUser.firstname}{' '}
                      {user && user.currentUser.lastname}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--. top nav --> */}
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
  );
};

Dashboard.propTypes = {
  logout: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  setAlert: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, logout, setAlert })(
  Dashboard
);
