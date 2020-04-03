import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AllJobsItem = ({ job: { id, job_title, job_description } }) => {
  return (
    <Fragment>
      <div className='flex_r'>
        <div className='job_logo'>
          <img src='https://via.placeholder.com/50' alt='' />
        </div>
        <div className='job_desc_wrapper'>
          <div className='full_row desc_header'>
            <h5>{job_title}</h5>
          </div>

          <div className='full_row desc_texts'>
            <p>
              {job_description}
            </p>
          </div>

          <div className='full_row desc_footer'>
            <Link to={`jobs/details/${id}`}>Apply Now</Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

AllJobsItem.propTypes = {
    job: PropTypes.object.isRequired
};

export default AllJobsItem;
