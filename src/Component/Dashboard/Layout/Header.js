import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Spinner from '../../Spinner/Spinner';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Header = ({
  auth: { loading, user },
}) => {

  if (loading && user === null) {
    return <Spinner />;
  }

  return (
    <Fragment>
      <aside className='side_nav'>
        <div className='full_row flex_r_a_center logo_div'>
          {user && user.currentUser.role.name !== 'STUDENT' ? (
            ''
          ) : (
            <Link to='/dashboard'>
              <img
                src={process.env.PUBLIC_URL + '../../assets/utils/images/34.svg'}
                alt=''
              />
            </Link>
          )}
          {user && user.currentUser.role.name !== 'COACH' ? (
            ''
          ) : (
            <Link to='/dashboard'>
              <img
                src={process.env.PUBLIC_URL + '../../../assets/utils/images/48.png'}
                alt=''
              />
            </Link>
          )}
          {user && user.currentUser.role.name !== 'ADMIN' ? (
            ''
          ) : (
            <Link to='/dashboard'>
              <img
                src={process.env.PUBLIC_URL + '../../assets/utils/images/51.png'}
                alt=''
              />
            </Link>
          )}
          {user && user.currentUser.role.name !== 'RECRUITER' ? (
            ''
          ) : (
            <Link to='/dashboard'>
              <img
                src={process.env.PUBLIC_URL + '../../assets/utils/images/32.svg'}
                alt=''
              />
            </Link>
          )}

          <div className='close_sideNav ml_auto'>
            <i className='far fa-times-circle'></i>
          </div>
        </div>
        <div className='side_nav_wrapper'>
          <Sidebar menu={user ? user.menu : ''} />
        </div>
      </aside>
    </Fragment>
  );
};

Header.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Header);
