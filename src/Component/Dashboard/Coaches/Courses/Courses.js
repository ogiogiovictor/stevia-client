import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../../Layout/Header';
import Topnav from '../../Layout/Topnav';
import { getCourses } from '../../../../actions/course';
import CourseItem from './CourseItem';
import Spinner from '../../../Spinner/Spinner';

const Courses = ({ getCourses, courses: { courses, loading }, user }) => {
  useEffect(() => {
    getCourses();
  }, [getCourses]);
  return loading ? <Spinner /> : (
    <Fragment>
      <section className='whole_page_wrapper'>
        <Header menu={user && user.menu} />
        <section className='dashboard_body'>
          <Topnav user={user} htitle='Courses' />
          <div className='full_row coach_dashboard_courses_top'>
            <div className='dashboard_center'>
              <div className='full_row flex_r_j_end_align_center create_course_btn_div'>
                <Link to='/dashboard/coaches/courses/create'>
                <button className='black_btn'>create course</button>
                </Link>
              </div>
              <div className='full_row flex_r_j_between_align_center top'>
                <div className='flex_r_j_between_align_center left spanToggle'>
                  <span className='active'> Active </span>
                  <span> Completed </span>
                  <span> Past </span>
                </div>
                <div className='flex_r_j_end_align_center right'>
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
                  <div className='sort_text'>
                    <p> Sort by </p>
                  </div>
                  <div className='cost_select'>
                    <select name='' id='' className='search_select'>
                      <option value=''> Date </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='full_row course_list_section'>
            <div className='dashboard_center'>
              <div className='full_row course_list_n_pagination_wrapper'>
                <div className='full_row course_list_wrapper'>
                  {courses.length > 0 ? (
                    courses.map(course => (
                      <CourseItem
                        key={course.id}
                        //   service={services.find(service => service.id === coachservice.service_id)}
                        course={course}
                      />
                    ))
                  ) : (
                    <h4>No Services Found...</h4>
                  )}
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
  );
};

Courses.propTypes = {
  getCourses: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  courses: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  courses: state.courses,
  user: state.auth.user
});

export default connect(mapStateToProps, { getCourses })(Courses);
