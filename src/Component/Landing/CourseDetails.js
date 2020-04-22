import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Topnav from './Topnav';
import { getCoursesLand } from '../../actions/course';
import { connect } from 'react-redux';
import CourseItem from './CourseItem';

const CourseDetails = ({
  getCoursesLand,
  courses: { coursesland, loading },
  match,
}) => {
  useEffect(() => {
    getCoursesLand();
  }, [getCoursesLand]);

  const course = coursesland.find(({ id }) => id === parseInt(match.params.id));
  const coachcourses = coursesland.filter(e => e.id !== parseInt(match.params.id));
  return (
    <Fragment>
      <body>
        <Topnav />
        <section className='whole_page_wrapper'>
          <Header />
          <section>
            <div className='full_row course_details_titlePart_wrapper'>
              <div className='site_center1'>
                <div className='full_row course_details_titlePart'>
                  <div className='full_row backToCourses'>
                    <Link to='/courses'>
                      <i className='fas fa-angle-left'></i>
                      Back to Courses
                    </Link>
                  </div>
                  <div className='flex_r_j_between_align_center course_name_and_signup'>
                    <div className='course_name_and_excerpt'>
                      <h3>{course && course.title}</h3>
                      <p>{course && course.brief_description}</p>
                    </div>
                    <Link
                      to={`/dashboard/student/courses/enrol/${
                        course && course.id
                      }`}
                    >
                      <button className='red_btn'>Enrol Now</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className='full_row scroll_navigator'>
              <div className='flex_r_j_center_align_center scroll_navigator_link_container'>
                <Link to='#overview'> Overview </Link>
                <Link to='#lesson'> Lesson </Link>
                <Link to='#testimonails'> Testimonials </Link>
                <Link to='#courses'> Courses </Link>
              </div>
            </div>
          </section>
          <section id='overview'>
            <div className='full_row course_image_and_duration'>
              <div className='site_center1'>
                <div
                  className='full_row course_image'
                  id='course_details_image'
                >
                  <img
                    src={`https://kyc.c-ileasing.com/stevia/images/courses/${
                      course && course.image
                    }`}
                    alt=''
                  />
                </div>
                <div className='course_duration_and_price'>
                  <div className='full_row each_div'>
                    <div>
                      <p className='top'>Duration</p>
                      <p className='bottom'>
                        {course && course.course_duration}
                      </p>
                    </div>
                    <div>
                      <p className='top'>Price</p>
                      <p className='bottom'>
                        ₦ {course && course.price_per_session}
                      </p>
                    </div>
                    <div>
                      <p className='top'>Class Ratings</p>
                      <p className='bottom'>4.5/5.0</p>
                    </div>
                    <div>
                      <p className='top'>Total Students</p>
                      <p className='bottom'>{course && course.no_of_student}</p>
                    </div>
                    <div>
                      <p className='top'>Class Channel</p>
                      <p className='bottom'>
                        {course && course.medium_of_communication}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className='full_row course_full_desc_main_section'>
              <div className='site_center1'>
                <div className='course_full_desc_main_wrapper'>
                  <div className='left_side'>
                    <div className='full_row course_video_container'>
                      <video width='100%' height='100%' controls>
                        <source
                          src={course && course.youtube_video_preview}
                          type='video/mp4'
                        />
                        <source
                          src={course && course.youtube_video_preview}
                          type='video/ogg'
                        />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <div className='full_row course_description_container'>
                      <div className='full_row course_desc_header_text'>
                        <h3>Course Description</h3>
                      </div>
                      <div className='full_row date_and_duration_of_course'>
                        <p className='course_date'>
                          Class Starting: <span>{course && course.date} </span>
                        </p>
                        <p className='course_time'>
                          Time: <span>{course && course.from_time}</span>
                        </p>
                      </div>
                      <div className='full_row course_descriptions'>
                        <p>{course && course.course_description}</p>
                      </div>
                    </div>

                    <div
                      className='full_row course_lessons_container'
                      id='lesson'
                    >
                      <div className='full_row header'>
                        <h4>Lessons</h4>
                        <p>
                          <Link href='#'> Login </Link> or{' '}
                          <Link href='#'> Signup </Link> for FREE and get full
                          access to these and thousands of other courses
                        </p>
                      </div>
                      <div className='full_row flex_c each_lesson_wrapper'>
                        <div className='flex_r each_lesson'>
                          <div>
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                '../../assets/utils/images/play-circle.png'
                              }
                              alt=''
                            />
                          </div>
                          <div className='flex_c lesson_duration_and_time'>
                            <div className='lesson_description'>
                              <p className=''>
                                Pellentesque nulla augue, egestas nec tincidunt
                                et, rhoncus a erat. Phasellu
                              </p>
                            </div>
                            <div className='lesson_duration'>
                              <p className=''>50:45</p>
                            </div>
                          </div>
                        </div>
                        <div className='flex_r each_lesson'>
                          <div>
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                '../../assets/utils/images/play-circle.png'
                              }
                              alt=''
                            />
                          </div>
                          <div className='flex_c lesson_duration_and_time'>
                            <div className='lesson_description'>
                              <p className=''>
                                Pellentesque nulla augue, egestas nec tincidunt
                                et, rhoncus a erat. Phasellu
                              </p>
                            </div>
                            <div className='lesson_duration'>
                              <p className=''>50:45</p>
                            </div>
                          </div>
                        </div>
                        <div className='flex_r each_lesson'>
                          <div>
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                '../../assets/utils/images/play-circle.png'
                              }
                              alt=''
                            />
                          </div>
                          <div className='flex_c lesson_duration_and_time'>
                            <div className='lesson_description'>
                              <p className=''>
                                Pellentesque nulla augue, egestas nec tincidunt
                                et, rhoncus a erat. Phasellu
                              </p>
                            </div>
                            <div className='lesson_duration'>
                              <p className=''>50:45</p>
                            </div>
                          </div>
                        </div>
                        <div className='flex_r each_lesson'>
                          <div>
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                '../../assets/utils/images/play-circle.png'
                              }
                              alt=''
                            />
                          </div>
                          <div className='flex_c lesson_duration_and_time'>
                            <div className='lesson_description'>
                              <p className=''>
                                Pellentesque nulla augue, egestas nec tincidunt
                                et, rhoncus a erat. Phasellu
                              </p>
                            </div>
                            <div className='lesson_duration'>
                              <p className=''>50:45</p>
                            </div>
                          </div>
                        </div>
                        <div className='flex_r each_lesson'>
                          <div>
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                '../../assets/utils/images/play-circle.png'
                              }
                              alt=''
                            />
                          </div>
                          <div className='flex_c lesson_duration_and_time'>
                            <div className='lesson_description'>
                              <p className=''>
                                Pellentesque nulla augue, egestas nec tincidunt
                                et, rhoncus a erat. Phasellu
                              </p>
                            </div>
                            <div className='lesson_duration'>
                              <p className=''>50:45</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='right_side'>
                    <div className='full_row topics_covered'>
                      <div className='full_row right_side_headings'>
                        <h2>Topics Covered</h2>
                      </div>
                      <div className='flex_r_wrap_j_center_align_center topics_covered_div'>
                        <span> Career Changers </span>
                        <span> Enterprenuership </span>
                        <span> New Enterprenuership </span>
                        <span> Career Changers </span>
                        <span> Enterprenuership </span>
                      </div>
                    </div>
                    <div className='full_row className_materials'>
                      <div className='full_row right_side_headings'>
                        <h2>Class Material</h2>
                      </div>
                      <div className='flex_c each_material_wrapper'>
                        <div className='flex_r_j_between_align_center each_material'>
                          <span className='material_name'>
                            {' '}
                            Suspendisse laoreet{' '}
                          </span>
                          <i className='far fa-arrow-alt-circle-down'></i>
                        </div>
                        <div className='flex_r_j_between_align_center each_material'>
                          <span className='material_name'>
                            {' '}
                            Suspendisse laoreet{' '}
                          </span>
                          <i className='far fa-arrow-alt-circle-down'></i>
                        </div>
                        <div className='flex_r_j_between_align_center each_material'>
                          <span className='material_name'>
                            {' '}
                            Suspendisse laoreet{' '}
                          </span>
                          <i className='far fa-arrow-alt-circle-down'></i>
                        </div>
                      </div>
                    </div>
                    <div className='flex_c_align_center full_row coach_mini_profile'>
                      <div className='coach_mini_profile_image'>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            '../../assets/utils/images/mini.png'
                          }
                          alt=''
                        />
                      </div>
                      <div className='right_side_headings'>
                        <h2>About Akin Alabi</h2>
                      </div>
                      <div className='coach_excerpt'>
                        <p>
                          Akin Alabi helps professionals find fulfillment,
                          stimulation, boundaries, and happiness at work and at
                          home. After navigating her own career transition.
                        </p>
                      </div>
                      <div className='coach_full_profile_link'>
                        <Link href='#'> More about Instructor </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className='full_row members_section_wrapper_div team_members_section team_members_section2'>
              <div className='site_center1'>
                <div className='full_row teamMember_head'>
                  <h4>Our Team Members</h4>
                  <p>
                    By connecting students all over the world to the best
                    instructors, stevia is <br />
                    helping individuals reach their goals and pursue their
                    dreams.
                  </p>
                </div>
                <div className='full_row card_member_wrapper'>
                  <div className='members_card'>
                    {' '}
                    <div className='members_image'>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          '../../assets/utils/images/21.png'
                        }
                        alt=''
                      />
                    </div>
                    <div className='overlay_div'></div>
                    <div className='flex_c_a_end social_media_icons_wrapper'>
                      <div className='member_facebook_link'>
                        <div className='icon_holder'>
                          <i className='fab fa-facebook-f'></i>
                        </div>
                      </div>
                      <div className='member_twitter_link'>
                        <div className='icon_holder'>
                          <i className='fab fa-twitter'></i>
                        </div>
                      </div>
                      <div className='member_linkedIn_link'>
                        <div className='icon_holder'>
                          <i className='fab fa-linkedin-in'></i>
                        </div>
                      </div>
                    </div>
                    <div className='members_name_n_post'>
                      <div className='full_row name'>
                        <p>Akin alabi</p>
                      </div>
                      <div className='full_row post'>
                        <span> FrontEnd Developer </span>
                      </div>
                    </div>
                  </div>
                  <div className='members_card'>
                    <div className='members_image'>
                      {/* <img src={process.env.PUBLIC_URL + '../../assets/utils/images/21.png" alt=""> */}
                    </div>
                    <div className='overlay_div'></div>
                    <div className='flex_c_a_end social_media_icons_wrapper'>
                      <div className='member_facebook_link'>
                        <div className='icon_holder'>
                          <i className='fab fa-facebook-f'></i>
                        </div>
                      </div>
                      <div className='member_twitter_link'>
                        <div className='icon_holder'>
                          <i className='fab fa-twitter'></i>
                        </div>
                      </div>
                      <div className='member_linkedIn_link'>
                        <div className='icon_holder'>
                          <i className='fab fa-linkedin-in'></i>
                        </div>
                      </div>
                    </div>
                    <div className='members_name_n_post'>
                      <div className='full_row name'>
                        <p>Akin alabi</p>
                      </div>
                      <div className='full_row post'>
                        <span> FrontEnd Developer </span>
                      </div>
                    </div>
                  </div>
                  <div className='members_card'>
                    <div className='members_image'>
                      {/* <img src={process.env.PUBLIC_URL + '../../assets/utils/images/21.png" alt=""> */}
                    </div>
                    <div className='overlay_div'></div>
                    <div className='flex_c_a_end social_media_icons_wrapper'>
                      <div className='member_facebook_link'>
                        <div className='icon_holder'>
                          <i className='fab fa-facebook-f'></i>
                        </div>
                      </div>
                      <div className='member_twitter_link'>
                        <div className='icon_holder'>
                          <i className='fab fa-twitter'></i>
                        </div>
                      </div>
                      <div className='member_linkedIn_link'>
                        <div className='icon_holder'>
                          <i className='fab fa-linkedin-in'></i>
                        </div>
                      </div>
                    </div>
                    <div className='members_name_n_post'>
                      <div className='full_row name'>
                        <p>Akin alabi</p>
                      </div>
                      <div className='full_row post'>
                        <span> FrontEnd Developer </span>
                      </div>
                    </div>
                  </div>
                  <div className='members_card'>
                    <div className='members_image'>
                      {/* <!-- <img src={process.env.PUBLIC_URL + '../../assets/utils/images/21.png" alt=""> --> */}
                    </div>
                    <div className='overlay_div'></div>
                    <div className='flex_c_a_end social_media_icons_wrapper'>
                      <div className='member_facebook_link'>
                        <div className='icon_holder'>
                          <i className='fab fa-facebook-f'></i>
                        </div>
                      </div>
                      <div className='member_twitter_link'>
                        <div className='icon_holder'>
                          <i className='fab fa-twitter'></i>
                        </div>
                      </div>
                      <div className='member_linkedIn_link'>
                        <div className='icon_holder'>
                          <i className='fab fa-linkedin-in'></i>
                        </div>
                      </div>
                    </div>
                    <div className='members_name_n_post'>
                      <div className='full_row name'>
                        <p>Akin alabi</p>
                      </div>
                      <div className='full_row post'>
                        <span> FrontEnd Developer </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id='testimonails'>
            <div className='full_row review_section_wrapper_div'>
              <div className='site_center1'>
                <div className='full_row review_header write_ratings'>
                  <h4 className='write_ratings_head'>Testimonials /Ratings</h4>
                  <p>What are people saying</p>
                </div>
                <button className='red_btn'>Write reviews</button>
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
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          '../../assets/utils/images/67.png'
                        }
                        alt=''
                      />
                      <div>
                        <p>Lesly Williams</p>
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
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          '../../assets/utils/images/67.png'
                        }
                        alt=''
                      />
                      <div>
                        <p>Lesly Williams</p>
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
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          '../../assets/utils/images/67.png'
                        }
                        alt=''
                      />
                      <div>
                        <p>Lesly Williams</p>
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
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          '../../assets/utils/images/67.png'
                        }
                        alt=''
                      />
                      <div>
                        <p>Lesly Williams</p>
                        <span> MTN </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- <div className="flex_r_j_center job_Opening_button">
                    <div></div>
                    <div className="checked"></div>
                    <div className=""></div>
                </div> -->
          <!-- /review Dots --> */}
            </div>
          </section>

          <section id='courses'>
            <div className='full_row course_from_coach_section_landing_page pt_1'>
              <div className='site_center1'>
                <div className='full_row recommendation_header'>
                  <h3>Other Courses from this Instructor</h3>
                </div>
                <div className='courses_wrapper_div'>
                  {coachcourses.length > 0 ? (
                    coachcourses.map((coachcourse) =>
                      parseInt(course.coach_id) ===
                      parseInt(coachcourse.coach_id) ? (
                        <CourseItem key={coachcourse.id} course={coachcourse} />
                      ) : (
                        ''
                      )
                    )
                  ) : (
                    <h4>{loading ? 'Loading...' : 'No Related Courses...'}</h4>
                  )}
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className='full_row student_work_section'>
              <div className='site_center1'>
                <div className='full_row student_work_header'>
                  <h4>Student Work</h4>
                  <p>See our students gallery</p>
                </div>
                <button className='student_work_upload'>
                  Upload to gallery
                </button>
                <div className='full_row student_gallery'>
                  <div>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        '../../assets/utils/images/g1.png'
                      }
                      alt=''
                    />
                  </div>
                  <div>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        '../../assets/utils/images/g2.png'
                      }
                      alt=''
                    />
                  </div>
                  <div>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        '../../assets/utils/images/g3.png'
                      }
                      alt=''
                    />
                  </div>
                  <div>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        '../../assets/utils/images/g4.png'
                      }
                      alt=''
                    />
                  </div>
                  <div>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        '../../assets/utils/images/g5.png'
                      }
                      alt=''
                    />
                  </div>
                  <div>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        '../../assets/utils/images/g6.png'
                      }
                      alt=''
                    />
                  </div>
                  <div>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        '../../assets/utils/images/g7.png'
                      }
                      alt=''
                    />
                  </div>
                  <div>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        '../../assets/utils/images/g8.png'
                      }
                      alt=''
                    />
                  </div>
                  <div>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        '../../assets/utils/images/g9.png'
                      }
                      alt=''
                    />
                  </div>
                  <div>
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        '../../assets/utils/images/g10.png'
                      }
                      alt=''
                    />
                  </div>
                </div>
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

CourseDetails.propTypes = {
  getCoursesLand: PropTypes.func.isRequired,
  coursesland: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  courses: state.courses,
});

export default connect(mapStateToProps, { getCoursesLand })(CourseDetails);
