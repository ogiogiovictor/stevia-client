import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StudentDashboard = props => {
  return (
    <Fragment>
      <section className='whole_page_wrapper'>
        <aside className='side_nav'>
          <div className='full_row flex_r_a_center logo_div'>
            <img
              src={process.env.PUBLIC_URL + '../assets/utils/images/34.svg'}
              alt=''
            />
            <div className='close_sideNav ml_auto'>
              <i className='far fa-times-circle'></i>
            </div>
          </div>
          <div className='side_nav_wrapper'>
            <Link to='#' className='active'>
              <i className='fab fa-buromobelexperte'></i> Overview
            </Link>
            <Link to='#'>
              <i className='fas fa-award'></i> Courses
            </Link>
            <Link to='#'>
              <i className='far fa-id-badge'></i> Find coaches
            </Link>
            <Link to='#'>
              <i className='fas fa-cog'></i> Settings
            </Link>
            <Link to='#'>
              <i className='fas fa-sign-out-alt'></i> Logout
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
                    <h6>Ifeanyi Umunnakwe</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!--. top nav --> */}

          {/* <!-- Overview cards --> */}
          <div className='full_row overview_cards'>
            <div className='dashboard_center'>
              <div className='full_row cards_wrapper'>
                <div className='flex_r_j_between_align_center'>
                  <div className='left'>
                    <h6>Ongoing Courses</h6>
                    <h2>2</h2>
                  </div>
                  <div className='right'>
                    <img
                      src={
                        process.env.PUBLIC_URL + '../assets/utils/images/35.svg'
                      }
                      alt=''
                    />
                  </div>
                </div>
                <div className='flex_r_j_between_align_center'>
                  <div className='left'>
                    <h6>Ongoing Courses</h6>
                    <h2>0</h2>
                  </div>
                  <div className='right'>
                    <img
                      src={
                        process.env.PUBLIC_URL + '../assets/utils/images/38.png'
                      }
                      alt=''
                    />
                  </div>
                </div>
                <div className='flex_r_j_between_align_center'>
                  <div className='left'>
                    <h6>Ongoing Courses</h6>
                    <h2>3</h2>
                  </div>
                  <div className='right'>
                    <img
                      src={
                        process.env.PUBLIC_URL + '../assets/utils/images/36.svg'
                      }
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Appointments Section --> */}
          <div className='full_row appointments_part'>
            <div className='dashboard_center'>
              <div className='full_row flex_r_j_between_align_center top'>
                <div className='left'>
                  <h4>Appointments</h4>
                </div>
                <div className='flex_r_wrap_align_center right spanToggle'>
                  <span className='active'> Pending </span>
                  <span> Ongoing </span>
                  <span> Completed </span>
                </div>
              </div>
              <div className='full_row flex_r_j_center_align_center appointment_container'>
                <div className='empty_content text-center'>
                  <img
                    src={
                      process.env.PUBLIC_URL + '../assets/utils/images/39.png'
                    }
                    alt=''
                  />
                  <p>You have no appointments yet</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </Fragment>
  );
};

StudentDashboard.propTypes = {};

export default StudentDashboard;