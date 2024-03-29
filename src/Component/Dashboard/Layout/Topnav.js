import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Topnav = ({ user, htitle, back }) => {
  return (
    <Fragment>
      {/* {<!-- top nav -->} */}
      <div className='full_row top_nav'>
        <div className='dashboard_center'>
          <div className='flex_r_j_between_align_center'>
            <div className='flex_r_a_center left_side'>
              <div className='dashboard_sidenav_toggler'>
                <div className='bars'></div>
                <div className='bars'></div>
                <div className='bars'></div>
              </div>
              {back ? (
                <div>
                  <Link to='./' className='flex_r_a_center'>
                    <i class='fas fa-long-arrow-alt-left'></i> {back}
                  </Link>
                </div>
              ) : (
                ''
              )}
              <h4>{htitle}</h4>
            </div>
            <div className='flex_r_j_between_align_center right_side'>
              <div className='bell'>
                <i className='far fa-bell'></i>
              </div>
              <div className='flex_r_j_between_align_center username'>
              <div><img src={user && user.currentUser.userpic} alt="userpic" /></div>
                <h6>
                  {user && user.currentUser.firstname}{' '}
                  {user && user.currentUser.lastname}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!--. top nav --> */}
    </Fragment>
  );
};

export default Topnav;
