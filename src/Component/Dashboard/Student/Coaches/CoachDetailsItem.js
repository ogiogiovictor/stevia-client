import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import CourseItem from '../Courses/CourseItem';
import { getCourses } from '../../../../actions/course';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const CoachDetailsItem = ({
  getCourses,
  loading,
  coach: { id, firstname, lastname, profile },
  courses: { courses }
}) => {
  useEffect(() => {
    getCourses();
  }, [getCourses]);
  return (
    <Fragment>
      <section>
        <div className='full_row'>
          <div className='dashboard_center'>
            <div className='full_row coach_box_details_container flex_r'>
              <div className='coach_image'>
                <img src={profile && profile.image} alt='' />
              </div>
              <div className='coach_details_div'>
                <div className='full_row coach_details_div_top'>
                  <div className='full_row text'>
                    <h4>
                      About {firstname} {lastname}
                    </h4>
                  </div>
                  <div className='full_row star'>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star'></i>
                    <i className='fas fa-star-half-alt'></i>
                    <i className='far fa-star'></i>
                  </div>
                </div>
                <div className='flex_r coach_summary'>
                  <div className='coach_summary_n_specialization'>
                    <div className='full_row summary'>
                      <p>{profile && profile.about_me}</p>
                    </div>
                    <div className='full_row specialization'>
                      <div className='full_row header'>
                        <h6>Specialization</h6>
                      </div>

                      <div className='full_row spec_list'>
                        <p>{profile && profile.specialization}</p>
                      </div>
                    </div>
                  </div>
                  <div className='coach_social'>
                    <div className='full_row video'>
                      <video width='100%' height='100%' controls>
                        <source src='movie.mp4' type='video/mp4' />
                        <source src='movie.ogg' type='video/ogg' />
                        Your browser does not support the video tag.
                      </video>
                    </div>

                    <div className='full_row socials'>
                      <div className='full_row text'>
                        <h6>Social</h6>
                      </div>

                      <div className='full_row social_links'>
                        <Link to={profile && profile.facebook}>
                          <i className='fab fa-facebook-square'></i>
                        </Link>
                        <Link to={profile && profile.linkedin}>
                          <i className='fab fa-linkedin'></i>
                        </Link>
                        <Link to={profile && profile.twitter}>
                          <i className='fab fa-twitter-square'></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='full_row book_button'>
                  <Link to={`./book/${id}`}><button className='black_btn'>book {firstname}</button></Link>
                </div>
              </div>
            </div>
            <div className='full_row about_coach_section'>
              <div className='full_row _more_about_coach'>
                <div className='full_row Header'>
                  <h3>More about {firstname}</h3>
                </div>

                <div className='full_row the_description'>
                  <p>{profile && profile.about_me}</p>
                </div>

                <div className='full_row coach_certifications'>
                  <div className='full_row header'>
                    <h6>Certifications</h6>
                  </div>

                  <div className='full_row certs'>
                    <p>{profile && profile.certifications}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='full_row course_from_coach_section'>
          <div className='dashboard_center'>
            <div className='full_row course_from_coach_head'>
              <h4> Courses from {firstname} </h4>
            </div>
            <div className='full_row course_list_wrapper'>
              {courses.length > 0 ? (
                courses.map(course =>
                  id === parseInt(course.coach_id) ? (
                    <CourseItem key={course.id} course={course} />
                  ) : (
                    ''
                  )
                )
              ) : (
                <h4>No Courses Found...</h4>
              )}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='full_row review_section_wrapper_div'>
          <div className='full_row text-center review_header'>
            <h4>Reviews</h4>
            <p>What students are saying about sessions with {firstname}</p>
          </div>
          <div className='full_row review_lists'>
            <div className='list_container'>
              <div className='each_review'>
                <div className='full_row review_text'>
                  <p>
                    When I started working with Akin, I was miserable in my job.
                    It was emotionally draining, and I felt trapped. I needed
                    someone to help me focus my energy and get the work done
                    well, and fast! Akin did just that! She helped me identify
                    the positive aspects of my current situation
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
                    When I started working with Akin, I was miserable in my job.
                    It was emotionally draining, and I felt trapped. I needed
                    someone to help me focus my energy and get the work done
                    well, and fast! Akin did just that! She helped me identify
                    the positive aspects of my current situation
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
                    When I started working with Akin, I was miserable in my job.
                    It was emotionally draining, and I felt trapped. I needed
                    someone to help me focus my energy and get the work done
                    well, and fast! Akin did just that! She helped me identify
                    the positive aspects of my current situation
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
                    When I started working with Akin, I was miserable in my job.
                    It was emotionally draining, and I felt trapped. I needed
                    someone to help me focus my energy and get the work done
                    well, and fast! Akin did just that! She helped me identify
                    the positive aspects of my current situation
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
    </Fragment>
  );
};

CoachDetailsItem.propTypes = {
  coach: PropTypes.object.isRequired,
  getCourses: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  courses: state.courses
});

export default connect(mapStateToProps, { getCourses })(CoachDetailsItem);
