import React, { Component, Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PaystackButton from 'react-paystack';
import { getCoachesProfile } from '../../../../actions/profile';
import { bookACoach } from '../../../../actions/service';
import Header from '../../Layout/Header';
import Topnav from '../../Layout/Topnav';
import { Wizard, Steps, Step, Navigation, Progress } from 'react-wizr';
import { useForm } from 'react-hook-form';
import './Style.css';
import { Redirect, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import moment from 'moment';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import '@fullcalendar/timegrid/main.css';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import { v1 as uuidv1 } from 'uuid';

class BookCoach extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coach_id: '',
      service_id: '',
      channel_id: '',
      note: '',
      amount: 0,
      date: '',
      start_time: '',
      end_time: '',
      totalhours: 0,
      key: 'pk_test_6a77ff890624b4ac9ffc399d415bbc4eff082d9f',
      email: this.props.user.currentUser.email,
      payResponse: {}
    };
  }

  componentDidMount() {
    this.props.getCoachesProfile();
  }

  findservice = {};

  handleSelect = selectedInfo => {
    const startTime = moment(selectedInfo.startStr).format('HH.mm');
    const endTime = moment(selectedInfo.endStr).format('HH.mm');
    const totalhours = Number(endTime) - Number(startTime);

    this.setState({
      date: moment(selectedInfo.startStr).format('YYYY-MM-DD'),
      start_time: startTime,
      end_time: endTime,
      totalhours: totalhours
    });
    console.log(this.state.totalhours);
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  callback = response => {
    this.setState({ payResponse: response });
    if (response.status === 'success') {
      const formData = {
        coach_id: this.props.match.params.id,
        service_id: this.state.service_id,
        channel_id: this.state.service_id,
        student_id: this.props.user.currentUser.id,
        course_type: 'appointment',
        start_time: this.state.start_time,
        end_time: this.state.end_time,
        date: this.state.date,
        amount: parseInt(this.state.amount),
        note: this.state.note
      };
      this.props.bookACoach(formData);
    }
  };

  close = () => {
    console.log('window closed');
  };
  getReference = () => {
    //you can put any unique reference implementation code here
    let text = uuidv1();
    // let possible =
    //   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=';

    // for (let i = 0; i < 15; i++)
    //   text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  };

  render() {
    const { user, profile, match } = this.props;

    const { service_id, note, amount, date, start_time, end_time } = this.state;
    console.log(amount);

    const coach = profile
      ? profile.coaches.find(({ id }) => id === parseInt(match.params.id))
      : '';

    if (coach && !coach.appointment.length > 0) {
      const tmsg = `${coach.firstname} ${coach.lastname} is not available`;
      toast(tmsg, 'error');
      return <Redirect to='/dashboard/student/coaches' />;
    }

    let selectedOption = 'Pick a Service';

    this.findservice = coach
      ? coach.services.find(({ id }) => id === parseInt(service_id))
      : '';

    const SimpleNavigation = () => (
      <Navigation
        render={({
          activeStepIndex,
          goToNextStep,
          goToPrevStep,
          totalSteps
        }) => (
          <div className='flex_r_j_end_align_center btn'>
            {/* {activeStepIndex > 0 && (
              <button className='grey_btn' onClick={goToPrevStep}>
                Go Back
              </button>
            )}
            {activeStepIndex < totalSteps - 1 && (
              <button
                type='submit'
                className='black_btn'
                onClick={goToNextStep}
              >
                Continue
              </button>
            )} */}
            {activeStepIndex === 0 && (
              <button className='black_btn' onClick={goToNextStep}>
                Continue
              </button>
            )}
            {activeStepIndex === 1 && (
              <div>
                <button className='grey_btn' onClick={goToPrevStep}>
                  Go Back
                </button>
                <button className='black_btn' onClick={goToNextStep}>
                  Continue
                </button>
              </div>
            )}
            {activeStepIndex === 2 && (
              <div>
                <button className='grey_btn' onClick={goToPrevStep}>
                  Go Back
                </button>
                <button className='black_btn' onClick={goToNextStep}>
                  Continue
                </button>
              </div>
            )}
            {activeStepIndex === 3 &&
            this.state.payResponse.status !== 'success' ? (
              <button className='grey_btn' onClick={goToPrevStep}>
                Go Back
              </button>
            ) : (
              ''
            )}
            {activeStepIndex === 3 &&
            this.state.payResponse.status === 'success' ? (
              <button className='black_btn' onClick={goToNextStep}>
                Continue
              </button>
            ) : (
              ''
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
                      <span> Set Date and Time </span>
                    </div>
                    <div>
                      <span> Appointment Type </span>
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
                            <div class='full_row select_service'>
                              <div class='heder_text_div'>
                                <p>Select which service you want to book</p>
                              </div>
                              <div class='settings_content'>
                                <div class='left'>
                                  <div class='flex_r_wrap service_select'>
                                    <select
                                      name='service_id'
                                      className='search_select search_select2'
                                      onChange={this.handleChange}
                                      value={this.state.service_id}
                                    >
                                      <option defaultValue>
                                        {selectedOption}
                                      </option>
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
                                        onChange={this.handleChange}
                                        required
                                      ></textarea>
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
                          </section>
                        </Step>
                        <Step id='second'>
                          <section>
                            <div class='full_row date_n_time'>
                              <div class='heder_text_div'>
                                <p className='callout'>
                                  Click an event to see more info, or drag the
                                  mouse over the calendar to select a date/time
                                  range.
                                </p>
                              </div>
                              <div>
                                <div>
                                  <div>
                                    <FullCalendar
                                      defaultView='timeGridWeek'
                                      weekends={true}
                                      allDaySlot={false}
                                      plugins={[
                                        timeGridPlugin,
                                        dayGridPlugin,
                                        interactionPlugin
                                      ]}
                                      selectable={true}
                                      selectMirror={true}
                                      selectOverlap={false}
                                      select={this.handleSelect}
                                      height={650}
                                      header={{
                                        left: 'prev,next today',
                                        center: 'title',
                                        right:
                                          'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
                                      }}
                                      businessHours={{
                                        daysOfWeek:
                                          coach &&
                                          Object.keys(
                                            JSON.parse(coach.appointment[0].day)
                                          ),
                                        startTime:
                                          coach &&
                                          JSON.parse(coach.appointment[0].time)
                                            .start,
                                        endTime:
                                          coach &&
                                          JSON.parse(coach.appointment[0].time)
                                            .end,
                                        color: 'red'
                                      }}
                                      selectConstraint={'businessHours'}
                                      slotDuration={'00:60:00'}
                                    />
                                    <div>
                                      <br />{' '}
                                      {start_time && end_time
                                        ? `Your Appointment will be on ${moment(
                                            date
                                          ).format(
                                            'MMMM Do YYYY'
                                          )} From: ${start_time} To: ${end_time}`
                                        : ''}
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
                                            this.findservice &&
                                            this.findservice.price_per_session
                                          }
                                          className='form-check-input'
                                          onChange={this.handleChange}
                                          readOnly
                                        />
                                        Price Per Session:
                                        {this.findservice &&
                                          this.findservice.price_per_session}
                                      </label>
                                    </div>
                                    <div className='form-check'>
                                      <label>
                                        <input
                                          type='radio'
                                          name='amount'
                                          value={
                                            this.findservice &&
                                            this.findservice.price_per_hour *
                                              this.state.totalhours
                                          }
                                          className='form-check-input'
                                          onChange={this.handleChange}
                                          readOnly
                                        />
                                        Price Per Hour:
                                        {this.findservice &&
                                          this.findservice.price_per_hour}
                                      </label>
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
                                              src={
                                                user && user.currentUser.image
                                              }
                                              alt=''
                                            />
                                          </div>
                                          <div class='name'>
                                            <h4>
                                              {user &&
                                                user.currentUser.firstname}
                                              {user &&
                                                user.currentUser.lastname}
                                            </h4>
                                            <p>
                                              {this.findservice &&
                                                this.findservice.service}
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
                                            {this.findservice &&
                                              this.findservice.communication}
                                          </p>
                                        </div>
                                        <div class='flex_r_j_between_align_center date_top'>
                                          <div class='flex_r_a_center'>
                                            <div>
                                              <i class='far fa-calendar'></i>
                                            </div>
                                            <div>
                                              <span>
                                                {moment(date).format(
                                                  'MMMM Do YYYY'
                                                )}
                                              </span>
                                            </div>
                                          </div>
                                          <div class='flex_r_a_center'>
                                            <div>
                                              <i class='far fa-clock'></i>
                                            </div>
                                            <div>
                                              <span>
                                                {start_time} - {end_time}
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                        <div class='flex_r_j_between_align_center date_bottom'>
                                          <div class='flex_r_a_center'>
                                            <div>
                                              <i class='far fa-building'></i>
                                            </div>
                                            <div>
                                              <span>
                                                {this.findservice &&
                                                amount ===
                                                  this.findservice
                                                    .price_per_session
                                                  ? this.findservice &&
                                                    '₦ ' +
                                                      this.findservice
                                                        .price_per_session +
                                                      ' per session'
                                                  : this.findservice &&
                                                    `₦ ${this.findservice.price_per_hour} per hour * ${this.state.totalhours} = ₦ ${amount}`}
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  {this.state.payResponse.status !==
                                  'success' ? (
                                    <div>
                                      <div class='flex_r_j_end_align_center btn'>
                                        <PaystackButton
                                          text='Pay'
                                          class='black_btn'
                                          callback={this.callback}
                                          close={this.close}
                                          disabled={false}
                                          embed={false}
                                          reference={this.getReference()}
                                          email={this.state.email}
                                          amount={
                                            Number(this.state.amount) * 100
                                          }
                                          paystackkey={this.state.key}
                                          tag='button'
                                        />
                                      </div>
                                      <SimpleNavigation />
                                    </div>
                                  ) : (
                                    ''
                                  )}
                                  {this.state.payResponse.status ===
                                  'success' ? (
                                    <div class='full_row body'>
                                      <br />
                                      <p>{`Your payment was successful your Reference No. is: ${this.state.payResponse.reference} click the continue button below to complete your transaction`}</p>
                                      <SimpleNavigation />
                                    </div>
                                  ) : (
                                    ''
                                  )}
                                </div>
                                <div class='right'>
                                  <div class='full_row help_box'>
                                    <div class='full_row flex_r_a_center head'>
                                      <i class='far fa-lightbulb'></i>
                                      <p>Help message</p>
                                    </div>
                                    <div class='full_row body'>
                                      <p>
                                        This is a summary of your booking
                                        details. kindly go through to ensure all
                                        the details provided is accurate.
                                      </p>
                                      <p>Click on pay to confirm booking.</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        </Step>
                        <Step>
                          <div class='full_row status text-center'>
                            <h5>Appointment created successfully</h5>
                            <p>
                              You successfully made payment of ₦
                              {this.findservice &&
                              amount === this.findservice.price_per_session
                                ? this.findservice.price_per_session +
                                  ` with Reference No. ${this.state.payResponse.reference} to book a session appointment.`
                                : `${amount} with Reference No. ${this.state.payResponse.reference} to book a ${this.state.totalhours} hour(s) appointment.`}
                            </p>
                            <p>
                            <br />wait for the coach to confirm appointment
                            </p>
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                '../../../../assets/utils/images/66.png'
                              }
                              alt=''
                            />

                            <Link to='/dashboard'>
                              <button class='black_btn'>continue</button>
                            </Link>
                          </div>
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
  }
}

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

export default connect(mapStateToProps, { getCoachesProfile, bookACoach })(
  BookCoach
);
