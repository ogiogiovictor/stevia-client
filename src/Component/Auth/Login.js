import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CutomButton';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='onboard_pages'>
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
              <form onSubmit={this.handleSubmit}>
                <div className='full_row common_input_wrapper_2'>
                  <FormInput
                    type='email'
                    value={this.state.email}
                    handleChange={this.handleChange}
                    name='email'
                    label='Email Address'
                    required
                  />
                </div>

                <div className='full_row common_input_wrapper_with_icon mt-24'>
                  <div className='input_div'>
                    <FormInput
                      type='password'
                      value={this.state.password}
                      handleChange={this.handleChange}
                      name='password'
                      placeholder='Password'
                      required
                    />
                  </div>

                  <div className='icon_div'>
                    <i className='fas fa-eye-slash'></i>
                  </div>
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
                  <CustomButton type='submit'>Login</CustomButton>
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
      </div>
    );
  }
}

export default Login;
