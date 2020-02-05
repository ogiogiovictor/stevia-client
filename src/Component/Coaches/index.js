import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const CoachDashboard = ({ auth: { isAuthenticated, loading, user }, logout }) => {
  return (
    <Fragment>
      <section className='whole_page_wrapper'>
        <aside className='side_nav'>
          <div className='full_row logo_div'>
            <img
              src={process.env.PUBLIC_URL + '../assets/utils/images/48.png'}
              alt=''
            />
          </div>
          <div className='side_nav_wrapper'>
            <Link to='#' className='active'>
              <i className='fab fa-buromobelexperte'></i> Overview
            </Link>
            <Link to='#'>
              <i className='fas fa-award'></i> Courses
            </Link>
            <Link to='#'>
              <i className='far fa-plus-square'></i> Services
            </Link>
            <Link to='#'>
              <i className='far fa-credit-card'></i> Settlement
            </Link>
            <Link to='#'>
              <i className='fas fa-cog'></i> Settings
            </Link>
            <Link onClick={logout} to='#!'>
              <i className='fas fa-sign-out-alt'></i> Logout
            </Link>
          </div>
        </aside>
        <section className='dashboard_body'>
          <div className='full_row top_nav'>
            <div className='dashboard_center'>
              <div className='flex_r_j_between_align_center'>
                <div className='left_side'>
                  <h4>Overview</h4>
                </div>
                <div className='flex_r_j_between_align_center right_side'>
                  <div className='bell'>
                    <i className='far fa-bell'></i>
                  </div>
                  <div className='flex_r_j_between_align_center username'>
                    <span>IU</span>
                    <h6>{user ? `${user.firstname} ${user.lastname}` : ''}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='full_row coach_overview_cards' id='overview_cards'>
            <div className='dashboard_center'>
              <div className='full_row cards_wrapper'>
                <div className='flex_r_a_center'>
                  <div className='left'>
                    <div className='full_row'>
                      <h6>Appointments</h6>
                    </div>
                    <div className='full_row'>
                      <h2>23</h2>
                    </div>
                  </div>
                </div>
                <div className='flex_r_a_center'>
                  <div className='left'>
                    <div className='full_row'>
                      <h6>Courses</h6>
                    </div>
                    <div className='full_row'>
                      <h2>5</h2>
                    </div>
                  </div>
                </div>
                <div className='flex_r_a_center'>
                  <div className='left'>
                    <div className='full_row'>
                      <h6>Total Income</h6>
                    </div>
                    <div className='full_row flex_r'>
                      <h2>
                        <sup>N</sup> 350,650
                      </h2>
                    </div>
                  </div>
                </div>
                <div className='flex_r_a_center'>
                  <div className='left'>
                    <div className='full_row'>
                      <h6>Overall rating</h6>
                    </div>
                    <div className='full_row'>
                      <h2>
                        4.3{' '}
                        <span className='rate_numbers'> ( 43 out of 46) </span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='full_row appointments_part'>
            <div className='dashboard_center'>
              <div className='full_row appointments_top_part'>
                <div className='full_row top'>
                  <h4> Appointments </h4>
                </div>
                <div className='flex_r_j_between_align_center appointments_sortType_n_category'>
                  <div className='left spanToggle'>
                    <span className='active'> Upcoming </span>
                    <span> Ongoing </span>
                    <span> Completed </span>
                  </div>
                  <div className='flex_r_j_end_align_center right'>
                    <div className='text'>
                      <p> Sort by </p>
                    </div>
                    <div className='input'>
                      <select name='' id='' className='search_select'>
                        <option value=''> Date </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className='full_row pending_appointment_container'>
                <div>
                  <div className='full_row card_body'>
                    <div className='flex_r_a_center'>
                      <div className='image'>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            '../assets/utils/images/45.png'
                          }
                          alt=''
                        />
                      </div>
                      <div className='name'>
                        <h4> Strive Masayiwa </h4>
                        <p> Change Managment </p>
                      </div>
                    </div>
                    <div className='full_row note'>
                      <h6> Note </h6>
                      <p>
                        I want to be able to reduce resistance, and increase
                        readiness for change.
                      </p>
                    </div>
                    <div className='full_row channel'>
                      <h4> Communication channel </h4>
                      <p>Zoom</p>
                    </div>
                    <div className='flex_r_j_between_align_center date_top'>
                      <div className='flex_r_a_center'>
                        <div>
                          {' '}
                          <i className='far fa-calendar'></i>{' '}
                        </div>
                        <div>
                          {' '}
                          <span> 16-Dec-2019 </span>{' '}
                        </div>
                      </div>
                      <div className='flex_r_a_center'>
                        <div>
                          {' '}
                          <i className='far fa-clock'></i>{' '}
                        </div>
                        <div>
                          {' '}
                          <span> 2:30 - 3:30 PM </span>{' '}
                        </div>
                      </div>
                    </div>
                    <div className='flex_r_j_between_align_center date_bottom'>
                      <div className='flex_r_a_center'>
                        <div>
                          {' '}
                          <i className='far fa-building'></i>{' '}
                        </div>
                        <div>
                          {' '}
                          <span> 15,200 per hour </span>{' '}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='full_row flex_r_j_center_align_center appointment_card_footer'>
                    <Link to=''> Confirm </Link>
                    <Link to='' className='reschedule'>
                      {' '}
                      Reschedule{' '}
                    </Link>
                  </div>
                </div>
                <div>
                  <div className='full_row card_body'>
                    <div className='flex_r_a_center'>
                      <div className='image'>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            '../assets/utils/images/45.png'
                          }
                          alt=''
                        />
                      </div>
                      <div className='name'>
                        <h4> Strive Masayiwa </h4>
                        <p> Change Managment </p>
                      </div>
                    </div>
                    <div className='full_row note'>
                      <h6> Note </h6>
                      <p>
                        I want to be able to reduce resistance, and increase
                        readiness for change.
                      </p>
                    </div>
                    <div className='full_row channel'>
                      <h4> Communication channel </h4>
                      <p>Zoom</p>
                    </div>
                    <div className='flex_r_j_between_align_center date_top'>
                      <div className='flex_r_a_center'>
                        <div>
                          {' '}
                          <i className='far fa-calendar'></i>{' '}
                        </div>
                        <div>
                          {' '}
                          <span> 16-Dec-2019 </span>{' '}
                        </div>
                      </div>
                      <div className='flex_r_a_center'>
                        <div>
                          {' '}
                          <i className='far fa-clock'></i>{' '}
                        </div>
                        <div>
                          {' '}
                          <span> 2:30 - 3:30 PM </span>{' '}
                        </div>
                      </div>
                    </div>
                    <div className='flex_r_j_between_align_center date_bottom'>
                      <div className='flex_r_a_center'>
                        <div>
                          {' '}
                          <i className='far fa-building'></i>{' '}
                        </div>
                        <div>
                          {' '}
                          <span> 15,200 per hour </span>{' '}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='full_row flex_r_j_center_align_center appointment_card_footer'>
                    <Link to=''> Confirm </Link>
                    <Link to='' className='reschedule'>
                      {' '}
                      Reschedule{' '}
                    </Link>
                  </div>
                </div>
                <div>
                  <div className='full_row card_body'>
                    <div className='flex_r_a_center'>
                      <div className='image'>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            '../assets/utils/images/45.png'
                          }
                          alt=''
                        />
                      </div>
                      <div className='name'>
                        <h4> Strive Masayiwa </h4>
                        <p> Change Managment </p>
                      </div>
                    </div>
                    <div className='full_row note'>
                      <h6> Note </h6>
                      <p>
                        I want to be able to reduce resistance, and increase
                        readiness for change.
                      </p>
                    </div>
                    <div className='full_row channel'>
                      <h4> Communication channel </h4>
                      <p>Zoom</p>
                    </div>
                    <div className='flex_r_j_between_align_center date_top'>
                      <div className='flex_r_a_center'>
                        <div>
                          {' '}
                          <i className='far fa-calendar'></i>{' '}
                        </div>
                        <div>
                          {' '}
                          <span> 16-Dec-2019 </span>{' '}
                        </div>
                      </div>
                      <div className='flex_r_a_center'>
                        <div>
                          {' '}
                          <i className='far fa-clock'></i>{' '}
                        </div>
                        <div>
                          {' '}
                          <span> 2:30 - 3:30 PM </span>{' '}
                        </div>
                      </div>
                    </div>
                    <div className='flex_r_j_between_align_center date_bottom'>
                      <div className='flex_r_a_center'>
                        <div>
                          {' '}
                          <i className='far fa-building'></i>{' '}
                        </div>
                        <div>
                          {' '}
                          <span> 15,200 per hour </span>{' '}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='full_row flex_r_j_center_align_center appointment_card_footer'>
                    <Link to=''> Confirm </Link>
                    <Link to='' className='reschedule'>
                      {' '}
                      Reschedule{' '}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </Fragment>
  );
};

CoachDashboard.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(CoachDashboard);
