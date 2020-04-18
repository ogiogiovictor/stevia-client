import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import CustomButton from '../CustomButton/CutomButton';
import { useForm } from 'react-hook-form';
import { signup } from '../../actions/auth';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

const Signup = ({ signup, isAuthenticated, role }) => {
  const { handleSubmit, register, errors } = useForm({
    mode: 'onChange',
  });
  const onSubmit = async (values) => {
    setDouble(true);
    const {
      firstname,
      lastname,
      email,
      phone_number,
      password,
      account_type,
    } = values;
    signup({
      firstname,
      lastname,
      email,
      phone_number,
      password,
      account_type,
    });
  };

  const [double, setDouble] = useState(false);

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <section className='whole_page_wrapper'>
        <div className='full_row post_a_job_signup'>
          <div className='form_wrapper'>
            <div className='full_row'>
              <Link to='/'>
                <img
                  src={process.env.PUBLIC_URL + 'assets/utils/images/15.png'}
                  width='100px'
                  alt=''
                />
              </Link>
            </div>
            <div className='full_row login_text'>
              <h3>Create an account</h3>
              <p>to continue to your dashboard</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class='full_row role_header'>
                <p>Choose your role</p>
              </div>
              <div class='full_row signup_option flex_r_wrap'>
                <div
                  className={!errors.account_type ? '' : 'alert alert-danger'}
                >
                  {errors.account_type && errors.account_type.message}
                </div>
                <div className='flex_r'>
                  <div className='radio_option'>
                    <label htmlFor='student'>
                      <input
                        type='radio'
                        name='account_type'
                        value='3'
                        id='student'
                        ref={register({ required: 'Choose desired role' })}
                        readOnly
                      />
                      <span></span>
                    </label>
                  </div>
                  <div class='notification_label'>
                    <p>Student</p>
                  </div>
                </div>

                <div className='flex_r'>
                  <div className='radio_option'>
                    <label htmlFor='coach'>
                      <input
                        type='radio'
                        name='account_type'
                        value='2'
                        id='coach'
                        ref={register({ required: 'Choose desired role' })}
                        readOnly
                      />
                      <span></span>
                    </label>
                  </div>
                  <div class='notification_label'>
                    <p>Coach</p>
                  </div>
                </div>

                <div className='flex_r'>
                  <div className='radio_option'>
                    <label htmlFor='recruiter'>
                      <input
                        type='radio'
                        name='account_type'
                        id='recruiter'
                        value='4'
                        ref={register({ required: 'Choose desired role' })}
                        readOnly
                      />
                      <span></span>
                    </label>
                  </div>
                  <div class='notification_label'>
                    <p>Recruiter</p>
                  </div>
                </div>
              </div>
              <div className='full_row common_input_wrapper_2'>
                <input
                  type='text'
                  name='firstname'
                  placeholder='First Name'
                  ref={register({ required: 'First Name is required' })}
                />
              </div>
              <div className={!errors.firstname ? '' : 'alert alert-danger'}>
                {errors.firstname && errors.firstname.message}
              </div>
              <div className='full_row common_input_wrapper_2'>
                <input
                  type='text'
                  name='lastname'
                  placeholder='Last Name'
                  ref={register({ required: 'Last Name is required' })}
                />
              </div>
              <div className={!errors.lastname ? '' : 'alert alert-danger'}>
                {errors.lastname && errors.lastname.message}
              </div>
              <div className='full_row common_input_wrapper_2'>
                <input
                  type='number'
                  name='phone_number'
                  placeholder='Phone Number'
                  ref={register({ required: 'Phone Number is required' })}
                />
              </div>
              <div className={!errors.phone_number ? '' : 'alert alert-danger'}>
                {errors.phone_number && errors.phone_number.message}
              </div>
              <div className='full_row common_input_wrapper_2'>
                <input
                  name='email'
                  placeholder='Email Address'
                  ref={register({
                    required: 'Email is Required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: 'invalid email address',
                    },
                  })}
                />
                <div className={!errors.email ? '' : 'alert alert-danger'}>
                  {errors.email && errors.email.message}
                </div>
              </div>

              <div className='full_row common_input_wrapper_2'>
                <div className='input_div'>
                  <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    ref={register({
                      required: 'Password is Required',
                      validate: (value) => value.length >= 6,
                    })}
                  />
                </div>
              </div>
              <div className={!errors.password ? '' : 'alert alert-danger'}>
                {errors.password && 'Your password is less than 6 characters'}
              </div>

              <div className='full_row common_input_wrapper_2'>
                <div className='input_div'>
                  <input
                    type='password'
                    name='confirmPassword'
                    placeholder='Confirm Password'
                    ref={register({
                      required: 'Password is Required',
                    })}
                  />
                </div>
              </div>
              <div
                className={!errors.confirmPassword ? '' : 'alert alert-danger'}
              >
                {errors.confirmPassword && 'The Password do not match'}
              </div>

              <div className='full_row login_button'>
                <CustomButton type='submit' disabled={double}>
                  {double ? 'Loading please wait!!!' : 'Sign up'}
                </CustomButton>
              </div>
              <div className='full_row site_terms'>
                <p>
                  Creating an account assumes that you agree to our
                  <Link to='#' className='rubber_effect_link'>
                    {' '}
                    Terms of services{' '}
                  </Link>
                </p>
              </div>
            </form>
          </div>
          <div className='below_form text-center'>
            <p>
              Already have an account?{' '}
              <Link to='/login' className='rubber_effect_link'>
                {' '}
                Login{' '}
              </Link>
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

Signup.protoTypes = {
  signup: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  role: state.auth.role,
});

export default connect(mapStateToProps, { signup })(Signup);
