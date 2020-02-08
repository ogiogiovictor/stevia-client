import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../Spinner/Spinner';
import { getCoachesProfile } from '../../../actions/profile';
import Sidebar from '../Sidebar';
import { Link } from 'react-router-dom';
import CoachItem from './CoachItem'

const Coaches = ({
  getCoachesProfile,
  profile: { coaches, loading },
  user
}) => {
  useEffect(() => {
    getCoachesProfile();
  }, [getCoachesProfile]);
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <section class='whole_page_wrapper'>
            <aside class='side_nav'>
              <div class='full_row flex_r_a_center logo_div'>
                <img
                  src={
                    process.env.PUBLIC_URL + '../../assets/utils/images/34.svg'
                  }
                  alt=''
                />
                <div className='close_sideNav ml_auto'>
                  <i className='far fa-times-circle'></i>
                </div>
              </div>
              <div className='side_nav_wrapper'>
                <Sidebar menu={user && user.menu} />
              </div>
            </aside>
            <section className='dashboard_body'>
              <div className='full_row top_nav'>
                <div className='dashboard_center'>
                  <div className='flex_r_j_between_align_center'>
                    <div className='flex_r_a_center left_side'>
                      <div className='dashboard_sidenav_toggler'>
                        <div className='bars'></div>
                        <div className='bars'></div>
                        <div className='bars'></div>
                      </div>
                      <h4>Coaches</h4>
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
              <div className='full_row student_dashboard_coaches_top'>
                <div className='dashboard_center'>
                  <div className='full_row flex_r_j_between_align_center top'>
                    <div className='flex_r_j_between_align_center search_input'>
                      <input
                        type='text'
                        name=''
                        id=''
                        placeholder='Search courses…'
                      />
                      <button>
                        <i className='fas fa-search'></i>
                      </button>
                    </div>
                    <div className='flex_r_j_end_align_center right'>
                      <div className='Specialization_select'>
                        <select name='' id='' className='search_select'>
                          <option value=''> Specialization </option>
                        </select>
                      </div>
                      <div className='ratings_select'>
                        <select name='' id='' className='search_select'>
                          <option value=''> Ratings </option>
                        </select>
                      </div>
                      <div className='cost_select'>
                        <select name='' id='' className='search_select'>
                          <option value=''> Cost </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className='full_row course_list_section'>
                <div className='dashboard_center'>
                  <div className='full_row course_list_n_pagination_wrapper'>
                    <div className='full_row coaches_list_wrapper'>
                    {coaches.length > 0 ? (coaches.map(coach => 
                            <CoachItem key={coach.id} coach={coach} />
                        )) : 
                        <h4>No Coaches Found...</h4>}
                      </div>

                    <div className='flex_r_j_end_align_center pagination'>
                      <div>
                        {' '}
                        <Link to='#'>
                          {' '}
                          <i className='fas fa-chevron-left'></i>{' '}
                        </Link>{' '}
                      </div>
                      <div>
                        {' '}
                        <Link to='#' className='active'>
                          {' '}
                          1{' '}
                        </Link>{' '}
                      </div>
                      <div>
                        {' '}
                        <Link to='#'> 2 </Link>{' '}
                      </div>
                      <div>
                        {' '}
                        <Link to='#'> 3 </Link>{' '}
                      </div>
                      <div>
                        {' '}
                        <Link to='#'> 4 </Link>{' '}
                      </div>
                      <div>
                        {' '}
                        <Link to='#'> 5 </Link>{' '}
                      </div>
                      <div>
                        {' '}
                        <Link to='#'>
                          {' '}
                          <i className='fas fa-chevron-right'></i>{' '}
                        </Link>{' '}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </Fragment>
      )}
    </Fragment>
  );
};

Coaches.propTypes = {
  getCoachesProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  user: state.auth.user
});

export default connect(mapStateToProps, { getCoachesProfile })(Coaches);
