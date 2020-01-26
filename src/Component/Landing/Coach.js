import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

class Coach extends Component {
  render() {
    return (
      <div>
        <div className='flex_c_j_between sideMenu_div'>
          <div className='flex_r_j_between_align_center'>
            <div className='site_logo_div '>
              <img
                src={process.env.PUBLIC_URL + 'assets/utils/images/15.png'}
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
            <Link to='/login'><button className='mr-1 red_btn'>Login</button></Link>
            <Link to='/signup'><button className='black_btn'>Become a coach</button></Link>
          </div>
        </div>

        <section className='whole_page_wrapper'>
          <header className='full_row'>
            <nav>
              <div className='site_center1 top_nav_div'>
                <div className='flex_r_j_between_align_center'>
                  <div className='site_logo_div'>
                    <Link to='/'>
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
                        <Link to='/login'> LOGIN </Link>
                      </div>
                    </div>
                    <div className='flex_r nav_link_buttons'>
                      <Link to='/signup'><button className='red_btn'>signup</button></Link>
                    </div>
                  </div>
                  <div className='mobile_nav_toggler'>
                    <div className='bars'></div>
                    <div className='bars'></div>
                    <div className='bars'></div>
                  </div>
                </div>
              </div>
            </nav>
          </header>

          <section>
            <div className='full_row coach_landing_page_header'>
              <div className='full_row'>
                <div className='site_center1 text'>
                  <h4>
                    Get paid to help others <br /> succeed
                  </h4>
                  <p>
                    Join Stevia to connect with student and mentor them to{' '}
                    <br />
                    becoming the best version of themselves.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className='full_row benefits_section'>
              <div className='site_center1'>
                <div className='full_row benefits_wrapper'>
                  <div className='full_row text-center header'>
                    <h3>Benefits of being a coach</h3>
                  </div>

                  <div className='full_row coach_benefits_wrapper'>
                    <div className='each_benefit'>
                      <div className='full_row text-center'>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            'assets/utils/images/27.png'
                          }
                          alt=''
                        />
                      </div>

                      <div className='full_row benefit_text'>
                        <p>
                          You will help people build and discover their career
                          goals and achieve their dreams by sharing your
                          knowledge and skills.
                        </p>
                      </div>
                    </div>

                    <div className='each_benefit'>
                      <div className='full_row text-center'>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            'assets/utils/images/28.png'
                          }
                          alt=''
                        />
                      </div>

                      <div className='full_row benefit_text'>
                        <p>
                          Coach as much or as little as you want! Students
                          schedule session during your available times.
                        </p>
                      </div>
                    </div>

                    <div className='each_benefit'>
                      <div className='full_row text-center'>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            'assets/utils/images/29.png'
                          }
                          alt=''
                        />
                      </div>

                      <div className='full_row benefit_text'>
                        <p>
                          You set your own prices and hours. Earn more passive
                          income by connecting with learners anywhere in the
                          world.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className='full_row review_section_wrapper_div'>
              <div className='full_row text-center review_header'>
                <h4>Testimonials</h4>

                <p>What are people saying</p>
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
                          process.env.PUBLIC_URL + 'assets/utils/images/67.png'
                        }
                        alt=''
                      />
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
                      <img
                        src={
                          process.env.PUBLIC_URL + 'assets/utils/images/67.png'
                        }
                        alt=''
                      />
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
                      <img
                        src={
                          process.env.PUBLIC_URL + 'assets/utils/images/67.png'
                        }
                        alt=''
                      />
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
                      <img
                        src={
                          process.env.PUBLIC_URL + 'assets/utils/images/67.png'
                        }
                        alt=''
                      />
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

          <section>
            <div className='full_row want_to_be_a_coach_wrapper'>
              <div className='want_to_be_a_coach_div flex_r_j_between_align_center'>
                <div className='text'>
                  <h5>Want to become a coach and earn some extra cash?</h5>
                </div>

                <div className='arrow'>
                  <img
                    src={
                      process.env.PUBLIC_URL + 'assets/utils/images/arrow.png'
                    }
                    alt=''
                  />
                </div>

                <div className='flex_c_align_center buttons'>
                  <div>
                    <img
                      src={
                        process.env.PUBLIC_URL + 'assets/utils/images/25.png'
                      }
                      alt=''
                    />
                  </div>

                  <div className='my-3'>
                    <button className='black_btn'>get started</button>
                  </div>

                  <div>
                    <img
                      src={
                        process.env.PUBLIC_URL + 'assets/utils/images/26.png'
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
      </div>
    );
  }
}

export default Coach;
