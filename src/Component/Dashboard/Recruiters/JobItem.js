import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const JobItem = ({
  user,
  job: { id, job_title, expiry_date, salary, created_by, job_description }
}) => {
  return (
    <Fragment>
      <div class='flex_c_j_between each_job'>
        <div class='full_row flex_r_j_between top'>
          <div class='left'>
            <img src='https://via.placeholder.com/150' alt='' />
          </div>
          <div class='middle'>
            <h5>{job_title}</h5>
            <p>{job_description}</p>
          </div>
          <div class='right'>
            <i class='fas fa-ellipsis-h'></i>
            <div class='job_dropdown'>
              <Link to={id}> Update </Link>
              <Link to={id} class='delete'>
                {' '}
                Delete{' '}
              </Link>
            </div>
          </div>
        </div>
        <div class='full_row flex_r_j_between_align_center middle_down'>
          <div class='experience'>
            <p>Expiry Date: {expiry_date}</p>
          </div>
          <div class='amount'>
            <p>{salary}</p>
          </div>
        </div>
        <div class='flex_r_a_center full_row bottom'>
          <div class='topic'>
            {' '}
            <p> Posted by </p>{' '}
          </div>
          <div class='name'>
            {' '}
            <p>
              {user && user.currentUser.id === parseInt(created_by)
                ? user.currentUser.firstname + ' ' + user.currentUser.lastname
                : ''}
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

JobItem.propTypes = {
  job: PropTypes.object.isRequired
};

export default JobItem;
