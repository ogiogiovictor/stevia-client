import React, { Component } from "react";

class Login extends Component {
    
  render() {
    return (
      <div className="onboard_pages">
        <section className="whole_page_wrapper">
          <div className="flex_c_align_center post_a_job_login">
            <div className="form_wrapper">
              <div className="full_row">
                <img
                  src={process.env.PUBLIC_URL + "assets/utils/images/47.png"}
                  alt=""
                />
              </div>

              <div className="full_row login_text">
                <h3>Log in</h3>
                <p>to continue to your dashboard</p>
              </div>

              <div className="full_row common_input_wrapper_2">
                <label for="">Email Address</label>
                <input type="text" name="" id="" placeholder="" />
              </div>

              <div className="full_row common_input_wrapper_with_icon mt-24">
                <div className="input_div">
                  <label for=""></label>
                  <input type="text" name="" id="" placeholder="Password" />
                </div>

                <div className="icon_div">
                  <i className="fas fa-eye-slash"></i>
                </div>
              </div>

              <div className="flex_r forget_password_link">
                <div>
                  <a href="" className="rubber_effect_link">
                    {" "}
                    Forgot password?{" "}
                  </a>
                </div>
              </div>

              <div className="full_row login_button">
                <button className="red_btn full_width_btn">login</button>
              </div>
            </div>

            <div className="below_form text-center">
              <p>
                Don’t have an account?{" "}
                <a href="#" className="rubber_effect_link">
                  {" "}
                  Sign up{" "}
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Login;
