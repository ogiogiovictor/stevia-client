import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '../Layout/Header';
import Topnav from '../Layout/Topnav';
import { connect } from 'react-redux';

const CoachDetails = ({ user }) => {
  return (
    <Fragment>
      <section className='whole_page_wrapper'>
        <Header menu={user && user.menu} />
        <section className='dashboard_body'>
          <Topnav user={user} htitle='Coach Details' back='Back to Coaches' />
          <section>
            <div className='full_row'>
              <div className='dashboard_center'>
                <div className='full_row coach_box_details_container flex_r'>
                  <div className='coach_image'>
                    <img src='../utils/images/21.png' alt='' />
                  </div>
                  <div className='coach_details_div'>
                    <div className='full_row coach_details_div_top'>
                      <div className='full_row text'>
                        <h4>About Akin Alabi</h4>
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
                          <p>
                            Akin Alabi helps professionals find fulfillment,
                            stimulation, boundaries, and happiness at work and
                            at home. After navigating her own career transition.
                          </p>
                        </div>
                        <div className='full_row specialization'>
                          <div className='full_row header'>
                            <h6>Specialization</h6>
                          </div>

                          <div className='full_row spec_list'>
                            <p>
                              Career Changers, Enterprenuership, Returning to
                              Workforce
                            </p>
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
                            <i className='fab fa-facebook-square'></i>
                            <i className='fab fa-linkedin'></i>
                            <i className='fab fa-twitter-square'></i>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='full_row book_button'>
                      <button className='black_btn'>book akin</button>
                    </div>
                  </div>
                </div>
                <div className='full_row about_coach_section'>
                  <div className='full_row _more_about_coach'>
                    <div className='full_row Header'>
                      <h3>More about Akin</h3>
                    </div>

                    <div className='full_row the_description'>
                      <p>
                        Lauren Laitin helps professionals find fulfillment,
                        stimulation, boundaries, and happiness at work and at
                        home. After navigating her own career transition—from
                        attorney to founder and principal of
                        ParachuteCoaching.com—Lauren found her true passion and
                        loves working with others to find theirs, too. She works
                        with clients to clarify exactly what they want, craft
                        effective strategies for getting there, and ultimately
                        carve a path to success. Work with Lauren if you're
                        still trying to figure out what you want to be when you
                        grow up or you're ready for a change and want support to
                        make it happen.
                      </p>
                    </div>

                    <div className='full_row coach_certifications'>
                      <div className='full_row header'>
                        <h6>Certifications</h6>
                      </div>

                      <div className='full_row certs'>
                        <p>
                          Coaches Training Institute Certified, International
                          Coach Federation (ICF) Member
                        </p>
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
                  <h4> Courses from Akin </h4>
                </div>
                <div className='full_row course_list_wrapper'>
                  <div className='each_course'>
                    <div className='flex_r_j_between_align_center'>
                      <div className='lecturer'>
                        <p>By Strive Masayiwa</p>
                      </div>
                      <div className='flex_r_a_center course_price'>
                        <div className='price_tag_icon'>
                          <i className='fas fa-tag'></i>
                        </div>
                        <div className='course_amount'>
                          <p>N100,000</p>
                        </div>
                      </div>
                    </div>
                    <div className='flex_r_a_center course_icon_n_name'>
                      <div className='course_image_wrapper'>
                        <div className='course_image'>
                          <img src='../utils/images/Bitmap.png' alt='' />
                        </div>
                      </div>
                      <div className='course_name'>
                        <h5>Skillsets to shift your career</h5>
                      </div>
                    </div>
                    <div className='full_row course_description'>
                      <p>
                        A course for anyone who’s ready to find their dream job.
                        Covering everything from resumes to job applications.
                      </p>
                    </div>
                    <div className='flex_r_j_between_align_center seats_left'>
                      <div className='stud_images'>
                        <img src='../utils/images/40.png' alt='' />
                        <img src='../utils/images/41.png' alt='' />
                        <img src='../utils/images/42.png' alt='' />
                        <img src='../utils/images/43.png' alt='' />
                        <img src='../utils/images/44.png' alt='' />
                      </div>
                      <div>
                        <p>8 Seats left</p>
                      </div>
                    </div>
                    <div className='full_row'>
                      <button className='black_btn full_width_btn'>
                        Enrol Now
                      </button>
                    </div>
                  </div>
                  <div className='each_course'>
                    <div className='flex_r_j_between_align_center'>
                      <div className='lecturer'>
                        <p>By Strive Masayiwa</p>
                      </div>
                      <div className='flex_r_a_center course_price'>
                        <div className='price_tag_icon'>
                          <i className='fas fa-tag'></i>
                        </div>
                        <div className='course_amount'>
                          <p>N100,000</p>
                        </div>
                      </div>
                    </div>
                    <div className='flex_r_a_center course_icon_n_name'>
                      <div className='course_image_wrapper'>
                        <div className='course_image'>
                          <img src='../utils/images/Bitmap.png' alt='' />
                        </div>
                      </div>
                      <div className='course_name'>
                        <h5>Skillsets to shift your career</h5>
                      </div>
                    </div>
                    <div className='full_row course_description'>
                      <p>
                        A course for anyone who’s ready to find their dream job.
                        Covering everything from resumes to job applications.
                      </p>
                    </div>
                    <div className='flex_r_j_between_align_center seats_left'>
                      <div className='stud_images'>
                        <img src='../utils/images/40.png' alt='' />
                        <img src='../utils/images/41.png' alt='' />
                        <img src='../utils/images/42.png' alt='' />
                        <img src='../utils/images/43.png' alt='' />
                        <img src='../utils/images/44.png' alt='' />
                      </div>
                      <div>
                        <p>8 Seats left</p>
                      </div>
                    </div>
                    <div className='full_row'>
                      <button className='black_btn full_width_btn'>
                        Enrol Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
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

CoachDetails.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps, null)(CoachDetails);
