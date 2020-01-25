import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Student extends Component {
  render() {
    return (
      <div>
        <div className='flex_c_j_between sideMenu_div'>
          <div className='flex_r_j_between_align_center'>
            <div className='site_logo_div '>
              <img
                src={process.env.PUBLIC_URL + 'assets/images/15.png'}
                alt=''
              />
            </div>
            <div className='close_btn'>
              <i className='far fa-times-circle'></i>
            </div>
          </div>

          <div className='flex_c top_nav_links top_nav_links_mobile'>
            <div>
              <Link to='/'> Courses </Link>
            </div>
            <div>
              <Link to='/'> Coaches </Link>
            </div>
            <div>
              <Link to='/'> Jobs </Link>
            </div>
            <div>
              <Link to='/'> Contact Us </Link>
            </div>
            <div>
              <Link to='/'> Post a Job </Link>
            </div>
          </div>

          <div className='flex_r nav_link_buttons'>
            <button className='mr-1 red_btn'>Login</button>
            <Link to='/coach'><button className='black_btn'>Become a coach</button></Link>
          </div>
        </div>

        <section className='whole_page_wrapper'>
          <header className='full_row site_header'>
            <nav>
              <div className='site_center1 top_nav_div'>
                <div className='flex_r_j_between_align_center'>
                  <div className='site_logo_div'>
                    <Link to='index.html'>
                      <img
                        src={
                          process.env.PUBLIC_URL + 'assets/utils/images/15.png'
                        }
                        alt=''
                      />
                    </Link>
                  </div>

                  <div className='flex_r_j_between_align_center top_nav_right'>
                    <div className='flex_r top_nav_links'>
                      <div>
                        <Link to='/'> Courses </Link>
                      </div>
                      <div>
                        <Link to='/'> Coaches </Link>
                      </div>
                      <div>
                        <Link to='/'> Jobs </Link>
                      </div>
                      <div>
                        <Link to='/'> Contact Us </Link>
                      </div>
                      <div>
                        <Link to='/'> Post a Job </Link>
                      </div>
                    </div>
                    <div className='flex_r nav_link_buttons'>
                      <button className='mr-3 red_btn'>Login</button>
                      <Link to='/coach'><button className='black_btn'>Become a coach</button></Link>
                    </div>
                  </div>

                  <div className='mobile_nav_toggler'>
                    <div className='bars bars_index'></div>
                    <div className='bars bars_index'></div>
                    <div className='bars bars_index'></div>
                  </div>
                </div>
              </div>
            </nav>

            <div className='full_row header_desc_wrapper'>
              <div className='flex_r_j_between_align_center header_desc_div'>
                <div className='header_desc_left'>
                  <h4>
                    Connect to success leaders and turn <br />
                    your ambition into action.
                  </h4>
                  <p>
                    Have someone in your corner to help you master new skills,
                    job <br />
                    search, job loss, leadership and more.
                  </p>
                  <button className='red_btn'>get started</button>
                </div>

                <div className='header_desc_right header_desc_right_index'>
                  <img
                    src={process.env.PUBLIC_URL + 'assets/utils/images/12.png'}
                    alt=''
                  />
                </div>
              </div>
            </div>
          </header>
          <section>
            <div className='full_row second_section_wrapper_div'>
              <div className='site_center1'>
                <div className='full_row text-center second_section_header'>
                  <h5>Benefits of using stevia</h5>
                  <p>
                    A 1-on-1 collaborative learning tool that connects you to
                    professionals to improve your resume, <br />
                    start a business and become a better business leader.
                  </p>
                </div>

                <div className='flex_r_j_between stevia_benefits'>
                  <div>
                    <div>
                      <img
                        src={
                          process.env.PUBLIC_URL + 'assets/utils/images/9.png'
                        }
                        alt=''
                      />
                    </div>

                    <div>
                      <h6>industry expert coach</h6>
                    </div>

                    <div>
                      <p>
                        Match with a coach who will guide your next career move.
                      </p>
                    </div>
                  </div>

                  <div>
                    <div>
                      <img
                        src={
                          process.env.PUBLIC_URL + 'assets/utils/images/10.png'
                        }
                        alt=''
                      />
                    </div>

                    <div>
                      <h6>Choose a service or coach</h6>
                    </div>

                    <div>
                      <p>
                        Find various coaching services or courses to help you
                        tackle your current career obstacle.
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <img
                        src={process.env.PUBLIC_URL + 'assets/utils/images/14.png'}
                        alt=''
                      />
                    </div>
                    <div>
                      <h6>A seemless learning interface</h6>
                    </div>

                    <div>
                      <p>
                        We provide an easy to use platform, with dashboard for
                        both coaches and students.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className='full_row third_section_wrapper_div'>
              <div className='site_center2'>
                <div className='flex_r_j_between_align_center how_it_works_div'>
                  <div className='how_it_works_left_side'>
                    <h4>
                      How does Stevia <br />
                      works?
                    </h4>

                    <p className='first_child'>
                      With Stevia, it’s easy to connect to a coach, book and set
                      a time that is convenient for you.
                    </p>
                    <p>
                      Enjoy services like update resume/cover letter/LinkedIn
                      profile, career change advises, passive income ideas,
                      leadership coaching and so much more
                    </p>
                  </div>
                  <div className='flex_r_j_between_align_center how_it_works_right_side'>
                    <div className='flex_c steps_right_side'>
                      <div className='how_it_work_step_one'>
                        <span className='step_one_txt'>Step 1</span>

                        <h4>Choose your coach</h4>

                        <p>
                          Sign up and Explore our <br />
                          roster of top-notch career <br />
                          coaches who provide the <br />
                          service youneed.
                        </p>
                      </div>

                      <div className='how_it_work_step_two'>
                        <span className='step_two_txt'>Step 2</span>

                        <h4>Book Your Session</h4>

                        <p>
                          Book and set a date for your <br /> first 30-45mins
                          one on one <br /> session. Only schedule <br />
                          lessons at a time and date <br />
                          that suits you.
                        </p>
                      </div>
                    </div>
                    <div>
                      <div className='how_it_work_step_three'>
                        <span className='step_three_txt'>Step 3</span>

                        <h4>Start learning and grow</h4>

                        <p>
                          Start learning at your pace, <br />
                          in a time ideal for you and <br />
                          watch as you grow
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className='full_row fourth_section_wrapper_div'>
              <div className='site_center1'>
                <div className='full_row text-center'>
                  <h4>
                    Explore our top coaches <br />
                    and courses
                  </h4>
                </div>
                <div className='flex_r_j_center courses_navigator'>
                  <div
                    className='courses_navigator_link active_courses_navigator_link'
                    id='top_course'
                  >
                    <span>Top Coaches</span>
                  </div>
                  <div className='courses_navigator_link' id='featured_course'>
                    <span>Featured Courses</span>
                  </div>
                </div>
                <div className='full_row top_course_wrapper'>
                  <div className='coaches_wrapper_div'>
                    <div className='flex_r each_coach'>
                      <div className='coach_image'>
                        <img
                          src={
                            process.env.PUBLIC_URL + 'assets/utils/images/7.png'
                          }
                          alt=''
                        />
                      </div>

                      <div className='coach_features'>
                        <div className='full_row coach_features_top'>
                          <div className='full_row coach_name'>
                            <h5>Mo Abudu</h5>
                          </div>

                          <div className='full_row star_rating'>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='far fa-star'></i>
                          </div>
                        </div>
                        <div className='full_row coach_features_middle'>
                          <p className='specialty_txt'>Specialty:</p>
                          <p>
                            Mid Career | Executives <br />
                            Career Changers <br />
                            Enterprenuership and more
                          </p>
                        </div>
                        <div className='flex_r_j_between_align_center full_row coach_features_bottom'>
                          <div>
                            <Link to='#'> View Profile </Link>
                          </div>
                          <div>
                            <button className='black_btn'>Book</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='flex_r each_coach'>
                      <div className='coach_image'>
                        <img
                          src={
                            process.env.PUBLIC_URL + 'assets/utils/images/2.png'
                          }
                          alt=''
                        />
                      </div>

                      <div className='coach_features'>
                        <div className='full_row coach_features_top'>
                          <div className='full_row coach_name'>
                            <h5>Mo Abudu</h5>
                          </div>

                          <div className='full_row star_rating'>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='far fa-star'></i>
                          </div>
                        </div>

                        <div className='full_row coach_features_middle'>
                          <p className='specialty_txt'>Specialty:</p>
                          <p>
                            Mid Career | Executives <br />
                            Career Changers <br />
                            Enterprenuership and more
                          </p>
                        </div>

                        <div className='flex_r_j_between_align_center full_row coach_features_bottom'>
                          <div>
                            <Link to='#'> View Profile </Link>
                          </div>
                          <div>
                            <button className='black_btn'>Book</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='flex_r each_coach'>
                      <div className='coach_image'>
                        <img
                          src={
                            process.env.PUBLIC_URL + 'assets/utils/images/3.png'
                          }
                          alt=''
                        />
                      </div>

                      <div className='coach_features'>
                        <div className='full_row coach_features_top'>
                          <div className='full_row coach_name'>
                            <h5>Mo Abudu</h5>
                          </div>

                          <div className='full_row star_rating'>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='far fa-star'></i>
                          </div>
                        </div>

                        <div className='full_row coach_features_middle'>
                          <p className='specialty_txt'>Specialty:</p>
                          <p>
                            Mid Career | Executives <br />
                            Career Changers <br />
                            Enterprenuership and more
                          </p>
                        </div>

                        <div className='flex_r_j_between_align_center full_row coach_features_bottom'>
                          <div>
                            <Link to='#'> View Profile </Link>
                          </div>
                          <div>
                            <button className='black_btn'>Book</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='full_row featured_course_wrapper'>
                  <div className='coaches_wrapper_div'>
                    <div className='flex_r each_coach'>
                      <div className='coach_image'>
                        <img
                          src={
                            process.env.PUBLIC_URL + 'assets/utils/images/7.png'
                          }
                          alt=''
                        />
                      </div>

                      <div className='coach_features'>
                        <div className='full_row coach_features_top'>
                          <div className='full_row coach_name'>
                            <h5>Mo Abudu</h5>
                          </div>

                          <div className='full_row star_rating'>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='far fa-star'></i>
                          </div>
                        </div>

                        <div className='full_row coach_features_middle'>
                          <p className='specialty_txt'>Specialty:</p>
                          <p>
                            Mid Career | Executives <br />
                            Career Changers <br />
                            Enterprenuership and more
                          </p>
                        </div>

                        <div className='flex_r_j_between_align_center full_row coach_features_bottom'>
                          <div>
                            <Link to='#'> View Profile </Link>
                          </div>
                          <div>
                            <button className='black_btn'>Book</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='flex_r each_coach'>
                      <div className='coach_image'>
                        <img
                          src={
                            process.env.PUBLIC_URL + 'assets/utils/images/2.png'
                          }
                          alt=''
                        />
                      </div>

                      <div className='coach_features'>
                        <div className='full_row coach_features_top'>
                          <div className='full_row coach_name'>
                            <h5>Mo Abudu</h5>
                          </div>

                          <div className='full_row star_rating'>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='fas fa-star'></i>
                            <i className='far fa-star'></i>
                          </div>
                        </div>

                        <div className='full_row coach_features_middle'>
                          <p className='specialty_txt'>Specialty:</p>
                          <p>
                            Mid Career | Executives <br />
                            Career Changers <br />
                            Enterprenuership and more
                          </p>
                        </div>

                        <div className='flex_r_j_between_align_center full_row coach_features_bottom'>
                          <div>
                            <Link to='#'> View Profile </Link>
                          </div>
                          <div>
                            <button className='black_btn'>Book</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='full_row text-center'>
                  <button className='red_btn'>see more</button>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className='full_row fifth_section_wrapper_div'>
              <div className='site_center1'>
                <div className='full_row text-center fifth_side_header'>
                  <h5>Handpicked Job Openings</h5>
                </div>
                <div className='job_opnenings_wrapper_scroll'>
                  <div className='flex_r job_opnenings_wrapper'>
                    <div className='flex_r'>
                      <div className='job_logo'>
                        <img
                          src={
                            process.env.PUBLIC_URL + 'assets/utils/images/4.png'
                          }
                          alt=''
                        />
                      </div>
                      <div className='flex_c_j_between job_desc_wrapper'>
                        <div className='full_row desc_header'>
                          <h5>Associate Counsel</h5>
                        </div>

                        <div className='full_row desc_texts'>
                          <p>
                            Thriving, dedicated civil litigation defense firm
                            seeking associate attorney. No experience necessary,
                            but must have active WSBA number.
                          </p>
                        </div>

                        <div className='full_row desc_footer'>
                          <Link to='#'> Apply Now </Link>
                        </div>
                      </div>
                    </div>
                    <div className='flex_r'>
                      <div className='job_logo'>
                        <img
                          src={
                            process.env.PUBLIC_URL + 'assets/utils/images/5.png'
                          }
                          alt=''
                        />
                      </div>
                      <div className='flex_c_j_between job_desc_wrapper'>
                        <div className='full_row desc_header'>
                          <h5>Human Resource Intern</h5>
                        </div>

                        <div className='full_row desc_texts'>
                          <p>
                            We are seeking a Human Resources Assistant to work
                            in our office for a Seasonal Position (6 8 weeks)
                            during daytime business hours.
                          </p>
                        </div>

                        <div className='full_row desc_footer'>
                          <Link to='#'> Apply Now </Link>
                        </div>
                      </div>
                    </div>
                    <div className='flex_r'>
                      <div className='job_logo'>
                        <img
                          src={
                            process.env.PUBLIC_URL + 'assets/utils/images/6.png'
                          }
                          alt=''
                        />
                      </div>
                      <div className='flex_c_j_between job_desc_wrapper'>
                        <div className='full_row desc_header'>
                          <h5>UX Design Lead</h5>
                        </div>

                        <div className='full_row desc_texts'>
                          <p>
                            The User Experience Lead will lead projects through
                            the product design lifecycle: in-depth research,
                            user flows, user personas and journey maps …
                          </p>
                        </div>

                        <div className='full_row desc_footer'>
                          <Link to='#'> Apply Now </Link>
                        </div>
                      </div>
                    </div>
                    <div className='flex_r'>
                      <div className='job_logo'>
                        <img
                          src={
                            process.env.PUBLIC_URL + 'assets/utils/images/4.png'
                          }
                          alt=''
                        />
                      </div>
                      <div className='flex_c_j_between job_desc_wrapper'>
                        <div className='full_row desc_header'>
                          <h5>Associate Counsel</h5>
                        </div>

                        <div className='full_row desc_texts'>
                          <p>
                            Thriving, dedicated civil litigation defense firm
                            seeking associate attorney. No experience necessary,
                            but must have active WSBA number.
                          </p>
                        </div>

                        <div className='full_row desc_footer'>
                          <Link to='#'> Apply Now </Link>
                        </div>
                      </div>
                    </div>
                    <div className='flex_r'>
                      <div className='job_logo'>
                        <img
                          src={
                            process.env.PUBLIC_URL + 'assets/utils/images/6.png'
                          }
                          alt=''
                        />
                      </div>
                      <div className='flex_c_j_between job_desc_wrapper'>
                        <div className='full_row desc_header'>
                          <h5>UX Design Lead</h5>
                        </div>

                        <div className='full_row desc_texts'>
                          <p>
                            The User Experience Lead will lead projects through
                            the product design lifecycle: in-depth research,
                            user flows, user personas and journey maps …
                          </p>
                        </div>

                        <div className='full_row desc_footer'>
                          <Link to='#'> Apply Now </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className='full_row sixth_section_wrapper_div'>
              <div className='site_center1 text-center'>
                <h5>Do you want to become a coach on Stevia?</h5>

                <Link to='/coach'><button className='black_btn'>Become a coach</button></Link>
              </div>
            </div>
          </section>

          <footer>
            <div className='full_row footer_section'>
              <div className='site_center1'>
                <div className='flex_r_j_between_align_center footer_wrapper'>
                  <div className='copy_right'>
                    <p>Copyright © 2020. stevia.com</p>
                  </div>

                  <div className='flex_r_j_between_align_center footer_links'>
                    <div className='flex_r top_nav_links'>
                      <div>
                        <Link to='#'> About Us </Link>
                      </div>
                      <div>
                        <Link to='#'> Term of Services </Link>
                      </div>
                      <div>
                        <Link to='#'> Privacy </Link>
                      </div>
                      <div>
                        <Link to='#'> FAQ </Link>
                      </div>
                      <div>
                        <Link to='#'> Contact Us </Link>
                      </div>
                    </div>

                    <div className='flex_r footer_social_icons'>
                      <i className='fab fa-facebook-f'></i>
                      <i className='fab fa-youtube'></i>
                      <i className='fab fa-linkedin'></i>
                      <i className='fab fa-twitter'></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </div>
    );
  }
}

export default Student;
