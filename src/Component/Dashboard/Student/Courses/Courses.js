import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../../Layout/Header';
import Topnav from '../../Layout/Topnav';
import { getCourses } from '../../../../actions/course';
import CourseItem from './CourseItem';
import Spinner from '../../../Spinner/Spinner';

const StudentCourses = ({
  getCourses,
  courses: { courses, loading },
  user,
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
          <Topnav user={user} htitle='Courses' />
          <div className='full_row student_dashboard_courses_top'>
            <div className='dashboard_center'>
              <div className='full_row flex_r_j_between_align_center top'>
                <div className='flex_r_wrap_align_center left spanToggle'>
                  <span className='active'> Pending </span>
                  <span> Ongoing </span>
                  <span> Completed </span>
                </div>
                <div className='flex_r_j_between_align_center right'>
                  <div className='flex_r_j_between_align_center search_input'>
                    <input
                      type='text'
                      name=''
                      id=''
                      placeholder='Search my courses…'
                    />
                    <button>
                      <i className='fas fa-search'></i>
                    </button>
                  </div>
                  {/* <div className='coach_select'>
                    <select name='' id='' className='search_select'>
                      <option value=''> Coach </option>
                    </select>
                  </div>
                  <div className='cost_select'>
                    <select name='' id='' className='search_select'>
                      <option value=''> Cost </option>
                    </select>
                  </div> */}
                  <Link to='/courses'><button className='black_btn'>New Courses</button></Link>
                </div>
              </div>
            </div>
          </div>
          <div className='full_row course_list_section'>
            <div className='dashboard_center'>
              <div className='full_row course_list_n_pagination_wrapper'>
              <div class="full_row ongoing_course_list_wrapper">
              <div class="each_course">
                  <div class="flex_r_j_between_align_center">
                      <div class="lecturer">
                          <p>
                              By Strive Masayiwa
                          </p>
                      </div>
                  </div>
                  <div class="flex_r_a_center course_icon_n_name">
                      <div class="course_image_wrapper">                                
                          <div class="course_image">
                              <img src={process.env.PUBLIC_URL + '../../assets/utils/images/Bitmap.png'} alt="" />
                          </div>
                      </div>
                      <div class="course_name">
                          <h5>
                              Skillsets to shift your career
                          </h5>                                
                      </div>
                  </div>
                  <div class="full_row course_description">
                      <p>
                          A course for anyone who’s ready 
                          to find their dream job. Covering 
                          everything from resumes to job 
                          applications.
                      </p>
                  </div>
                  <div class="flex_r_j_between_align_center seats_left">
                    <div class="stud_images">
                      <img src={process.env.PUBLIC_URL + '../../assets/utils/images/40.png'} alt="" />
                    </div>
                  </div>
                  <div class="full_row flex_r_j_center_align_center ongoing_course_card_footer">
                    <a href="#course-complete-modal"> Pending </a>                  
                  </div>                       
              </div>
                </div>
                <div className='flex_r_j_end_align_center pagination'>
                  <div>
                    <Link to='#'>
                      <i className='fas fa-chevron-left'></i>
                    </Link>
                  </div>
                  <div>
                    <Link to='#' className='active'>
                      1
                    </Link>
                  </div>
                  <div>
                    <Link to='#'> 2 </Link>
                  </div>
                  <div>
                    <Link to='#'> 3 </Link>
                  </div>
                  <div>
                    <Link to='#'> 4 </Link>
                  </div>
                  <div>
                    <Link to='#'> 5 </Link>
                  </div>
                  <div>
                    <Link to='#'>
                      <i className='fas fa-chevron-right'></i>
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

StudentCourses.propTypes = {
  getCourses: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  courses: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  courses: state.courses,
  user: state.auth.user,
});

export default connect(mapStateToProps, { getCourses })(StudentCourses);
