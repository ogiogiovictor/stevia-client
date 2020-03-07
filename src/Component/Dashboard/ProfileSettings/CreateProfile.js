import React, {
  useState,
  useRef,
  useEffect,
  cloneElement,
  Fragment
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../Spinner/Spinner';
import { Tabs, useTabState, Panel } from '@bumaga/tabs';
import { motion, AnimatePresence } from 'framer-motion';
import './tab.css';
import {
  createProfile,
  getCurrentProfile,
  profileImage,
  coachOtherInfo
} from '../../../actions/profile';
import Header from '../Layout/Header';
import Topnav from '../Layout/Topnav';
import { Maintitle } from '../../Maintitle';
import { withRouter } from 'react-router-dom';
import Progress from './Progress';

const cn = (...args) => args.filter(Boolean).join(' ');

const Tab = ({ children }) => {
  const { isActive, onClick } = useTabState();

  return (
    <button className={cn('tab', isActive && 'active')} onClick={onClick}>
      {children}
    </button>
  );
};

const PanelList = ({ state, children }) => {
  const panelRef = useRef();
  const [height, set] = useState(0);
  const [activeIndex] = state;

  useEffect(() => {
    panelRef.current && set(panelRef.current.offsetHeight);
  }, [activeIndex, set]);

  return (
    <motion.ul className='panel-list' animate={{ height }}>
      <AnimatePresence initial={false}>
        <motion.li
          ref={panelRef}
          className='panel'
          key={activeIndex}
          initial={{ opacity: 0, x: -32 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.1, ease: 'easeInOut', duration: 0.2 }
          }}
          exit={{
            opacity: 0,
            x: 32,
            transition: { ease: 'easeInOut', duration: 0.2 }
          }}
        >
          {cloneElement(children[activeIndex], { active: true })}
        </motion.li>
      </AnimatePresence>
    </motion.ul>
  );
};

const CreateProfile = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading },
  createProfile,
  coachOtherInfo,
  profileImage,
  history
}) => {
  const state = useState(0);
  const [formData, setFormData] = useState({
    dob: '',
    sex: '',
    qualitifcation: '',
    location: '',
    firstname: '',
    lastname: '',
    phone_number: '',
    email: '',
    job_title: '',
    bank: '',
    account_number: '',
    account_name: '',
    about_me: '',
    specialization: '',
    certifications: '',
    youtube_link: '',
    facebook: '',
    twitter: '',
    linkedin: ''
  });

  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Change Image');
  const [uploadPercentage, setUploadPercentage] = useState(0);

  useEffect(() => {
    getCurrentProfile();
    setFormData({
      dob: loading || !profile.dob ? '' : profile.dob,
      sex: loading || !profile.sex ? '' : profile.sex,
      qualitifcation:
        loading || !profile.qualitifcation ? '' : profile.qualitifcation,
      location: loading || !profile.location ? '' : profile.location,
      firstname: loading || !profile.firstname ? '' : profile.firstname,
      lastname: loading || !profile.lastname ? '' : profile.lastname,
      phone_number:
        loading || !profile.phone_number ? '' : profile.phone_number,
      email: loading || !profile.email ? '' : profile.email,
      job_title: loading || !profile.job_title ? '' : profile.job_title,
      bank: loading || !profile.bank ? '' : profile.bank,
      account_number:
        loading || !profile.account_number ? '' : profile.account_number,
      account_name: loading || !profile.account_name ? '' : profile.account_name
    });
  }, [loading, getCurrentProfile]);

  if (loading && user === null) {
    return <Spinner />;
  }

  const {
    dob,
    sex,
    qualitifcation,
    location,
    phone_number,
    firstname,
    lastname,
    email,
    job_title,
    bank,
    account_number,
    account_name,
    about_me,
    specialization,
    certifications,
    youtube_link,
    facebook,
    twitter,
    linkedin
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFile = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history, true);
  };
  const onSubmit2 = e => {
    e.preventDefault();
    const formDataImg = new FormData();
    formDataImg.append('uploadpix', file);
    formDataImg.append('phone_number', phone_number);
    const config = {
      onUploadProgress: ProgressEvent => {
        setUploadPercentage(
          parseInt(Math.round(ProgressEvent.loaded * 100) / ProgressEvent.total)
        );

        setTimeout(() => {
          setUploadPercentage(0);
        }, 10000);
      }
    };
    profileImage(formDataImg, config, history);
    setFile({ uploadpix: {} });
  };
  const onSubmit3 = e => {
    e.preventDefault();
    createProfile(formData, history, true);
  };
  const onSubmit4 = e => {
    e.preventDefault();
    const formDataCoach = new FormData();
    formDataCoach.append('coach_id', user && user.currentUser.id);
    formDataCoach.append('about_me', about_me);
    formDataCoach.append('specialization', specialization);
    formDataCoach.append('certifications', certifications);
    formDataCoach.append('youtube_link', youtube_link);
    formDataCoach.append('facebook', facebook);
    formDataCoach.append('twitter', twitter);
    formDataCoach.append('linkedin', linkedin);
    coachOtherInfo(formDataCoach, history, true);
  };

  return (
    <Fragment>
      <Maintitle title='Stevia - Student Dashboard Settings' />

      <section className='whole_page_wrapper'>
        <Header menu={user && user.menu} />

        <section className='dashboard_body'>
          <Topnav user={user} htitle='Settings' />

          <Tabs state={state}>
            <div className='tabs'>
              <div className='tab-list'>
                <Tab>
                  <span>Profile details</span>
                </Tab>

                {user && user.currentUser.role.name === 'STUDENT' ? (
                  <Tab>
                    <span>Other Information</span>
                  </Tab>
                ) : (
                  <div style={{ display: 'none' }}>
                    <Tab></Tab>
                  </div>
                )}

                {user && user.currentUser.role.name === 'STUDENT' ? (
                  <Tab>
                    <span>Notification</span>
                  </Tab>
                ) : (
                  <div style={{ display: 'none' }}>
                    <Tab></Tab>
                  </div>
                )}

                {user && user.currentUser.role.name === 'COACH' ? (
                  <Tab>
                    <span>Bank</span>
                  </Tab>
                ) : (
                  <div style={{ display: 'none' }}>
                    <Tab></Tab>
                  </div>
                )}

                {user && user.currentUser.role.name === 'COACH' ? (
                  <Tab>
                    <span>Other Information</span>
                  </Tab>
                ) : (
                  <div style={{ display: 'none' }}>
                    <Tab></Tab>
                  </div>
                )}

                {user && user.currentUser.role.name === 'COACH' ? (
                  <Tab>
                    <span>Availability & Notification</span>
                  </Tab>
                ) : (
                  <div style={{ display: 'none' }}>
                    <Tab></Tab>
                  </div>
                )}
              </div>

              <div className='tab-progress' />

              <PanelList state={state}>
                <Panel>
                  <section className='profile_details_section'>
                    <div className='full_row settings_box profile_details'>
                      <div className='profile_details_left'>
                        <form onSubmit={e => onSubmit2(e)}>
                          <div className='full_row each_student_sett_header'>
                            <p> Profile Information </p>
                            <span>
                              {' '}
                              Your personal information is never shown to other
                              users{' '}
                            </span>
                          </div>
                          <div className='flex_r_a_center image_change_div'>
                            <div className='image'>
                              <img
                                src={`${profile && profile.userpic}`}
                                alt=''
                              />
                            </div>
                            <div className='link'>
                              <label htmlFor='uploadpix'>{filename}</label>
                              <input
                                name='uploadpix'
                                id='uploadpix'
                                onChange={handleFile}
                                type='file'
                                required
                              />
                            </div>
                          </div>
                          {uploadPercentage > 0 ? (
                            <Progress percentage={uploadPercentage} />
                          ) : (
                            ''
                          )}
                          <div className='full_row setings_form_wrapper'>
                            <div className='common_input_wrapper_2'>
                              <label></label>
                              <input
                                type='text'
                                name='firstname'
                                value={firstname}
                                placeholder='First Name'
                                onChange={e => onChange(e)}
                                disabled
                              />
                            </div>
                            <div className='common_input_wrapper_2'>
                              <label></label>
                              <input
                                type='text'
                                name='lastname'
                                value={lastname}
                                placeholder='Last Name'
                                onChange={e => onChange(e)}
                                disabled
                              />
                            </div>
                            <div className='common_input_wrapper_2'>
                              <label></label>
                              <input
                                type='email'
                                name='email'
                                placeholder='Email'
                                value={email}
                                onChange={e => onChange(e)}
                                disabled
                              />
                            </div>
                            <div className='common_input_wrapper_2'>
                              <label></label>
                              <input
                                type='number'
                                name='phone_number'
                                placeholder='Phone Number'
                                value={phone_number}
                                onChange={e => onChange(e)}
                                required
                              />
                            </div>
                            <div className='full_row button'>
                              <button
                                type='submit'
                                className='full_width_btn red_btn'
                              >
                                Update profile information
                              </button>
                            </div>
                          </div>
                        </form>
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
                            <label></label>
                            <input
                              type='text'
                              name='currentpassword'
                              placeholder='Current Password'
                            />
                          </div>
                          <div className='common_input_wrapper_2'>
                            <label></label>
                            <input
                              type='text'
                              name='newpassword'
                              placeholder='New Password'
                            />
                          </div>
                          <div className='common_input_wrapper_2'>
                            <label></label>
                            <input
                              type='text'
                              name='confirmnewpassword'
                              placeholder='Confirm new password'
                            />
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
                </Panel>

                {user && user.currentUser.role.name === 'STUDENT' ? (
                  <Panel>
                    <section className='other_information_section'>
                      <div className='full_row settings_box profile_details'>
                        <div className=''>
                          <div className='full_row each_student_sett_header'>
                            <p> Other Information </p>
                            <span>
                              {' '}
                              Your personal information is never shown to other
                              users{' '}
                            </span>
                          </div>
                          <form onSubmit={e => onSubmit(e)}>
                            <div className='full_row setings_form_wrapper'>
                              <div className='full_row cols-2'>
                                <div className='common_input_wrapper_2'>
                                  <input
                                    type='date'
                                    name='dob'
                                    placeholder='Date of Birth'
                                    value={dob}
                                    onChange={e => onChange(e)}
                                    required
                                  />
                                </div>
                                <div className='common_input_wrapper_2'>
                                  <select
                                    type='text'
                                    name='sex'
                                    placeholder='Sex'
                                    value={sex}
                                    onChange={e => onChange(e)}
                                    required
                                  >
                                    <option defaultValue='Sex'>Sex</option>
                                    <option value='male'>Male</option>
                                    <option value='Female'>Female</option>
                                  </select>
                                </div>
                              </div>
                              <div className='common_input_wrapper_2'>
                                <label></label>
                                <input
                                  type='text'
                                  name='qualitifcation'
                                  placeholder='Qualification'
                                  value={qualitifcation}
                                  onChange={e => onChange(e)}
                                  required
                                />
                              </div>
                              <div className='common_input_wrapper_2'>
                                <label></label>
                                <input
                                  type='text'
                                  name='job_title'
                                  placeholder='Job Title'
                                  value={job_title}
                                  onChange={e => onChange(e)}
                                  required
                                />
                              </div>
                              <div className='common_input_wrapper_2'>
                                <label></label>
                                <input
                                  type='text'
                                  name='location'
                                  placeholder='Location'
                                  value={location}
                                  onChange={e => onChange(e)}
                                  required
                                />
                              </div>
                              <div className='full_row button'>
                                <button
                                  type='submit'
                                  className='full_width_btn red_btn'
                                >
                                  Update profile information
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </section>
                  </Panel>
                ) : (
                  <div style={{ display: 'none' }}>
                    <Panel></Panel>
                  </div>
                )}

                {user && user.currentUser.role.name === 'STUDENT' ? (
                  <Panel>
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
                                <label>
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
                                  Get invites to give feedback, newsletters, and
                                  tips{' '}
                                </span>
                              </div>
                            </div>
                            <div className='flex_r'>
                              <div className='radio_option'>
                                <label>
                                  <input
                                    type='radio'
                                    name='notification'
                                    id='sms'
                                  />
                                  <span></span>
                                </label>
                              </div>
                              <div className='notification_label'>
                                <p> Text SMS notifications </p>
                                <span>
                                  {' '}
                                  Get SMS’s on appointment bookings,
                                  transactions e.t.c{' '}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </Panel>
                ) : (
                  <div style={{ display: 'none' }}>
                    <Panel></Panel>
                  </div>
                )}

                {user && user.currentUser.role.name === 'COACH' ? (
                  <Panel>
                    <section className='other_information_section'>
                      <div className='full_row settings_box profile_details'>
                        <div className=''>
                          <form onSubmit={e => onSubmit3(e)}>
                            <div className='full_row each_student_sett_header'>
                              <p> Bank Information </p>
                              <span>
                                {' '}
                                Your bank information is never shown to other
                                users{' '}
                              </span>
                            </div>
                            <div className='full_row setings_form_wrapper'>
                              <div className='common_input_wrapper_2'>
                                <label></label>
                                <input
                                  type='text'
                                  name='bank'
                                  placeholder='Bank Name'
                                  value={bank}
                                  onChange={e => onChange(e)}
                                  required
                                />
                              </div>
                              <div className='common_input_wrapper_2'>
                                <label></label>
                                <input
                                  type='number'
                                  name='account_number'
                                  placeholder='Account Number'
                                  value={account_number}
                                  onChange={e => onChange(e)}
                                  required
                                />
                              </div>
                              <div className='common_input_wrapper_2'>
                                <label></label>
                                <input
                                  type='text'
                                  name='account_name'
                                  placeholder='Account Name'
                                  value={account_name}
                                  onChange={e => onChange(e)}
                                  required
                                />
                              </div>
                              <div className='full_row button'>
                                <button
                                  type='submit'
                                  className='full_width_btn red_btn'
                                >
                                  Update profile information
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </section>
                  </Panel>
                ) : (
                  <div style={{ display: 'none' }}>
                    <Panel></Panel>
                  </div>
                )}
                {user && user.currentUser.role.name === 'COACH' ? (
                  <Panel>
                    <section className='other_information_section'>
                      <div className='full_row settings_box profile_details'>
                        <div className=''>
                          <form onSubmit={e => onSubmit4(e)}>
                            <div className='full_row each_student_sett_header'>
                              <p> Other Information </p>
                            </div>
                            <div className='full_row setings_form_wrapper'>
                              <div className='common_input_wrapper_2'>
                                <label></label>
                                <textarea
                                  type='text'
                                  rows='5'
                                  cols='70'
                                  name='about_me'
                                  value={about_me}
                                  placeholder='More about you'
                                  onChange={e => onChange(e)}
                                  required
                                />
                              </div>
                              <div className='common_input_wrapper_2'>
                                <label></label>
                                <input
                                  type='text'
                                  name='specialization'
                                  placeholder='Specialization'
                                  value={specialization}
                                  onChange={e => onChange(e)}
                                  required
                                />
                              </div>
                              <div className='common_input_wrapper_2'>
                                <label></label>
                                <input
                                  type='text'
                                  name='certifications'
                                  placeholder='Certifications'
                                  value={certifications}
                                  onChange={e => onChange(e)}
                                  required
                                />
                              </div>
                              <div className='common_input_wrapper_2'>
                                <label></label>
                                <input
                                  type='text'
                                  name='youtube_link'
                                  placeholder='Youtube Link'
                                  value={youtube_link}
                                  onChange={e => onChange(e)}
                                  required
                                />
                              </div>
                              <div className='common_input_wrapper_2'>
                                <label></label>
                                <input
                                  type='text'
                                  name='facebook'
                                  placeholder='Facebook'
                                  value={facebook}
                                  onChange={e => onChange(e)}
                                  required
                                />
                              </div>
                              <div className='common_input_wrapper_2'>
                                <label></label>
                                <input
                                  type='text'
                                  name='twitter'
                                  placeholder='twitter'
                                  value={twitter}
                                  onChange={e => onChange(e)}
                                  required
                                />
                              </div>
                              <div className='common_input_wrapper_2'>
                                <label></label>
                                <input
                                  type='text'
                                  name='linkedin'
                                  placeholder='Linkedin'
                                  value={linkedin}
                                  onChange={e => onChange(e)}
                                  required
                                />
                              </div>
                              <div className='full_row button'>
                                <button
                                  type='submit'
                                  className='full_width_btn red_btn'
                                >
                                  Update profile information
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </section>
                  </Panel>
                ) : (
                  <div style={{ display: 'none' }}>
                    <Panel></Panel>
                  </div>
                )}

                {user && user.currentUser.role.name === 'COACH' ? (
                  <Panel>
                    <section className='availability_section'>
                      <div className='full_row settings_box profile_details'>
                        <div className='full_row top_part'>
                          <div className='full_row header'>
                            <p>
                              When would you like to be available for
                              appointment
                            </p>
                          </div>
                          <div className='flex_r_j_between_align_center  time_zone'>
                            <div className='left'>
                              {' '}
                              <p> Time Zone </p>{' '}
                            </div>
                            <div className='right'>
                              <div className='common_input_wrapper_2'>
                                <select
                                  name=''
                                  id=''
                                  className='search_select search_select2'
                                >
                                  <option value=''>
                                    {' '}
                                    (+01:00) West Central Africa{' '}
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='full_row bottom_part'>
                          <div className='flex_r_j_between_align_center top'>
                            <div className='left'>
                              <p> Available </p>
                            </div>
                            <div className='flex_r_j_end_align_center right'>
                              <div className='from'>
                                <div className='common_input_wrapper_2'>
                                  <select
                                    name=''
                                    id=''
                                    className='search_select search_select2'
                                  >
                                    <option value=''> 00:00 </option>
                                  </select>
                                </div>
                              </div>
                              <div className='flex_r_a_center to'>
                                <p> to </p>
                                <div className='common_input_wrapper_2'>
                                  <select
                                    name=''
                                    id=''
                                    className='search_select search_select2'
                                  >
                                    <option value=''> 00:30 </option>
                                  </select>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className='flex_r_j_between_align_center week_days'>
                            <div>
                              <input type='checkbox' name='' id='mon' />
                              <label for='mon'> Mon </label>
                            </div>
                            <div>
                              <input type='checkbox' name='' id='tue' />
                              <label for='tue'> tue </label>
                            </div>
                            <div>
                              <input type='checkbox' name='' id='wed' />
                              <label for='wed'> wed </label>
                            </div>
                            <div>
                              <input type='checkbox' name='' id='thurs' />
                              <label for='thurs'> thurs </label>
                            </div>
                            <div>
                              <input type='checkbox' name='' id='fri' />
                              <label for='fri'> fri </label>
                            </div>
                            <div>
                              <input type='checkbox' name='' id='sat' />
                              <label for='sat'> sat </label>
                            </div>
                            <div>
                              <input type='checkbox' name='' id='sun' />
                              <label for='sun'> sun </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section className='notification_section2'>
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
                            <div class='flex_r'>
                              <div class='radio_option'>
                                <label for='email'>
                                  <input
                                    type='radio'
                                    name='notification'
                                    id='email'
                                  />
                                  <span></span>
                                </label>
                                <div class='notification_label'>
                                  <p> Email updates </p>
                                  <span>
                                    {' '}
                                    Get invites to give feedback, newsletters,
                                    and tips{' '}
                                  </span>
                                </div>
                              </div>
                              <div class='flex_r'>
                                <div class='radio_option'>
                                  <label for='sms'>
                                    <input
                                      type='radio'
                                      name='notification'
                                      id='sms'
                                    />
                                    <span></span>
                                  </label>
                                </div>
                                <div class='notification_label'>
                                  <p> Text SMS notifications </p>
                                  <span>
                                    {' '}
                                    Get SMS’s on appointment bookings,
                                    transactions e.t.c{' '}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </Panel>
                ) : (
                  <div style={{ display: 'none' }}>
                    <Panel></Panel>
                  </div>
                )}
              </PanelList>
            </div>
          </Tabs>
        </section>
      </section>
    </Fragment>
  );
};

CreateProfile.propTypes = {
  auth: PropTypes.object.isRequired,
  createProfile: PropTypes.func.isRequired,
  profileImage: PropTypes.func.isRequired,
  coachOtherInfo: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, {
  createProfile,
  profileImage,
  getCurrentProfile,
  coachOtherInfo
})(withRouter(CreateProfile));
