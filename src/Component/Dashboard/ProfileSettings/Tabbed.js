import React, { useState, useRef, useEffect, cloneElement } from 'react';
import { Tabs, useTabState, Panel } from '@bumaga/tabs';
import { motion, AnimatePresence } from 'framer-motion';
import './tab.css';
import { Link } from 'react-router-dom';

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

export default () => {
  const state = useState(0);

  return (
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
          </Panel>

          <Panel>
            <section class='other_information_section'>
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
                        <label for='email'>
                          <input type='radio' name='notification' id='email' />
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
                          Get SMS’s on appointment bookings, transactions e.t.c{' '}
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
  );
};
