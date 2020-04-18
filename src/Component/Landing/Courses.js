import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Topnav from './Topnav';
import { getCoursesLand } from '../../actions/course';
import CourseItem from './CourseItem';

const Courses = ({ getCoursesLand, courses: { coursesland, loading } }) => {
  useEffect(() => {
    getCoursesLand();
  }, [getCoursesLand]);
  return (
    <Fragment>
      <body>
        <Topnav />
        <section className='whole_page_wrapper'>
          <header className='full_row site_header_4_courses'>
            <Header />
            <div className='full_row header_desc_wrapper'>
              <div className='flex_r_j_between_align_center site_center1 mobile_header'>
                <div className='header_desc_left'>
                  <h4>
                    Thousands of courses to fuel <br />
                    and transform your career.
                  </h4>
                  <p>
                    Choose from dozens of courses covering numerous <br />
                    coaching categories like Entrepreneurship, Career <br />
                    Development and much more.
                  </p>
                  <Link to='/signup'>
                    <button className='red_btn'>get started</button>
                  </Link>
                </div>
                <div className='header_desc_right'>
                  <img
                    src={process.env.PUBLIC_URL + 'assets/utils/images/17.png'} alt='' />
                </div>
              </div>
            </div>
          </header>
          <section>
            <div class='full_row courses_section_wrapper_div'>
              <div class='site_center1'>
                <div class='full_row text-center courses_section_header_txt'>
                  <h4>Access all our courses</h4>
                </div>
                <div class='flex_r_j_between course_search_n_category'>
                  <div class='flex_r_a_center course_category'>
                    <div>
                      <h6>Pick Category:</h6>
                    </div>
                    <div class='ml_3 select_wrapper'>
                      <select name='' id='' class='search_select'>
                        <option value=''>All Category</option>
                      </select>
                    </div>
                  </div>
                  <div class='flex_r_j_between_align_center course_search'>
                    <input
                      type='text'
                      name=''
                      id=''
                      placeholder='Search job title and keyword'
                    />
                    <button>
                      <i class='fas fa-search'></i>
                    </button>
                  </div>
                </div>

                <div class='courses_wrapper_div'>
                  {coursesland.length > 0 ? (
                    coursesland.map(course => (
                      <CourseItem
                        key={course.id}
                        course={course}
                        loading={loading}
                      />
                    ))
                  ) : (
                    <h4>{loading ? 'Loading...' : 'No Courses Found...'}</h4>
                  )}
                </div>

                {/* <div class="flex_r_j_center_align_center full_row pagination_div">

                    <div class="active">
                        <a href="#">
                            <i class="fas fa-angle-left"></i>
                        </a>
                    </div>
                    <div class="active">
                        <a href="#">
                            1
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            2
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            3
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            4
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            5
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <i class="fas fa-angle-right"></i>
                        </a>
                    </div>

                </div> */}
              </div>
            </div>
          </section>
          <section>
            <div class='full_row sixth_section_wrapper_div'>
              <div class='site_center1 text-center'>
                <h5>Do you want to become a coach on Stevia?</h5>

                <Link to='/coach'>
                  <button class='black_btn'>Become a coach</button>
                </Link>
              </div>
            </div>
          </section>
          <footer>
            <Footer />
          </footer>
        </section>
      </body>
    </Fragment>
  );
};

Courses.propTypes = {
  getCoursesLand: PropTypes.func.isRequired,
  coursesland: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  courses: state.courses
});

export default connect(mapStateToProps, { getCoursesLand })(Courses);
