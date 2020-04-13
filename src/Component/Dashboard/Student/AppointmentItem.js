import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const AppointmentItem = ({
  user,
  appointment: { note, date, start_time, end_time, amount },
}) => {
  return (
    <Fragment>
      <div>
        <div class='full_row card_body'>
          <div class='flex_r_a_center'>
            <div class='image'>
              <img src={user && user.currentUser.userpic} alt='userpic' />
            </div>
            <div class='name'>
              <h4>
                {' '}
                {user && user.currentUser.firstname}{' '}
                {user && user.currentUser.lastname}{' '}
              </h4>
              <p> Change Managment </p>
            </div>
          </div>
          <div class='full_row note'>
            <h6> Note </h6>
            <p>{note}</p>
          </div>
          <div class='full_row channel'>
            <h4> Communication channel </h4>
            <p>Zoom</p>
          </div>
          <div class='flex_r_j_between_align_center date_top'>
            <div class='flex_r_a_center'>
              <div>
                <i class='far fa-calendar'></i>
              </div>
              <div>
                <span> {date} </span>
              </div>
            </div>
            <div class='flex_r_a_center'>
              <div>
                <i class='far fa-clock'></i>
              </div>
              <div>
                <span>
                  {start_time} - {end_time}
                </span>
              </div>
            </div>
          </div>
          <div class='flex_r_j_between_align_center date_bottom'>
            <div class='flex_r_a_center'>
              <div>
                <i class='far fa-building'></i>
              </div>
              <div>
                <span> ₦{amount}</span>
              </div>
            </div>
          </div>
        </div>
        <div class='full_row flex_r_a_center card_footer'>
          <div>
            <i class='far fa-edit'></i>
          </div>
          <div>
            <Link to='#'> Edit </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

AppointmentItem.propTypes = {
  user: PropTypes.object.isRequired,
  appointment: PropTypes.object.isRequired
};

export default connect(null)(AppointmentItem);
