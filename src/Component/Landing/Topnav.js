import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Topnav = ({ auth: { loading, isAuthenticated } }) => {
    return (
        <Fragment>
          <div className='flex_c_j_between sideMenu_div'>
            <div className='flex_r_j_between_align_center'>
              <div className='site_logo_div '>
                <img src={process.env.PUBLIC_URL + '../../assets/images/15.png'} alt='' />
              </div>
              <div className='close_btn'>
                <i className='far fa-times-circle'></i>
              </div>
            </div>
    
            <div className='flex_c top_nav_links top_nav_links_mobile'>
              <div>
                <Link to='/courses'> Courses </Link>
              </div>
              <div>
                <Link to='/coaches'> Coaches </Link>
              </div>
              <div>
                <Link to='/jobs'> Jobs </Link>
              </div>
              <div>
                <Link to='/contact'> Contact Us </Link>
              </div>
              <div>
                <Link to='/postajob'> Post a Job </Link>
              </div>
            </div>
    
            <div className='flex_r nav_link_buttons'>
            {!loading && isAuthenticated ? (
                    <Link to='/dashboard'> <button className='mr-3 red_btn'>My Account</button></Link>
                  ) : (
                    ''
                  )}
                  {!loading && !isAuthenticated ? (
                    <Link to='/login'><button className='mr-3 red_btn'>Login</button></Link>
                  ) : (
                    ''
                  )}
                  {!loading && !isAuthenticated ? (
                    <button className='black_btn'>Become a coach</button>
                  ) : (
                    ''
                  )}
            </div>
          </div>
        </Fragment>
      );
}

Topnav.propTypes = {
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });

export default connect(mapStateToProps)(Topnav);

