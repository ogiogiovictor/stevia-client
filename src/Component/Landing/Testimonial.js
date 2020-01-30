import React, { Component } from 'react';

class Testimonial extends Component {
  render() {
    return (
      <div>
        <div className='full_row review_section_wrapper_div'>
          <div className='full_row text-center review_header'>
            <h4>Testimonials</h4>

            <p>What are people saying</p>
          </div>
          <div className='full_row review_lists'>
            <div className='list_container'>
              <div className='each_review'>
                <div className='full_row review_text'>
                  <p>
                    When I started working with Akin, I was miserable in my job.
                    It was emotionally draining, and I felt trapped. I needed
                    someone to help me focus my energy and get the work done
                    well, and fast! Akin did just that! She helped me identify
                    the positive aspects of my current situation
                  </p>
                </div>
                <div className='flex_r_a_center image_n_name'>
                  <img
                    src={process.env.PUBLIC_URL + 'assets/utils/images/67.png'}
                    alt=''
                  />
                  <div>
                    <p> Lesly Williams </p>
                    <span> MTN </span>
                  </div>
                </div>
              </div>
              <div className='each_review'>
                <div className='full_row review_text'>
                  <p>
                    When I started working with Akin, I was miserable in my job.
                    It was emotionally draining, and I felt trapped. I needed
                    someone to help me focus my energy and get the work done
                    well, and fast! Akin did just that! She helped me identify
                    the positive aspects of my current situation
                  </p>
                </div>
                <div className='flex_r_a_center image_n_name'>
                  <img
                    src={process.env.PUBLIC_URL + 'assets/utils/images/67.png'}
                    alt=''
                  />
                  <div>
                    <p> Lesly Williams </p>
                    <span> MTN </span>
                  </div>
                </div>
              </div>
              <div className='each_review'>
                <div className='full_row review_text'>
                  <p>
                    When I started working with Akin, I was miserable in my job.
                    It was emotionally draining, and I felt trapped. I needed
                    someone to help me focus my energy and get the work done
                    well, and fast! Akin did just that! She helped me identify
                    the positive aspects of my current situation
                  </p>
                </div>
                <div className='flex_r_a_center image_n_name'>
                  <img
                    src={process.env.PUBLIC_URL + 'assets/utils/images/67.png'}
                    alt=''
                  />
                  <div>
                    <p> Lesly Williams </p>
                    <span> MTN </span>
                  </div>
                </div>
              </div>
              <div className='each_review'>
                <div className='full_row review_text'>
                  <p>
                    When I started working with Akin, I was miserable in my job.
                    It was emotionally draining, and I felt trapped. I needed
                    someone to help me focus my energy and get the work done
                    well, and fast! Akin did just that! She helped me identify
                    the positive aspects of my current situation
                  </p>
                </div>
                <div className='flex_r_a_center image_n_name'>
                  <img
                    src={process.env.PUBLIC_URL + 'assets/utils/images/67.png'}
                    alt=''
                  />
                  <div>
                    <p> Lesly Williams </p>
                    <span> MTN </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Testimonial;
