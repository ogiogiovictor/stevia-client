import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../../Layout/Header';
import Topnav from '../../Layout/Topnav';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCourses } from '../../../../actions/course';
import Spinner from '../../../Spinner/Spinner';
import CourseDetailsItem from './CourseDetailsItem';

const CourseDetails = ({
  getCourses,
  courses: { courses, loading },
  user,
  match
}) => {
  useEffect(() => {
    getCourses();
  }, [getCourses]);
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <section className='whole_page_wrapper'>
        <Header menu={user && user.menu} />
        <section className='dashboard_body'>
          <Topnav user={user} htitle='Course Details' back='Back to Course' />

          <div className='full_row course_banner'>
            <div className='dashboard_center'>
              {courses.length > 0 ? (
                courses.map(course =>
                  parseInt(match.params.id) === course.id ? (
                    <CourseDetailsItem key={course.id} course={course} />
                  ) : (
                    ''
                  )
                )
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
                <div></div>
                <div className='full_row admin_dashboard_coaches_top'>
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
                        <div className='sort_text'>
                          <p>Sort by</p>
                        </div>
                        <div className='sort_type'>
                          <select name='' id='' className='search_select'>
                            <option value=''> Date </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='full_row table_div_section'>
                  <div className='dashboard_center'>
                    <div className='full_row table_div'>
                      <table>
                        <thead>
                          <tr>
                            <th> Recipient </th>
                            <th> Phone Number </th>
                            <th> Email Address </th>
                            <th> Date Joined </th>
                            <th>Location</th>
                            <th> </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className='flex_r_a_center recipient'>
                              <img src='../utils/images/57.png' alt='' />
                              <span> Strive Masayiwa </span>
                            </td>
                            <td> 07074983993 </td>
                            <td> strivemas@gmail.com </td>
                            <td> 24- June - 1992 </td>
                            <td> Abuja </td>
                            <td className='action'>
                              <i className='fas fa-align-right'></i>
                              <div className='action_dropdown'>
                                <Link to=''> View Details </Link>
                                <Link to=''> Approve Registration </Link>
                                <Link to='' className='delete'>
                                  {' '}
                                  Delete{' '}
                                </Link>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className='flex_r_a_center recipient'>
                              <img src='../utils/images/58.png' alt='' />
                              <span> Strive Masayiwa </span>
                            </td>
                            <td> 07074983993 </td>
                            <td> strivemas@gmail.com </td>
                            <td> 24- June - 1992 </td>
                            <td> Abuja </td>
                            <td className='action'>
                              <i className='fas fa-align-right'></i>
                              <div className='action_dropdown'>
                                <Link to=''> View Details </Link>
                                <Link to=''> Approve Registration </Link>
                                <Link to='' className='delete'>
                                  {' '}
                                  Delete{' '}
                                </Link>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className='flex_r_a_center recipient'>
                              <img src='../utils/images/59.png' alt='' />
                              <span> Strive Masayiwa </span>
                            </td>
                            <td> 07074983993 </td>
                            <td> strivemas@gmail.com </td>
                            <td> 24- June - 1992 </td>
                            <td> Abuja </td>
                            <td className='action'>
                              <i className='fas fa-align-right'></i>
                              <div className='action_dropdown'>
                                <Link to=''> View Details </Link>
                                <Link to=''> Approve Registration </Link>
                                <Link to='' className='delete'>
                                  {' '}
                                  Delete{' '}
                                </Link>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
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

export default connect(mapStateToProps, { getCourses })(CourseDetails);
