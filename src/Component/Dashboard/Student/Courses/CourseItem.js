import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../../Spinner/Spinner';
// import { deleteService } from '../../../../actions/service';
// import './Service.css'

const CourseItem = ({
  loading,
  course: { course_id, course, status },
  user
}) => {
  return loading ? <Spinner /> : (
    <Fragment>
      <div class="each_course">
                  <div class="flex_r_j_between_align_center">
                      <div class="lecturer">
                          <p>
                              By Strive Masayiwa
                          </p>
                      </div>
                  </div>
                  <div class="flex_r_a_center course_icon_n_name">
                      <div class="course_image_wrapper">                                
                          <div class="course_image">
                              <img src={process.env.PUBLIC_URL + '../../assets/utils/images/Bitmap.png'} alt="" />
                          </div>
                      </div>
                      <div class="course_name">
                          <h5>
                          {course}
                          </h5>                                
                      </div>
                  </div>
                  <div class="full_row course_description">
                      <p>
                          {course}
                      </p>
                  </div>
                  <div class="flex_r_j_between_align_center seats_left">
                    <div class="stud_images">
                      <img src={user && user.currentUser.userpic} alt="" />
                    </div>
                  </div>
                  <div class="full_row flex_r_j_center_align_center ongoing_course_card_footer">
                    <a href="#course-complete-modal"> {status} </a>                  
                  </div>                       
              </div>
    </Fragment>
  );
};

CourseItem.propTypes = {
  course: PropTypes.object.isRequired
};

export default connect(null)(CourseItem);
