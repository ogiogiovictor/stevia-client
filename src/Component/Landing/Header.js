import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';

const Header = ({ auth: { loading, isAuthenticated } }) => {
  return (
    <Fragment>
      <header className='full_row'>
        <nav>
          <div className='site_center1 top_nav_div'>
            <div className='flex_r_j_between_align_center'>
              <div className='site_logo_div'>
                <Link to='/'>
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      '../../assets/utils/images/15.png'
                    }
                    alt=''
                  />
                </Link>
              </div>

              <div className='flex_r_j_between_align_center top_nav_right'>
                <div className='flex_r top_nav_links'>
                  <div>
                    <NavLink to='/courses'> Courses </NavLink>
                  </div>
                  <div>
                    <NavLink to='/coaches'> Coaches </NavLink>
                  </div>
                  <div>
                    <NavLink to='/jobs'> Jobs </NavLink>
                  </div>
                  <div>
                    <NavLink to='/contact'> Contact Us </NavLink>
                  </div>
                  <div>
                    <NavLink to='/dashboard/recruiter/postajob'> Post a Job </NavLink>
                  </div>
                </div>
                <div className='flex_r nav_link_buttons'>
                  {!loading && isAuthenticated ? (
                    <Link to='/dashboard'>
                      {' '}
                      <button className='mr-3 black_btn'>My Account</button>
                    </Link>
                  ) : (
                    ''
                  )}
                  {!loading && !isAuthenticated ? (
                    <Link to='/login'>
                      <button className='mr-3 red_btn'>Login</button>
                    </Link>
                  ) : (
                    ''
                  )}
                  {!loading && !isAuthenticated ? (
                    <Link to='/coach'>
                    <button className='black_btn'>Become a coach</button>
                    </Link>
                  ) : (
                    ''
                  )}
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
    </Fragment>
  );
};

Header.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Header);
