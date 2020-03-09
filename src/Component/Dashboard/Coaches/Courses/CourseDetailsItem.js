import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const CourseDetailsItem = ({
  course: { price_per_session, image, course_description, title }
}) => {
  return (
    <Fragment>
      <div className='full_row flex_r course_banner_wrapper'>
        <div className='image'>
          <img src={image} alt='' />
        </div>
        <div className='details'>
          <div className='full_row title'>
            <p> {title} </p>
            <br />
            <p>
              <button class='red_btn'>Upload Videos</button>{' '}
              <button class='red_btn'>Upload Documents</button>
            </p>
          </div>
          <div className='flex_r Description_n_price'>
            <div className='description'>
              <div className='full_row top'>
                <p>{course_description}</p>
              </div>
              <div className='image_n_seat'>
                <div className='flex_r_j_between_align_center'>
                  <div className='stud_images'>
                    <img src='../utils/images/40.png' alt='' />
                    <img src='../utils/images/41.png' alt='' />
                    <img src='../utils/images/42.png' alt='' />
                    <img src='../utils/images/43.png' alt='' />
                    <img src='../utils/images/44.png' alt='' />
                  </div>
                  <div>
                    <p> 8 Seats left </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='price'>
              <h6> Price </h6>
              <p> ₦ {price_per_session} </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

CourseDetailsItem.propTypes = {
  course: PropTypes.object.isRequired
};

export default CourseDetailsItem;
