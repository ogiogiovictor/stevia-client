import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteService } from '../../../../actions/service';
// import './Service.css'

const ServiceItem = ({
  deleteService,
  coachservice: { id, price_per_session, price_per_hour, name, percentage }
}) => {
  return (
    <Fragment>
      <div className='each_service'>
        <div className='full_row flex_r top'>
          <div className='left'>
            <p> {name} </p>
            <span> {percentage}% (Commission) </span>
          </div>
          <div className='right'>
            <span> ... </span>
          </div>
        </div>
        <div className='full_row flex_r bottom'>
          <div className='left'>
            <span> Per hour </span>
            <p> {price_per_hour}</p>
          </div>
          <div className='right'>
            <span> Per Session </span>
            <p> {price_per_session} </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

ServiceItem.propTypes = {
  coachservice: PropTypes.object.isRequired,
  deleteService: PropTypes.func.isRequired
};

export default connect(null, { deleteService })(ServiceItem);
