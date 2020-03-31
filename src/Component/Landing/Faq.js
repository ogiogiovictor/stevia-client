import React, { Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';
import Topnav from './Topnav';

const Faq = () => {
  return (
    <Fragment>
      <body>
        <Topnav />
        <section className='whole_page_wrapper'>
          <Header />
          <header className='full_row plain_site_header'>
            <div className='full_row contact_page_header'>
              <h3>Frequently Asked Questions!</h3>
              <p>
                We're available around the clock 24/7. Let us know how <br />
                we can help you!
              </p>
            </div>
          </header>
          <section>
            <div className='full_row contact_section_wrapper_div faq_wrapper'>
              <div className='site_center1'>
                <div className='contact_wrapper'>
                  <div className='contact_form'>
                    <div className='full_row contact_form_header'>
                      <p>Any other question ?</p>
                    </div>
                    <div className='form_part'>
                      <div className='common_input_wrapper_2'>
                        <label for=''> Full Name </label>
                        <input type='text' name='' id='' placeholder='' />
                      </div>

                      <div className='common_input_wrapper_2'>
                        <label for=''>Phone number</label>
                        <input type='text' name='' id='' placeholder='' />
                      </div>

                      <div className='common_input_wrapper_2'>
                        <label for=''>Email</label>
                        <input type='text' name='' id='' placeholder='' />
                      </div>

                      <div className='common_input_wrapper_2'>
                        <label for=''>Enter your message here</label>
                        <textarea
                          name=''
                          id=''
                          cols='20'
                          rows='5'
                          placeholder=''
                        ></textarea>
                      </div>

                      <div className='common_input_wrapper_2 send_msg_btn'>
                        <button className='full_width_btn red_btn'>
                          send message
                        </button>
                      </div>

                      <div className='full_row update_awareness'>
                        <p>
                          We will send you occassional Stevia updates and
                          announcements.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className='faq_container'>
                    <div className='full_row each_question'>
                      <div className='faq_header flex_r_j_between_align_center'>
                        <div className='question'>
                          <h6>Question 1</h6>
                        </div>
                        <div className='icon flex_r_j_center_align_center'>
                          <div className='horizontal'></div>
                          <div className='vertical'></div>
                        </div>
                      </div>
                      <div className='faq_answer'>
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Cum dolore assumenda doloremque explicabo ab.
                          Neque animi nemo id? Maiores culpa tenetur temporibus.
                          Officiis iusto eius soluta deleniti veritatis.
                          Exercitationem, tempora?
                        </p>
                      </div>
                    </div>
                    <div className='full_row each_question'>
                      <div className='faq_header flex_r_j_between_align_center'>
                        <div className='question'>
                          <h6>Question 1</h6>
                        </div>
                        <div className='icon flex_r_j_center_align_center'>
                          <div className='horizontal'></div>
                          <div className='vertical'></div>
                        </div>
                      </div>
                      <div className='faq_answer'>
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Cum dolore assumenda doloremque explicabo ab.
                          Neque animi nemo id? Maiores culpa tenetur temporibus.
                          Officiis iusto eius soluta deleniti veritatis.
                          Exercitationem, tempora?
                        </p>
                      </div>
                    </div>
                    <div className='full_row each_question'>
                      <div className='faq_header flex_r_j_between_align_center'>
                        <div className='question'>
                          <h6>Question 1</h6>
                        </div>
                        <div className='icon flex_r_j_center_align_center'>
                          <div className='horizontal'></div>
                          <div className='vertical'></div>
                        </div>
                      </div>
                      <div className='faq_answer'>
                        <p>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Cum dolore assumenda doloremque explicabo ab.
                          Neque animi nemo id? Maiores culpa tenetur temporibus.
                          Officiis iusto eius soluta deleniti veritatis.
                          Exercitationem, tempora?
                        </p>
                      </div>
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

export default Faq;
