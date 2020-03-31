import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Footer extends Component {
    render() {
        return (
            <div>
                <div className='full_row footer_section'>
              <div className='site_center1'>
                <div className='flex_r_j_between_align_center footer_wrapper'>
                  <div className='copy_right'>
                    <p>Copyright © 2020. stevia.com</p>
                  </div>

                  <div className='flex_r_j_between_align_center footer_links'>
                    <div className='flex_r top_nav_links'>
                      <div>
                        <NavLink to='/aboutus'> About Us </NavLink>
                      </div>
                      <div>
                        <NavLink to='/terms'> Term of Services </NavLink>
                      </div>
                      <div>
                        <NavLink to='/terms'> Privacy </NavLink>
                      </div>
                      <div>
                        <NavLink to='/faq'> FAQ </NavLink>
                      </div>
                      <div>
                        <NavLink to='/contact'> Contact Us </NavLink>
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
            </div>
        );
    }
}

export default Footer;