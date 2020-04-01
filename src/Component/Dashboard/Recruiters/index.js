import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';

const RecruiterIndex = props => {
  return (
    <Fragment>
      <div className='full_row overview_cards'>
        <div className='dashboard_center'>
          <div className='full_row cards_wrapper'>
            <div className='flex_r_j_between_align_center'>
              <div className='left'>
                <h6>Posted Jobs</h6>
                <h2>2</h2>
              </div>
              <div className='right'>
                <img
                  src={process.env.PUBLIC_URL + '../assets/utils/images/35.svg'}
                  alt=''
                />
              </div>
            </div>
            <div className='flex_r_j_between_align_center'>
              <div className='left'>
                <h6>Inactive</h6>
                <h2>0</h2>
              </div>
              <div className='right'>
                <img
                  src={process.env.PUBLIC_URL + '../assets/utils/images/38.png'}
                  alt=''
                />
              </div>
            </div>
            <div className='flex_r_j_between_align_center'>
              <div className='left'>
                <h6>Pending</h6>
                <h2>3</h2>
              </div>
              <div className='right'>
                <img
                  src={process.env.PUBLIC_URL + '../assets/utils/images/36.svg'}
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Appointments Section --> */}
      <div className='full_row appointments_part'>
        <div className='dashboard_center'>
          <div className='full_row flex_r_j_between_align_center top'>
            <div className='left'>
              <h4>Jobs</h4>
            </div>
            <div className='flex_r_wrap_align_center right spanToggle'>
              <span className='active'> Pending </span>
              <span> Ongoing </span>
              <span> Completed </span>
            </div>
          </div>
          <div className='full_row flex_r_j_center_align_center appointment_container'>
            <div className='empty_content text-center'>
              <img
                src={process.env.PUBLIC_URL + '../assets/utils/images/39.png'}
                alt=''
              />
              <p>You have no job posting yet</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Overview cards --> */}
    </Fragment>
  );
};

// StudentIndex.propTypes = {

// };

export default RecruiterIndex;
