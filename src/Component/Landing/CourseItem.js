import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../Spinner/Spinner';
import { Link } from 'react-router-dom';

const CourseItem = ({
  loading,
  course: { id, price_per_session, image, course_description, title, coach_id }
}) => {
  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className='each_course'>
        <div className='flex_r_j_between_align_center'>
          <div className='lecturer'>
            <p>By {coach_id}</p>
          </div>
          <div className='flex_r_a_center course_price'>
            <div className='price_tag_icon'>
              <i className='fas fa-tag'></i>
            </div>
            <div className='course_amount'>
              <p>₦{price_per_session}</p>
            </div>
          </div>
        </div>
        <div className='flex_r_a_center course_icon_n_name'>
          <div className='course_image_wrapper'>
            <div className='course_image'>
              <img src={`https://kyc.c-ileasing.com/stevia/images/courses/${image}`} alt='' />
            </div>
          </div>
          <div className='course_name'>
            <h5>{title}</h5>
          </div>
        </div>
        <div className='full_row course_description'>
          <p>{course_description}</p>
        </div>
        <div className='full_row'>
        <Link to={`/courses/details/${id}`}>
            <button className='black_btn full_width_btn'>
              View Course
            </button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

CourseItem.propTypes = {
  course: PropTypes.object.isRequired
};

export default connect(null)(CourseItem);
