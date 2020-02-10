import React, {
  useState,
  useRef,
  useEffect,
  cloneElement,
  Fragment
} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Sidebar from '../Sidebar';
import { Link, withRouter } from 'react-router-dom';
import Spinner from '../../Spinner/Spinner';
import { Tabs, useTabState, Panel } from '@bumaga/tabs';
import { motion, AnimatePresence } from 'framer-motion';
import './tab.css';
import { createProfile, getCurrentProfile } from '../../../actions/profile';

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
  auth: { user },
  profile: { profile, loading },
  createProfile,
  getCurrentProfile,
  history
}) => {
  const state = useState(0);
  const [formData, setFormData] = useState({
    dob: '',
    state: '',
    country: '',
    sex: '',
    qualitifcation: '',
    location: ''
  });

  useEffect(() => {
    getCurrentProfile();
    setFormData({
      dob: loading || !profile.dob ? '' : profile.dob,
      state: loading || !profile.state ? '' : profile.state,
      country: loading || !profile.country ? '' : profile.country,
      sex: loading || !profile.sex ? '' : profile.sex,
      qualitifcation: loading || !profile.qualitifcation ? '' : profile.qualitifcation,
      location: loading || !profile.location ? '' : profile.location,

    })
  }, [loading]);

  const { dob, country, sex, qualitifcation, location } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  if (loading && user === null) {
    return <Spinner />;
  }

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history, true);
  };

  

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
                    <h6>
                      {user.currentUser.firstname} {user.currentUser.lastname}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Tabs state={state}>
            <div className='tabs'>
              <div className='tab-list'>
                <Tab>
                  <span>Profile details</span>
                </Tab>

                <Tab>
                  <span>Other Information</span>
                </Tab>

                <Tab>
                  <span>Notification</span>
                </Tab>
              </div>

              <div className='tab-progress' />

              <PanelList state={state}>
                <Panel>
                  <section className='profile_details_section'>
                    <div className='full_row settings_box profile_details'>
                      <div className='profile_details_left'>
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
                            <label></label>
                            <input
                              type='text'
                              name='firstname'
                              value=''
                              placeholder='First Name'
                              onChange={e => onChange(e)}
                            />
                          </div>
                          <div className='common_input_wrapper_2'>
                            <label></label>
                            <input
                              type='text'
                              name='lastname'
                              value=''
                              placeholder='Last Name'
                              onChange={e => onChange(e)}
                            />
                          </div>
                          <div className='common_input_wrapper_2'>
                            <label></label>
                            <input
                              type='email'
                              name='email'
                              placeholder='Email'
                              value=''
                              onChange={e => onChange(e)}
                            />
                          </div>
                          <div className='common_input_wrapper_2'>
                            <label></label>
                            <input
                              type='number'
                              name='phone_number'
                              placeholder='Phone Number'
                              value=''
                              onChange={e => onChange(e)}
                            />
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
                                <input
                                  type='text'
                                  name='sex'
                                  placeholder='Sex'
                                  value={sex}
                                  onChange={e => onChange(e)}
                                  required
                                />
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
                                name='state'
                                placeholder='State'
                                value={formData.state}
                                onChange={e => onChange(e)}
                                required
                              />
                            </div>
                            <div className='common_input_wrapper_2'>
                              <label></label>
                              <input
                                type='text'
                                name='country'
                                placeholder='Country'
                                value={country}
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
                                Get SMS’s on appointment bookings, transactions
                                e.t.c{' '}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </Panel>
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
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  withRouter(CreateProfile)
);
