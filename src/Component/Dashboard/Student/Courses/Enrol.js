import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../../Layout/Header';
import Topnav from '../../Layout/Topnav';
import { Link } from 'react-router-dom';
import PaystackButton from 'react-paystack';
import { getCourses } from '../../../../actions/course';
import { v1 as uuidv1 } from 'uuid';
import { Wizard, Steps, Step, Navigation, Progress } from 'react-wizr';
import { verifyPaystack } from '../../../../actions/service';

const Enrol = ({ getCourses, user, courses: { courses, loading }, match }) => {
  useEffect(() => {
    getCourses();
  }, [getCourses]);

  const [payResponse, setPayResponse] = useState({
    r: {},
  });

  const key = 'pk_test_6a77ff890624b4ac9ffc399d415bbc4eff082d9f';
  const course = courses
    ? courses.find(({ id }) => id === parseInt(match.params.id))
    : '';

  const callback = async (response) => {
    console.log(response);
    setPayResponse({ r: response });
    const payStack = await verifyPaystack(response.reference);
    console.log(payStack);
  };

  const close = () => {
    console.log('window closed');
  };
  const getReference = () => {
    let text = uuidv1();
    return text;
  };
  const SimpleNavigation = () => (
    <Navigation
      render={({ activeStepIndex, goToNextStep, goToPrevStep, totalSteps }) => (
        <div className='flex_r_j_end_align_center btn'>
          {activeStepIndex === 0 && payResponse.r.status === 'success'
            ? setTimeout(() => {
                goToNextStep();
              }, 3000)
            : ''}
        </div>
      )}
    />
  );

  const ProgressBar = () => (
    <Progress
      render={({ percentage }) => {
        const styles = {
          width: `${percentage}%`,
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
            htitle='Course Enrolment'
            back='Back to Courses'
          />

          <div class='full_row appointment_setting_wrapper'>
            <div class='dashboard_center'>
              <div class='appointment_setting'>
                <div class='settings_progress'>
                  <div class='active'>
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
                          <div class='full_row review_n_pay'>
                            <div class='heder_text_div'>
                              <p>
                                Please review the course details below, then
                                click ‘Pay’ to proceed with the transaction.
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
                                            {course && course.services[0].name}
                                          </p>
                                        </div>
                                      </div>
                                      <div class='full_row note'>
                                        <h6> Title </h6>
                                        <p>{course && course.title}</p>
                                      </div>
                                      <div></div>
                                      <div class='full_row channel'>
                                        <h4> Communication channel </h4>
                                        <p>
                                          {course &&
                                            course.medium_of_communication}
                                        </p>
                                      </div>
                                      <div class='flex_r_j_between_align_center date_top'>
                                        <div class='flex_r_a_center'>
                                          <div>
                                            <i class='far fa-calendar'></i>
                                          </div>
                                          <div>
                                            <span>{course && course.date}</span>
                                          </div>
                                        </div>
                                        <div class='flex_r_a_center'>
                                          <div>
                                            <i class='far fa-clock'></i>
                                          </div>
                                          <div>
                                            <span>
                                              {course && course.from_time} -{' '}
                                              {course && course.to_time}
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
                                              ₦{' '}
                                              {course &&
                                                course.price_per_session}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {}
                                {}
                                <div class='flex_r_j_end_align_center btn'>
                                  {payResponse.r.status !== 'success' ?
                                  <PaystackButton
                                    text='Pay'
                                    class='black_btn'
                                    callback={callback}
                                    close={close}
                                    disabled={false}
                                    embed={false}
                                    reference={getReference()}
                                    email={user.currentUser.email}
                                    amount={
                                      course &&
                                      Number(course.price_per_session) * 100
                                    }
                                    paystackkey={key}
                                    tag='button'
                                    metadata={{
                                      first_name:
                                        user && user.currentUser.firstname,
                                      last_name:
                                        user && user.currentUser.lastname,
                                    }}
                                  /> : ''}
                                </div>
                                {payResponse.r.status === 'success' ? (
                                    <div class='full_row body'>
                                      <br />
                                      <p>verifying payment please wait...</p>
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
                                      This is a summary of your course details.
                                      kindly go through to ensure all the
                                      details provided is accurate.
                                    </p>
                                    <p>Click on pay make payment for the course.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </Step>
                      <Step id='second'>
                        <div class='full_row status text-center'>
                          <h5>Appointment created successfully</h5>
                                  <p>You successfully made payment of ₦{course && course.price_per_session} with reference no. {payResponse.r.reference} for {course && course.title} course</p>
                          <p>
                            <br />
                            wait for the coach to activate your course
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
};

Enrol.propTypes = {
  profile: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  services: PropTypes.object.isRequired,
  bookACoach: PropTypes.func.isRequired,
  getCourses: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  services: state.services,
  profile: state.profile,
  user: state.auth.user,
  courses: state.courses,
});

export default connect(mapStateToProps, { getCourses })(Enrol);
