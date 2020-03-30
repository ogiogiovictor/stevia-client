import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getCoachesProfile } from '../../../../actions/profile';
import { bookACoach } from '../../../../actions/service';
import { connect } from 'react-redux';
import Header from '../../Layout/Header';
import Topnav from '../../Layout/Topnav';
import { render } from 'react-dom';
import { Wizard, Steps, Step, Navigation, Progress } from 'react-wizr';
import { useForm } from 'react-hook-form';
import './Style.css';

const BookCoach = ({
  getCoachesProfile,
  bookACoach,
  profile: { coaches, loading },
  user,
  match
}) => {
  const { register, errors, formState } = useForm({
    mode: 'onChange'
  });
  const [formData, setFormData] = useState({
    coach_id: '',
    service_id: '',
    channel_id: '',
    note: '',
    amount: '',
    date: ''
  });

  const { service_id, note, amount, date } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  useEffect(() => {
    getCoachesProfile();
  }, [getCoachesProfile]);

  let selectedOption = 'Pick a Service';

  const coach = coaches
    ? coaches.find(({ id }) => id === parseInt(match.params.id))
    : '';

  const findservice = coach
    ? coach.services.find(({ id }) => id === parseInt(service_id))
    : '';

    const onSubmit = e => {
      e.preventDefault();
      formData.coach_id = match.params.id;
      formData.channel_id = service_id;
      formData.student_id = user.currentUser.id;
      formData.course_type = 'appointment';
      formData.status = 'pending';
      bookACoach(formData);
    };

  const SimpleNavigation = () => (
    <Navigation
      render={({ activeStepIndex, goToNextStep, goToPrevStep, totalSteps }) => (
        <div className='flex_r_j_end_align_center btn'>
          {activeStepIndex > 0 && (
            <button className='grey_btn' onClick={goToPrevStep}>
              Go Back
            </button>
          )}
          {activeStepIndex < totalSteps - 1 && (
            <button type='submit' disabled={!formState.isValid} className='black_btn' onClick={goToNextStep}>
              Continue
            </button>
          )}
        </div>
      )}
    />
  );

  const ProgressBar = () => (
    <Progress
      render={({ percentage }) => {
        const styles = {
          width: `${percentage}%`
        };

        return (
          <div className='ProgressBar no-print'>
            <span className='ProgressBar-value' style={styles} />
          </div>
        );
      }}
    />
  );
  return (
    <Fragment>
      <section className='whole_page_wrapper'>
        <Header menu={user && user.menu} />
        <section className='dashboard_body'>
          <Topnav
            user={user}
            htitle='Create Appointment'
            back='Back to Coaches'
          />
          <div class='full_row appointment_setting_wrapper'>
            <div class='dashboard_center'>
              <div class='appointment_setting'>
                <div class='settings_progress'>
                  <div class='active'>
                    <span> Select Service </span>
                  </div>
                  <div>
                    <span> Appointment Type </span>
                  </div>
                  <div>
                    <span> Set Date and Time </span>
                  </div>
                  <div>
                    <span> Review and Pay </span>
                  </div>
                  <div>
                    <span> Status </span>
                  </div>
                </div>
                <div class='full_row settings_container'>
                  <Wizard
                    onStepChanged={({ step }) =>
                      console.log(`Step changed: ${step.id}`)
                    }
                  >
                    <ProgressBar />
                    <Steps>
                      <Step id='first'>
                        <section>
                          <form action=''>
                            <div class='full_row select_service'>
                              <div class='heder_text_div'>
                                <p>Select which service you want to book</p>
                              </div>
                              <div class='settings_content'>
                                <div class='left'>
                                <div className={!errors.service_id ? '' : 'alert alert-danger'}>
                {errors.service_id && errors.service_id.message}
              </div>
                                  <div class='flex_r_wrap service_select'>
                                    <select
                                      name='service_id'
                                      className='search_select search_select2'
                                      onChange={e => onChange(e)}
                                      value={service_id}
                                      ref={register({ required: 'Choose a Service' })}
                                    >
                                      <option selected>{selectedOption}</option>
                                      {coach ? (
                                        coach.services.map(service => (
                                          <option
                                            key={service.id}
                                            value={service.id}
                                          >
                                            {service.service}
                                          </option>
                                        ))
                                      ) : (
                                        <option>No Services Found...</option>
                                      )}
                                    </select>
                                  </div>
                                  <div class='full_row add_note'>
                                    <div class='head'>
                                      <p>
                                        What do you want to achieve from this?
                                      </p>
                                    </div>
                                    <div class='common_input_wrapper_2'>
                                      <textarea
                                        name='note'
                                        cols='20'
                                        rows='5'
                                        value={note}
                                        onChange={e => onChange(e)}
                                        ref={register({ required: 'This Field is required' })}
                                        required
                                      ></textarea>
                                    </div>
                                    <div className={!errors.note ? '' : 'alert alert-danger'}>
                {errors.note && errors.note.message}
              </div>
                                  </div>
                                  <SimpleNavigation />
                                </div>
                                <div class='right'>
                                  <div class='full_row help_box'>
                                    <div class='full_row flex_r_a_center head'>
                                      <i class='far fa-lightbulb'></i>
                                      <p>Help message</p>
                                    </div>
                                    <div class='full_row body'>
                                      <p>
                                        Enter a short description of what you
                                        aim to achieve at the end of the
                                        session.
                                      </p>
                                      <p>
                                        Ensure you have access to good internet
                                        as some classes would require 45mins
                                        Video calls
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </section>
                      </Step>
                      <Step id='second'>
                        <section>
                          <div class='full_row appointment_types'>
                            <div class='heder_text_div'>
                              <p>
                                Select appointment type that fits your budget.
                              </p>
                            </div>
                            <div class='settings_content'>
                              <div class='left'>
                                <div class='flex_r_wrap app_type'>
                                  <div className='form-check'>
                                    <label>
                                      <input
                                        type='radio'
                                        name='amount'
                                        value={
                                          findservice &&
                                          findservice.price_per_session
                                        }
                                        ref={register({ required: 'This Field is required' })}
                                        className='form-check-input'
                                        onChange={e => onChange(e)}
                                        readOnly
                                      />
                                      Price Per Session:{' '}
                                      {findservice &&
                                        findservice.price_per_session}
                                    </label>
                                  </div>
                                  <div className='form-check'>
                                    <label>
                                      <input
                                        type='radio'
                                        name='amount'
                                        value={
                                          findservice &&
                                          findservice.price_per_hour
                                        }
                                        ref={register({ required: 'This Field is required' })}
                                        className='form-check-input'
                                        onChange={e => onChange(e)}
                                        readOnly
                                      />
                                      Price Per Hour:{' '}
                                      {findservice &&
                                        findservice.price_per_hour}
                                    </label>
                                    <div
                                    className={
                                      !errors.amount ? '' : 'alert alert-danger'
                                    }
                                  >
                                    {errors.amount && errors.amount.message}
                                  </div>
                                  </div>
                                  
                                </div>
                                <SimpleNavigation />
                              </div>
                              <div class='right'>
                                <div class='full_row help_box'>
                                  <div class='full_row flex_r_a_center head'>
                                    <i class='far fa-lightbulb'></i>
                                    <p>Help message</p>
                                  </div>
                                  <div class='full_row body'>
                                    <p>
                                      Booking a coach can be done in two
                                      different ways, i.e per session or per
                                      hour.
                                    </p>
                                    <p>
                                      Select the appointment type that suits.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </Step>
                      <Step id='third'>
                        <section>
                          <div class='full_row date_n_time'>
                            <div class='heder_text_div'>
                              <p>Select Date and Time.</p>
                            </div>
                            <div class='settings_content'>
                              <div class='left'>
                                <div className='label'>
                                  <p> Date: </p>
                                </div>
                                <div className='common_input_wrapper_2'>
                                  <input
                                    type='date'
                                    name='date'
                                    value={date}
                                    placeholder='MM / DD / YY'
                                    onChange={e => onChange(e)}
                                    required
                                  />
                                </div>

                                <div className='flex_r_a_center time'>
                                  <div className='label'>
                                    {' '}
                                    <p> From: </p>{' '}
                                  </div>
                                  <div className='common_input_wrapper_2'>
                                    <input
                                      type='time'
                                      name='from_time'
                                      value={''}
                                      placeholder='00:00 AM'
                                      onChange={e => onChange(e)}
                                      required
                                    />
                                  </div>
                                </div>
                                <div className='flex_r_a_center to'>
                                  <div className='label'>
                                    {' '}
                                    <p> To: </p>{' '}
                                  </div>
                                  <div className='common_input_wrapper_2'>
                                    <input
                                      type='time'
                                      name='to_time'
                                      value={''}
                                      placeholder='00:00 AM'
                                      onChange={e => onChange(e)}
                                      required
                                    />
                                  </div>
                                </div>
                                <SimpleNavigation />
                              </div>
                              <div class='right'>
                                <div class='full_row help_box'>
                                  <div class='full_row flex_r_a_center head'>
                                    <i class='far fa-lightbulb'></i>
                                    <p>Help message</p>
                                  </div>
                                  <div class='full_row body'>
                                    <p>
                                      Booking a coach can be done in two
                                      different ways, i.e per session or per
                                      hour.
                                    </p>
                                    <p>
                                      Select the appointment type that suits.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </Step>
                      <Step id='fourth'>
                        <section>
                          <form onSubmit={e => onSubmit(e)}>
                          <div class='full_row review_n_pay'>
                            <div class='heder_text_div'>
                              <p>
                                Please review your appointment details below,
                                then click ‘Pay’ to proceed with the
                                transaction.
                              </p>
                            </div>
                            <div class='settings_content'>
                              <div class='left'>
                                <div class='full_row appointment'>
                                  <div>
                                    <div class='full_row card_body'>
                                      <div class='flex_r_a_center'>
                                        <div class='image'>
                                          <img
                                            src={user && user.currentUser.image}
                                            alt=''
                                          />
                                        </div>
                                        <div class='name'>
                                          <h4>
                                            {user && user.currentUser.firstname}{' '}
                                            {user && user.currentUser.lastname}
                                          </h4>
                                          <p>
                                            {' '}
                                            {findservice && findservice.service}
                                          </p>
                                        </div>
                                      </div>
                                      <div class='full_row note'>
                                        <h6> Note </h6>
                                        <p>{note}</p>
                                      </div>
                                      <div class='full_row channel'>
                                        <h4> Communication channel </h4>
                                        <p>
                                          {findservice &&
                                            findservice.communication}
                                        </p>
                                      </div>
                                      <div class='flex_r_j_between_align_center date_top'>
                                        <div class='flex_r_a_center'>
                                          <div>
                                            {' '}
                                            <i class='far fa-calendar'></i>{' '}
                                          </div>
                                          <div>
                                            {' '}
                                            <span> {date} </span>{' '}
                                          </div>
                                        </div>
                                        <div class='flex_r_a_center'>
                                          <div>
                                            {' '}
                                            <i class='far fa-clock'></i>{' '}
                                          </div>
                                          <div>
                                            {' '}
                                            <span> 2:30 - 3:30 PM </span>{' '}
                                          </div>
                                        </div>
                                      </div>
                                      <div class='flex_r_j_between_align_center date_bottom'>
                                        <div class='flex_r_a_center'>
                                          <div>
                                            {' '}
                                            <i class='far fa-building'></i>{' '}
                                          </div>
                                          <div>
                                            {' '}
                                            <span> {findservice && amount === findservice.price_per_hour ? findservice.price_per_hour + ' per hour'  : findservice &&findservice.price_per_session + ' per session' } </span>{' '}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class='flex_r_j_end_align_center btn'>
                                  <button type='submit' class='black_btn' id='goto_status'>
                                    Pay
                                  </button>
                                </div>
                              </div>
                              <div class='right'>
                                <div class='full_row help_box'>
                                  <div class='full_row flex_r_a_center head'>
                                    <i class='far fa-lightbulb'></i>
                                    <p>Help message</p>
                                  </div>
                                  <div class='full_row body'>
                                    <p>
                                      This is a summary of your booking details.
                                      kindly go through to ensure all the
                                      details provided is accurate.
                                    </p>
                                    <p>Click on pay to confirm booking.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <SimpleNavigation />
                          </form>
                        </section>
                      </Step>
                    </Steps>
                  </Wizard>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </Fragment>
  );
};

BookCoach.propTypes = {
  getCoachesProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  bookACoach: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  user: state.auth.user
});

export default connect(mapStateToProps, { getCoachesProfile, bookACoach })(BookCoach);
