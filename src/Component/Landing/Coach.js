import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
            <button className='mr-1 red_btn'>Login</button>
            <button className='black_btn'>Become a coach</button>
          </div>
        </div>

        <section class='whole_page_wrapper'>
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
                        <Link to='courses.html'> LOGIN </Link>
                      </div>
                    </div>
                    <div className='flex_r nav_link_buttons'>
                      <button className='red_btn'>signup</button>
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
        </section>
      </div>
    );
  }
}

export default Coach;
