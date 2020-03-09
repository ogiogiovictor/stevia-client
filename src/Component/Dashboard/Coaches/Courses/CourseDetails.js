import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../../Layout/Header';
import Topnav from '../../Layout/Topnav';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCourses } from '../../../../actions/course';
import Spinner from '../../../Spinner/Spinner';
import CourseDetailsItem from './CourseDetailsItem';

const CourseDetails = ({ getCourses, courses: { courses, loading }, user, match }) => {
    useEffect(() => {
        getCourses();
      }, [getCourses]);
      return loading ? <Spinner /> : (
    <Fragment>
      <section className='whole_page_wrapper'>
        <Header menu={user && user.menu} />
        <section className='dashboard_body'>
          <Topnav user={user} htitle='Course Details' back='Back to Course' />

          <div className='full_row course_banner'>
            <div className='dashboard_center'>
            {courses.length > 0 ? (
                    courses.map(course => (
                    parseInt(match.params.id) === course.id ?
                      <CourseDetailsItem
                        key={course.id}
                        course={course}
                      /> : ''
                    ))
                  ) : (
                    <h4>No Courses Found...</h4>
                  )}
            </div>
          </div>
          <div className='full_row enrolled_student'>
            <div className='dashboard_center'>
              <div className='full_row top_text'>
                <h4>Enrolled Students</h4>
              </div>
              <div className='full_row enrolledStudent_list_n_pagination_wrapper'>
                <div className='full_row student_list_wrapper'>
                  <div className='each_student'>
                    <div className='flex_r_a_center top'>
                      <div className='stud_image'>
                        <img src='../utils/images/40.png' alt='' />
                      </div>
                      <div className='name_n_email'>
                        <p> Ifeanyi Umunnakwe </p>
                        <span> ifeanyiernestict@gmail.com </span>
                      </div>
                    </div>
                    <div className='full_row flex_r_j_center_align_center appointment_card_footer bottom'>
                      <Link to=''> Confirm </Link>
                    </div>
                  </div>
                  <div className='each_student'>
                    <div className='flex_r_a_center top'>
                      <div className='stud_image'>
                        <img src='../utils/images/40.png' alt='' />
                      </div>
                      <div className='name_n_email'>
                        <p> Ifeanyi Umunnakwe </p>
                        <span> ifeanyiernestict@gmail.com </span>
                      </div>
                    </div>
                    <div className='full_row flex_r_j_center_align_center appointment_card_footer bottom'>
                      <Link to=''> Confirm </Link>
                    </div>
                  </div>
                  <div className='each_student'>
                    <div className='flex_r_a_center top'>
                      <div className='stud_image'>
                        <img src='../utils/images/40.png' alt='' />
                      </div>
                      <div className='name_n_email'>
                        <p> Ifeanyi Umunnakwe </p>
                        <span> ifeanyiernestict@gmail.com </span>
                      </div>
                    </div>
                    <div className='full_row flex_r_j_center_align_center appointment_card_footer bottom'>
                      <Link to=''> Confirm </Link>
                    </div>
                  </div>
                  <div className='each_student'>
                    <div className='flex_r_a_center top'>
                      <div className='stud_image'>
                        <img src='../utils/images/40.png' alt='' />
                      </div>
                      <div className='name_n_email'>
                        <p> Ifeanyi Umunnakwe </p>
                        <span> ifeanyiernestict@gmail.com </span>
                      </div>
                    </div>
                    <div className='full_row flex_r_j_center_align_center appointment_card_footer bottom'>
                      <Link to=''> Confirm </Link>
                    </div>
                  </div>
                </div>
                <div className='flex_r_j_end_align_center pagination'>
                  <div>
                    {' '}
                    <Link to='#'>
                      {' '}
                      <i class='fas fa-chevron-left'></i>{' '}
                    </Link>{' '}
                  </div>
                  <div>
                    {' '}
                    <Link to='#' class='active'>
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
                      <i class='fas fa-chevron-right'></i>{' '}
                    </Link>{' '}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section>
            <div className='full_row review_section_wrapper_div'>
              <div className='full_row text-center review_header'>
                <h4>Reviews</h4>
                <p>What students are saying about sessions with Akin</p>
              </div>
              <div className='full_row review_lists'>
                <div className='list_container'>
                  <div className='each_review'>
                    <div className='full_row review_text'>
                      <p>
                        When I started working with Akin, I was miserable in my
                        job. It was emotionally draining, and I felt trapped. I
                        needed someone to help me focus my energy and get the
                        work done well, and fast! Akin did just that! She helped
                        me identify the positive aspects of my current situation
                      </p>
                    </div>
                    <div className='flex_r_a_center image_n_name'>
                      <img src='../utils/images/67.png' alt='' />
                      <div>
                        <p> Lesly Williams </p>
                        <span> MTN </span>
                      </div>
                    </div>
                  </div>
                  <div className='each_review'>
                    <div className='full_row review_text'>
                      <p>
                        When I started working with Akin, I was miserable in my
                        job. It was emotionally draining, and I felt trapped. I
                        needed someone to help me focus my energy and get the
                        work done well, and fast! Akin did just that! She helped
                        me identify the positive aspects of my current situation
                      </p>
                    </div>
                    <div className='flex_r_a_center image_n_name'>
                      <img src='../utils/images/67.png' alt='' />
                      <div>
                        <p> Lesly Williams </p>
                        <span> MTN </span>
                      </div>
                    </div>
                  </div>
                  <div className='each_review'>
                    <div className='full_row review_text'>
                      <p>
                        When I started working with Akin, I was miserable in my
                        job. It was emotionally draining, and I felt trapped. I
                        needed someone to help me focus my energy and get the
                        work done well, and fast! Akin did just that! She helped
                        me identify the positive aspects of my current situation
                      </p>
                    </div>
                    <div className='flex_r_a_center image_n_name'>
                      <img src='../utils/images/67.png' alt='' />
                      <div>
                        <p> Lesly Williams </p>
                        <span> MTN </span>
                      </div>
                    </div>
                  </div>
                  <div className='each_review'>
                    <div className='full_row review_text'>
                      <p>
                        When I started working with Akin, I was miserable in my
                        job. It was emotionally draining, and I felt trapped. I
                        needed someone to help me focus my energy and get the
                        work done well, and fast! Akin did just that! She helped
                        me identify the positive aspects of my current situation
                      </p>
                    </div>
                    <div className='flex_r_a_center image_n_name'>
                      <img src='../utils/images/67.png' alt='' />
                      <div>
                        <p> Lesly Williams </p>
                        <span> MTN </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
    </Fragment>
  );
};

CourseDetails.propTypes = {
  getCourses: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  courses: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  courses: state.courses,
  user: state.auth.user
});

export default connect(mapStateToProps, {getCourses})(CourseDetails);
