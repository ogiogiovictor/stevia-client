import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const PostAJob = () => {
  return (
    <Fragment>
      <body>
        <section class='whole_page_wrapper'>
          <section>
            <div class='full_row flex_r post_a_job_page_wrapper'>
              <div class='left_side flex_r_j_center'>
                <div class='flex_c_j_between left_side_content_div'>
                  <div>
                    <img src='../utils/images/Stevia.png' alt='' />
                  </div>
                  <div class='bottom'>
                    <div class='full_row bottom_header'>
                      <h4>
                        Post your job to <br />
                        our platform for free
                      </h4>
                    </div>
                    <div class='flex_r bottom_list'>
                      <div>
                        <img src='../utils/images/tick.png' alt='' />
                      </div>
                      <div>
                        <p>Post beautiful and compelling job post</p>
                      </div>
                    </div>
                    <div class='flex_r bottom_list'>
                      <div>
                        <img src='../utils/images/tick.png' alt='' />
                      </div>
                      <div>
                        <p>Reach highly qualified job candidates</p>
                      </div>
                    </div>
                    <div class='flex_r bottom_list'>
                      <div>
                        <img src='../utils/images/tick.png' alt='' />
                      </div>
                      <div>
                        <p>
                          Manage job post using a beautiful and easy to use
                          dashboard.
                        </p>
                      </div>
                    </div>
                    <div class='flex_r bottom_list'>
                      <div>
                        <img src='../utils/images/tick.png' alt='' />
                      </div>
                      <div>
                        <p>Job posting free for the first year</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class='right_side'>
                <div class='flex_r_j_end_align_center right_side_header'>
                  <img src='../utils/images/15.png' alt='' class='mr_auto' />

                  <p>Already have an account?</p>
                  <button class='red_btn'>login</button>
                </div>

                <div class='full_row flex_r_j_center_align_center right_side_content'>
                  <div class='getting_started'>
                    <div class='full_row'>
                      <h4>Let’s get started.</h4>
                      <p>Join now to get started</p>
                    </div>

                    <div class='common_input_wrapper next_button'>
                      <Link to='/signup'>
                        <button class='black_btn'>Sign Up</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </body>
    </Fragment>
  );
};

export default PostAJob;
