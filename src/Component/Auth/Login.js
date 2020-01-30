import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CutomButton';
import { FormErrors } from '../FormErrors/FormErrors';
import '../FormErrors/FormError.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      currentUser: {},
      formErrors: {
        email: '',
        password: '',
        message: '',
      },
      emailValid: false,
      passwordValid: false,
      formValid: false
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await Axios({
        method: 'post',
        redirect: 'follow',
        url: 'http://127.0.0.1:8000/api/auth/store',
        timeout: 4000, // 4 seconds timeout
        data: {
          email,
          password
        }
      }).then(response => {
        if (response.data.status === 200) {
          this.setState({ successMessage: response.data.message });
          this.setState({ currentUser: response.data.data });
          console.log(this.state.currentUser);
        } else{
          this.setState({ apiErrorMessage: response.data.message });
        }
      });
    } catch (error) {
      console.log(error)
    }
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid
          ? ''
          : '- Your email is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid
          ? ''
          : '- Your Password is too short';
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.passwordValid
    });
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  errorClass(error) {
    return !error ? '' : 'has-error';
  }

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
                <div className={this.state.successMessage ? 'success' : ''}>
                  {this.state.successMessage}
                </div>
                <div className={this.state.apiErrorMessage ? 'error' : ''}>
                  {this.state.apiErrorMessage}
                </div>
                <div>
                  <FormErrors formErrors={this.state.formErrors} />
                </div>

                <div className='full_row common_input_wrapper_2'>
                  <FormInput
                    type='email'
                    value={this.state.email}
                    handleChange={this.handleChange}
                    name='email'
                    label='Email Address'
                    className={`${this.errorClass(
                      this.state.formErrors.firstname
                    )}`}
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
                      className={`${this.errorClass(
                        this.state.formErrors.firstname
                      )}`}
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
                  <CustomButton type='submit' disabled={!this.state.formValid}>
                    Login
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
      </div>
    );
  }
}

export default Login;
