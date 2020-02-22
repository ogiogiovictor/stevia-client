import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { deleteService } from '../../../../actions/service';
// import './Service.css'

const CourseItem = ({ course: { price_per_session, image, course_description, title} }) => {
  return (
    <Fragment>
      <div className='each_course'>
        <div className='flex_r_j_between_align_center'>
          <div className='flex_r_a_center course_price'>
            <div className='price_tag_icon'>
              <i className='fas fa-tag'></i>
            </div>
            <div className='course_amount'>
              <p>₦ {price_per_session}</p>
            </div>
          </div>
        </div>
        <div className='flex_r_a_center course_icon_n_name'>
          <div className='course_image_wrapper'>
            <div className='course_image'>
              <img src={image} alt='' />
            </div>
          </div>
          <div className='course_name'>
            <h5>{title}</h5>
          </div>
        </div>
        <div className='full_row course_description'>
          <p>{course_description}</p>
        </div>
        <div className='flex_r_j_between_align_center seats_left'>
          <div className='stud_images'>
            <img src='../utils/images/40.png' alt='' />
            <img src='../utils/images/41.png' alt='' />
            <img src='../utils/images/42.png' alt='' />
            <img src='../utils/images/43.png' alt='' />
            <img src='../utils/images/44.png' alt='' />
          </div>
          <div>
            <p>8 Seats left</p>
          </div>
        </div>
        <div className='full_row'>
          <button className='black_btn full_width_btn'>view course</button>
        </div>
      </div>
    </Fragment>
  );
};

CourseItem.propTypes = {
  course: PropTypes.object.isRequired,
};

export default connect(null)(CourseItem);
