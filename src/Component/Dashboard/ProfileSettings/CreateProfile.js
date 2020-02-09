import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Sidebar from '../Sidebar';
import { Link } from 'react-router-dom';
import Spinner from '../../Spinner/Spinner';

const CreateProfile = ({ auth: { user }, profile: { profile, loading } }) => {
    const [formData, setFormData] = useState({
        dob: '',
        state: '',
        country: '',
        sex: '',
        qualitifcation: '',
        location: ''
    })

    const {
        dob,
        state,
        country,
        sex,
        qualitifcation,
        location
    } = formData;
  if (loading && user === null) {
    return <Spinner />;
  }
  return (
    <Fragment>
      <section className='whole_page_wrapper'>
        <aside className='side_nav'>
          <div className='full_row logo_div'>
            <img
              src={process.env.PUBLIC_URL + '../../assets/utils/images/34.svg'}
              alt=''
            />
          </div>
          <div className='side_nav_wrapper'>
            <Sidebar menu={user && user.menu} />
          </div>
        </aside>
        <section className='dashboard_body'>
          <div className='full_row top_nav'>
            <div className='dashboard_center'>
              <div className='flex_r_j_between_align_center'>
                <div className='left_side'>
                  <h4>Settings</h4>
                </div>
                <div className='flex_r_j_between_align_center right_side'>
                  <div className='bell'>
                    <i className='far fa-bell'></i>
                  </div>
                  <div className='flex_r_j_between_align_center username'>
                    <span>IU</span>
                    <h6>Ifeanyi Umunnakwe</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='full_row'>
            <div className='dashboard_center'>
              <div className='flex_r_a_center settings_navigator'>
                <div className='settings_navigator_link active_settings_navigator_link'>
                  <span>Profile details</span>
                </div>
                <div className='settings_navigator_link '>
                  <span>Other Information</span>
                </div>
                <div className='settings_navigator_link'>
                  <span>Notification</span>
                </div>
              </div>
            </div>
          </div>

          <div className='full_row'>
            <div className='dashboard_center' id='settings_holder'>
              <section className='profile_details_section'>
                <div className='full_row settings_box profile_details'>
                  <div className='profile_details_left'>
                    <div className='full_row each_student_sett_header'>
                      <p> Profile Information </p>
                      <span>
                        {' '}
                        Your personal information is never shown to other users{' '}
                      </span>
                    </div>
                    <div className='flex_r_a_center image_change_div'>
                      <div className='image'>
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            '../../assets/utils/images/45.png'
                          }
                          alt=''
                        />
                      </div>
                      <div className='link'>
                        <Link to='#'> Change image </Link>
                      </div>
                    </div>
                    <div className='full_row setings_form_wrapper'>
                      <div className='common_input_wrapper_2'>
                        <label for=''> Full Name </label>
                        <input type='text' name='' id='' placeholder='' />
                      </div>
                      <div className='common_input_wrapper_2'>
                        <label for=''> Email </label>
                        <input type='text' name='' id='' placeholder='' />
                      </div>
                      <div className='common_input_wrapper_2'>
                        <label for=''> Phone Number </label>
                        <input type='text' name='' id='' placeholder='' />
                      </div>
                      <div className='full_row button'>
                        <button className='full_width_btn red_btn'>
                          Update profile information
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className='profile_details_right'>
                    <div className='full_row each_student_sett_header'>
                      <p> Update/Change Password </p>
                      <span>
                        {' '}
                        Enter your current password, and the new password{' '}
                      </span>
                    </div>
                    <div className='full_row setings_form_wrapper'>
                      <div className='common_input_wrapper_2'>
                        <label for=''> Current Password </label>
                        <input type='text' name='' id='' placeholder='' />
                      </div>
                      <div className='common_input_wrapper_2'>
                        <label for=''> New Password </label>
                        <input type='text' name='' id='' placeholder='' />
                      </div>
                      <div className='common_input_wrapper_2'>
                        <label for=''> Confirm new password </label>
                        <input type='text' name='' id='' placeholder='' />
                      </div>
                      <div className='full_row button'>
                        <button className='full_width_btn red_btn'>
                          Change password
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className='other_information_section'>
                <div className='full_row settings_box profile_details'>
                  <div className=''>
                    <div className='full_row each_student_sett_header'>
                      <p> Other Information </p>
                      <span>
                        {' '}
                        Your personal information is never shown to other users{' '}
                      </span>
                    </div>
                    <div className='full_row setings_form_wrapper'>
                      <div className='full_row cols-2'>
                        <div className='common_input_wrapper_2'>
                          <label for=''> Date of Birth </label>
                          <input type='text' name='' id='' placeholder='' />
                        </div>
                        <div className='common_input_wrapper_2'>
                          <label for=''> Sex </label>
                          <input type='text' name='' id='' placeholder='' />
                        </div>
                      </div>
                      <div className='common_input_wrapper_2'>
                        <label for=''> Qualification </label>
                        <input type='text' name='' id='' placeholder='' />
                      </div>
                      <div className='common_input_wrapper_2'>
                        <label for=''> Job title </label>
                        <input type='text' name='' id='' placeholder='' />
                      </div>
                      <div className='common_input_wrapper_2'>
                        <label for=''> Location </label>
                        <input type='text' name='' id='' placeholder='' />
                      </div>
                      <div className='full_row button'>
                        <button className='full_width_btn red_btn'>
                          Update profile information
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className='notification_section'>
                <div className='full_row settings_box profile_details'>
                  <div className=''>
                    <div className='full_row each_student_sett_header'>
                      <p> General notifications </p>
                      <span>
                        {' '}
                        These settings apply only to Stevia notifications{' '}
                      </span>
                    </div>
                    <div className='full_row notification_option'>
                      <div className='flex_r'>
                        <div className='radio_option'>
                          <label for='email'>
                            <input
                              type='radio'
                              name='notification'
                              id='email'
                            />
                            <span></span>
                          </label>
                        </div>
                        <div className='notification_label'>
                          <p> Email updates </p>
                          <span>
                            {' '}
                            Get invites to give feedback, newsletters, and tips{' '}
                          </span>
                        </div>
                      </div>
                      <div className='flex_r'>
                        <div className='radio_option'>
                          <label for='sms'>
                            <input type='radio' name='notification' id='sms' />
                            <span></span>
                          </label>
                        </div>
                        <div className='notification_label'>
                          <p> Text SMS notifications </p>
                          <span>
                            {' '}
                            Get SMS’s on appointment bookings, transactions
                            e.t.c{' '}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </section>
    </Fragment>
  );
};

CreateProfile.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, {})(CreateProfile);
