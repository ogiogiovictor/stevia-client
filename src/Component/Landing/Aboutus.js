import React, { Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';
import Topnav from './Topnav';

const Aboutus = () => {
  return (
    <Fragment>
      <body>
        <Topnav />
        <section className='whole_page_wrapper'>
          <Header />
          <header className='full_row plain_site_header'>
            <div className='full_row contact_page_header'>
              <h3>About Us!</h3>
              <p>Improving Lives Through Learning</p>
            </div>
          </header>
          <section>
            <div className='full_row aboutUs_section_wrapper_div aboutUs_section'>
              <div className='site_center1'>
                <div className='full_row about_us_head'>
                  <h4>
                    {' '}
                    The leading global marketplace for <br /> learning and
                    instruction{' '}
                  </h4>
                  <p>
                    By connecting students all over the world to the best
                    instructors, stevia is <br /> helping individuals reach
                    their goals and pursue their dreams.
                  </p>
                </div>
                <div className='full_row aboutUs_cards'>
                  <div className='about_card_one'>
                    <img src={ process.env.PUBLIC_URL + 'assets/utils/images/account.png'} alt='' />
                    <h5> Transforming lifes </h5>
                    <p>
                      Talent is universal, but opportuinities are not, With
                      access to online learning resources and instruction
                    </p>
                  </div>
                  <div className='about_card_two'>
                    <img src={ process.env.PUBLIC_URL + 'assets/utils/images/begin.png' } alt='' />
                    <h5> Our Beginings </h5>
                    <p>
                      Talent is universal, but opportuinities are not, With
                      access to online learning resources and instruction
                    </p>
                  </div>
                  <div className='about_card_three'>
                    <img src={ process.env.PUBLIC_URL + 'assets/utils/images/marketplace.png' } alt='' />
                    <h5> Our Marketplace </h5>
                    <p>
                      Talent is universal, but opportuinities are not, With
                      access to online learning resources and instruction
                    </p>
                  </div>
                  <div className='about_card_four'>
                    <img src={ process.env.PUBLIC_URL + 'assets/utils/images/teacher.png' } alt='' />
                    <h5> Our Intructors </h5>
                    <p>
                      Talent is universal, but opportuinities are not, With
                      access to online learning resources and instruction
                    </p>
                  </div>
                  <div className='about_card_five'>
                    <img src={ process.env.PUBLIC_URL + 'assets/utils/images/elearning.png' } alt='' />
                    <h5> Our Courses </h5>
                    <p>
                      Talent is universal, but opportuinities are not, With
                      access to online learning resources and instruction
                    </p>
                  </div>
                  <div className='about_card_six'>
                    <img src={ process.env.PUBLIC_URL + 'assets/utils/images/translate.png' } alt='' />
                    <h5> Languages </h5>
                    <p>
                      Talent is universal, but opportuinities are not, With
                      access to online learning resources and instruction
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <div className='full_row members_section_wrapper_div team_members_section'>
              <div className='site_center1'>
                <div className='full_row teamMember_head'>
                  <h4> Our Team Members </h4>
                  <p>
                    By connecting students all over the world to the best
                    instructors, stevia is <br /> helping individuals reach
                    their goals and pursue their dreams.
                  </p>
                </div>
                <div className='full_row card_member_wrapper'>
                  <div className='members_card'>
                    <div className='members_image'>
                      <img src={ process.env.PUBLIC_URL + 'assets/utils/images/21.png' } alt='' />
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
                        <p> Akin alabi </p>
                      </div>
                      <div className='full_row post'>
                        <span> FrontEnd Developer </span>
                      </div>
                    </div>
                  </div>
                  <div className='members_card'>
                    <div className='members_image'>
                      {/* <img src="../utils/images/21.png" alt=""> */}
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
                        <p> Akin alabi </p>
                      </div>
                      <div className='full_row post'>
                        <span> FrontEnd Developer </span>
                      </div>
                    </div>
                  </div>
                  <div className='members_card'>
                    <div className='members_image'>
                      {/* <img src="../utils/images/21.png" alt=""> */}
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
                        <p> Akin alabi </p>
                      </div>
                      <div className='full_row post'>
                        <span> FrontEnd Developer </span>
                      </div>
                    </div>
                  </div>
                  <div className='members_card'>
                    <div className='members_image'>
                      {/* <img src="../utils/images/21.png" alt=""> */}
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
                        <p> Akin alabi </p>
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
          <section>
            <div className='full_row figures_section_wrapper_div figures_section'>
              <div className='site_center1'>
                <div className='full_row figures_head'>
                  <h4>Our Global Reach</h4>
                  <p>
                    Stevia is the leading global marketplace for teaching and
                    learning, connecting millions <br /> of students to the
                    skills they need to succeed.
                  </p>
                </div>
                <div className='full_row about_us_figures'>
                  <div>
                    <h4> 15M </h4>
                    <p> Instructors </p>
                  </div>
                  <div>
                    <h4> 200K </h4>
                    <p> Courses </p>
                  </div>
                  <div>
                    <h4> 487K </h4>
                    <p> Course Enrollments </p>
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

export default Aboutus;
