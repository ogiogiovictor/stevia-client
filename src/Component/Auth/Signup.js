import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import CustomButton from '../CustomButton/CutomButton';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { signup } from '../../actions/auth';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { setAlert } from '../../actions/alert';

const Signup = ({ signup, isAuthenticated, role, setAlert }) => {
  const { handleSubmit, register, errors, formState } = useForm({
    mode: 'onChange'
  });
  const onSubmit = async values => {
    const { firstname, lastname, email, phone_number, password, account_type } = values;
    signup({ firstname, lastname, email, phone_number, password, account_type });
  };

  if (isAuthenticated && role === 'STUDENT') {
    return <Redirect to='/dashboard/student' />;
  }
  if (isAuthenticated && role === 'COACH') {
    return <Redirect to='/dashboard/coach' />;
  }
  if (isAuthenticated && role === 'ADMIN') {
    return <Redirect to='/dashboard/admin' />;
  }
  if (isAuthenticated && role === 'RECRUITER') {
    return <Redirect to='/dashboard/recruiter' />;
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
              <p><strong>Choose your role:</strong></p>
              <div className='form-check'>
                <label>
                  <input
                    type='radio'
                    name='account_type'
                    value='3'
                    className='form-check-input'
                    ref={register}
                    readOnly
                    required
                  />
                  Student
                </label>
              </div>

              <div className='form-check'>
                <label>
                  <input
                    type='radio'
                    name='account_type'
                    value='2'
                    className='form-check-input'
                    ref={register}
                    readOnly
                    required
                  />
                  Coach
                </label>
              </div>

              <div className='form-check'>
                <label>
                  <input
                    type='radio'
                    name='account_type'
                    value='4'
                    className='form-check-input'
                    ref={register}
                    readOnly
                    required
                  />
                  Recruiter
                </label>
              </div>
              <div className='full_row common_input_wrapper_2'>
                <input
                  type='text'
                  name='firstname'
                  placeholder='First Name'
                  ref={register({ required: 'First Name is required' })}
                />
                <div style={{ display: 'none' }}>
                  {!errors.firstname || undefined
                    ? ''
                    : toast(errors.firstname && errors.firstname.message, 'error')}
                </div>
              </div>
              <div className='full_row common_input_wrapper_2'>
                <input
                  type='text'
                  name='lastname'
                  placeholder='Last Name'
                  ref={register({ required: 'Last Name is required' })}
                />
                <div style={{ display: 'none' }}>
                  {!errors.lastname || undefined
                    ? ''
                    : toast(errors.lastname && errors.lastname.message, 'error')}
                </div>
              </div>
              <div className='full_row common_input_wrapper_2'>
                <input
                  type='number'
                  name='phone_number'
                  placeholder='Phone Number'
                  ref={register({ required: 'Phone Number is required' })}
                />
                <div style={{ display: 'none' }}>
                  {!errors.phone_number || undefined
                    ? ''
                    : setAlert(
                        errors.phone_number && errors.phone_number.message, 'error'
                      )}
                </div>
              </div>
              <div className='full_row common_input_wrapper_2'>
                <input
                  name='email'
                  placeholder='Email Address'
                  ref={register({
                    required: 'Email is Required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                      message: 'invalid email address'
                    }
                  })}
                />
                <div style={{ display: 'none' }}>
                  {!errors.email || undefined
                    ? ''
                    : setAlert(errors.email && errors.email.message, 'error')}
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
                      validate: value => value.length >= 6
                    })}
                  />
                </div>
                <div style={{ display: 'none' }}>
                  {!errors.password || undefined
                    ? ''
                    : setAlert(
                        errors.password &&
                          'Your password is less than 6 characters', 'error'
                      )}
                </div>
              </div>

              <div className='full_row common_input_wrapper_2'>
                <div className='input_div'>
                  <input
                    type='password'
                    name='confirmPassword'
                    placeholder='Confirm Password'
                    ref={register({
                      required: 'Password is Required',
                      validate: value =>
                        value.password === value.confirmPassword
                    })}
                  />
                </div>

                <div style={{ display: 'none' }}>
                  {!errors.confirmPassword || undefined
                    ? ''
                    : setAlert(
                        errors.confirmPassword && 'The Password do not match', 'error'
                      )}
                </div>
              </div>

              <div className='full_row login_button'>
                <CustomButton type='submit' disabled={!formState.isValid}>
                  Sign up
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
  setAlert: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  role: state.auth.role
});

export default connect(mapStateToProps, { signup, setAlert })(Signup);
