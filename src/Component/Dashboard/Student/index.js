import React, { Fragment, useEffect } from 'react';
import { getStudentProfile } from '../../../actions/profile';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppointmentItem from './AppointmentItem';

const StudentIndex = ({ getStudentProfile, profile: { student }, user }) => {
  useEffect(() => {
    getStudentProfile(user && user.currentUser.id);
  }, [getStudentProfile, user]);
  return (
    <Fragment>
      <div className='full_row overview_cards'>
        <div className='dashboard_center'>
          <div className='full_row cards_wrapper'>
            <div className='flex_r_j_between_align_center'>
              <div className='left'>
                <h6>Pending Courses</h6>
                <h2>
                  {student && student.pending_courses > 0
                    ? student.pending_courses
                    : 0}
                </h2>
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
                <h6>Ongoing Courses</h6>
                <h2>
                  {student && student.ongoing_courses > 0
                    ? student.ongoing_courses
                    : 0}
                </h2>
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
                <h6>Completed Courses</h6>
                <h2>
                  {student && student.completed_courses > 0
                    ? student.completed_courses
                    : 0}
                </h2>
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
              <h4>Appointments</h4>
            </div>
            <div className='flex_r_wrap_align_center right spanToggle'>
              <span className='active'> Pending </span>
              <span> Ongoing </span>
              <span> Completed </span>
            </div>
          </div>
          
            {student && student.student_appointment.length > 0
              ? student.student_appointment.map((appointment) => (
              <div className='full_row pending_appointment_container'>
                  <AppointmentItem
                    key={appointment.id}
                    appointment={appointment}
                    user={user}
                  />
              </div>
                ))
              : ''}
              
          {student && student.student_appointment.length <= 0 ? (
            <div class='full_row flex_r_j_center_align_center appointment_container'>
              <div className='empty_content text-center'>
                <img
                  src={process.env.PUBLIC_URL + '../assets/utils/images/39.png'}
                  alt=''
                />
                <p>You have no appointments yet</p>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
      {/* <!-- Overview cards --> */}
    </Fragment>
  );
};

StudentIndex.propTypes = {
  getStudentProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  user: state.auth.user,
});

export default connect(mapStateToProps, { getStudentProfile })(StudentIndex);
