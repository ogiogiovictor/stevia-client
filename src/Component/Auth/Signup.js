import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Signup extends Component {
  render() {
    return (
      <div className='onboard_pages'>
        <section className='whole_page_wrapper'>
          <div className='full_row post_a_job_signup'>
            <div className='form_wrapper'>
              <div className='full_row'>
                <img
                  src={process.env.PUBLIC_URL + 'assets/utils/images/47.png'}
                  alt=''
                />
              </div>
              <div className='full_row login_text'>
                <h3>Create an account</h3>
                <p>to continue to your dashboard</p>
              </div>

              <div className='full_row common_input_wrapper_2'>
                <label for=''></label>
                <input type='text' name='' id='' placeholder='Name' />
              </div>

              <div className='full_row common_input_wrapper_2'>
                <label for=''></label>
                <input type='text' name='' id='' placeholder='Email Address' />
              </div>

              <div className='full_row common_input_wrapper_2'>
                <label for=''></label>
                <input type='text' name='' id='' placeholder='Phone number' />
              </div>

              <div className='full_row common_input_wrapper_with_icon mt-24'>
                <div className='input_div'>
                  <label for=''></label>
                  <input type='text' name='' id='' placeholder='Password' />
                </div>

                <div className='icon_div'>
                  <i className='fas fa-eye-slash'></i>
                </div>
              </div>

              <div className='flex_r forget_password_link'>
                <div>
                  <Link to='' className='rubber_effect_link'>
                    {' '}
                    Forgot password?{' '}
                  </Link>
                </div>
              </div>

              <div className='full_row login_button'>
                <button className='red_btn full_width_btn'>sign up</button>
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
            </div>
            <div class='below_form text-center'>
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
