import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CutomButton';
import { FormErrors } from '../FormErrors/FormErrors';
import '../FormErrors/FormError.css';

class Signup extends Component {
  constructor(props) {
    super();

    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      phone_number: '',
      password: '',
      confirmPassword: '',
      formErrors: {
        firstname: '',
        lastname: '',
        email: '',
        phone_number: '',
        password: '',
        confirmPassword: ''
      },
      firstnameValid: false,
      lastnameValid: false,
      emailValid: false,
      phone_numberValid: false,
      passwordValid: false,
      confirmPasswordValid: false,
      formValid: false
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const {
      firstname,
      lastname,
      email,
      phone_number,
      password,
      confirmPassword
    } = this.state;

    try {
      await Axios({
        method: 'post',
        redirect: 'follow',
        url: 'https://stevia-backend.herokuapp.com/api/register/store',
        timeout: 4000, // 4 seconds timeout
        data: {
          firstname,
          lastname,
          email,
          phone_number,
          password,
          confirmPassword
        }
      }).then(response => {
        if (response.data.status === 200)
          this.setState({ successMessage: response.data.message });
        return (window.location.href = '/success');
      });
    } catch (error) {
      this.setState({ formErrors: error.response.data });
    }
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let firstnameValid = this.state.firstnameValid;
    let lastnameValid = this.state.lastnameValid;
    let emailValid = this.state.emailValid;
    let phone_numberValid = this.state.phone_numberValid;
    let passwordValid = this.state.passwordValid;
    let confirmPasswordValid = this.state.confirmPasswordValid;

    switch (fieldName) {
      case 'firstname':
        firstnameValid = value.length >= 3;
        fieldValidationErrors.firstname = firstnameValid
          ? ''
          : '- Your First Name is too short';
        break;
      case 'lastname':
        lastnameValid = value.length >= 3;
        fieldValidationErrors.lastname = lastnameValid
          ? ''
          : '- Your Last Name is too short';
        break;
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid
          ? ''
          : '- Your email is invalid';
        break;
      case 'phone_number':
        phone_numberValid = value.length >= 9;
        fieldValidationErrors.phone_number = phone_numberValid
          ? ''
          : '- Your Phone Number is not valid';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid
          ? ''
          : '- Your Password is too short';
        break;
      case 'confirmPassword':
        confirmPasswordValid =
          this.state.password === this.state.confirmPassword;
        fieldValidationErrors.confirmPassword = confirmPasswordValid
          ? ''
          : '- Your Password did not match';
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        lastnameValid: lastnameValid,
        firstnameValid: firstnameValid,
        emailValid: emailValid,
        phone_numberValid: phone_numberValid,
        confirmPasswordValid: confirmPasswordValid,
        passwordValid: passwordValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.firstnameValid &&
        this.state.lastnameValid &&
        this.state.emailValid &&
        this.state.phone_numberValid &&
        this.state.passwordValid &&
        this.state.confirmPasswordValid
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
    const {
      firstname,
      lastname,
      email,
      phone_number,
      password,
      confirmPassword
    } = this.state;

    return (
      <div className='onboard_pages'>
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

              <form onSubmit={this.handleSubmit}>
                <div className={this.state.successMessage ? 'success' : ''}>
                  {this.state.successMessage}
                </div>
                <div>
                  <FormErrors formErrors={this.state.formErrors} />
                </div>

                <div className='full_row common_input_wrapper_2'>
                  <FormInput
                    type='text'
                    name='firstname'
                    value={firstname}
                    handleChange={this.handleChange}
                    placeholder='First Name'
                    className={`${this.errorClass(
                      this.state.formErrors.firstname
                    )}`}
                    required
                  />
                </div>

                <div className='full_row common_input_wrapper_2'>
                  <FormInput
                    type='text'
                    name='lastname'
                    value={lastname}
                    handleChange={this.handleChange}
                    placeholder='Last Name'
                    className={`${this.errorClass(
                      this.state.formErrors.lastname
                    )}`}
                    required
                  />
                </div>

                <div className='full_row common_input_wrapper_2'>
                  <FormInput
                    type='email'
                    name='email'
                    value={email}
                    handleChange={this.handleChange}
                    placeholder='Email Address'
                    className={`${this.errorClass(
                      this.state.formErrors.email
                    )}`}
                    required
                  />
                </div>

                <div className='full_row common_input_wrapper_2'>
                  <FormInput
                    type='number'
                    name='phone_number'
                    value={phone_number}
                    handleChange={this.handleChange}
                    placeholder='Phone number'
                    className={`${this.errorClass(
                      this.state.formErrors.phone_number
                    )}`}
                    required
                  />
                </div>

                <div className='full_row common_input_wrapper_with_icon mt-24'>
                  <div className='input_div'>
                    <FormInput
                      type='password'
                      name='password'
                      value={password}
                      handleChange={this.handleChange}
                      placeholder='Password'
                      className={`${this.errorClass(
                        this.state.formErrors.password
                      )}`}
                      required
                    />
                  </div>

                  <div className='icon_div'>
                    <i className='fas fa-eye-slash'></i>
                  </div>
                </div>

                <div className='full_row common_input_wrapper_with_icon mt-24'>
                  <div className='input_div'>
                    <FormInput
                      type='password'
                      name='confirmPassword'
                      value={confirmPassword}
                      handleChange={this.handleChange}
                      placeholder='Confirm Password'
                      className={`${this.errorClass(
                        this.state.formErrors.confirmPassword
                      )}`}
                      required
                    />
                  </div>

                  <div className='icon_div'>
                    <i className='fas fa-eye-slash'></i>
                  </div>
                </div>

                <div className='full_row login_button'>
                  <CustomButton type='submit' disabled={!this.state.formValid}>
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
      </div>
    );
  }
}

export default Signup;
