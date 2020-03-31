import React, { Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';
import Topnav from './Topnav';

const Aboutus = () => {
  return (
    <Fragment>
      <body>
        <Topnav />
        <section className='whole_page_wrapper'>
          <Header />
          <header className='full_row plain_site_header'>
            <div class='full_row contact_page_header'>
              <h3>Contact Support?</h3>
              <p>
                We're available around the clock 24/7. Let us know how <br />
                we can help you!
              </p>
            </div>
          </header>
          <section>
            <div class='full_row contact_section_wrapper_div'>
              <div class='site_center1'>
                <div class='contact_wrapper'>
                  <div class='contact_form'>
                    <div class='full_row contact_form_header'>
                      <p>We’re here to help!</p>
                    </div>
                    <div class='form_part'>
                      <div class='common_input_wrapper_2'>
                        <label for=''> Full Name </label>
                        <input type='text' name='' id='' placeholder='' />
                      </div>

                      <div class='common_input_wrapper_2'>
                        <label for=''>Phone number</label>
                        <input type='text' name='' id='' placeholder='' />
                      </div>

                      <div class='common_input_wrapper_2'>
                        <label for=''>Email</label>
                        <input type='text' name='' id='' placeholder='' />
                      </div>

                      <div class='common_input_wrapper_2'>
                        <label for=''>Enter your message here</label>
                        <textarea
                          name=''
                          id=''
                          cols='20'
                          rows='5'
                          placeholder=''
                        ></textarea>
                      </div>

                      <div class='common_input_wrapper_2 send_msg_btn'>
                        <button class='full_width_btn red_btn'>
                          send message
                        </button>
                      </div>

                      <div class='full_row update_awareness'>
                        <p>
                          We will send you occassional Stevia updates and
                          announcements.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class='contact_details'>
                    <div class='quick_answer'>
                      <h2>Need a quick answer?</h2>
                      <p>
                        <i class='fas fa-long-arrow-alt-right'></i>
                        How it works
                      </p>
                      <p>
                        <i class='fas fa-long-arrow-alt-right'></i>
                        How to get learning resources
                      </p>
                      <p>
                        <i class='fas fa-long-arrow-alt-right'></i>
                        Answers to common questions
                      </p>
                    </div>
                    <div class='contact_details'>
                      <h2>Contact details</h2>
                      <p>
                        Email us at <span> support@stevia.com </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <footer>
            <Footer />
          </footer>
        </section>
      </body>
    </Fragment>
  );
};

export default Aboutus;
