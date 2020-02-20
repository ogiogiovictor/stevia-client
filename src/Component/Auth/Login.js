import React, {useState} from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import CustomButton from '../CustomButton/CutomButton';
import '../Alert/Alert.css';

const Login = ({ login, isAuthenticated }) => {
  const { handleSubmit, register, errors } = useForm({
    mode: 'onChange'
  });
  const onSubmit = async values => {
    setDouble(true);
    const { email, password } = values;
    login(email, password);
  };
  const [double, setDouble] = useState(false);


  // Redirect if logged in

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
  return (
    <section className='whole_page_wrapper'>
      <div className='flex_c_align_center post_a_job_login'>
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
            <h3>Log in</h3>
            <p>to continue to your dashboard</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='full_row common_input_wrapper_2'>
              <label>Email Address</label>
              <input
                name='email'
                ref={register({
                  required: 'Email is Required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'invalid email address'
                  }
                })}
              />
            </div>
            <div className={!errors.email ? '' : 'alert alert-danger'} >
              {errors.email && errors.email.message}
            </div>
            <div className='full_row common_input_wrapper_with_icon mt-24'>
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

              <div className='icon_div'>
                <i className='fas fa-eye-slash'></i>
              </div>
              
            </div>

            <div className={!errors.password ? '' : 'alert alert-danger'}>
                {errors.password && 'Your password is less than 6 characters'}
              </div>

            <div className='flex_r forget_password_link'>
              <div>
                <Link to='/' className='rubber_effect_link'>
                  {' '}
                  Forgot password?{' '}
                </Link>
              </div>
            </div>

            <div className='full_row login_button'>
              <CustomButton type='submit' disabled={double}>
                {double ? 'Loading please wait!!!' : 'Login'}
              </CustomButton>
            </div>
          </form>
        </div>

        <div className='below_form text-center'>
          <p>
            Don’t have an account?{' '}
            <Link to='/signup' className='rubber_effect_link'>
              {' '}
              Sign up{' '}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
