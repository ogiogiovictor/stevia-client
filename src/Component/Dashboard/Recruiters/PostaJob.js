import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SelectSearch from 'react-select-search'

import Header from '../Layout/Header';
import Topnav from '../Layout/Topnav';

const PostaJob = ({ user }) => {
    const options = [
        {name: 'Swedish', value: 'sv'},
        {name: 'English', value: 'en'},
        {
            type: 'group',
            name: 'Group name',
            items: [
                {name: 'Spanish', value: 'es'},
            ]
        },
    ];
  return (
    <Fragment>
      <section className='whole_page_wrapper'>
        <Header menu={user && user.menu} />
        <section className='dashboard_body'>
          <Topnav user={user} htitle='Post A Job' />
  <section>
        <div class="full_row form_section_wrapper">

            <div class="form_div">
                <div class="full_row form_header">
                    <h5>
                        Job Information
                    </h5>
                    <p>Please enter the job details below</p>
                </div>                <div class="full_row">
                    <div class="common_input_wrapper_2">
                    <input type="text" name="" id="" placeholder="Job Title (e.g Business Development Executive)" />
                    </div>
                </div>

                <div class="full_row">
                    <div class="common_input_wrapper_2">
                        <SelectSearch options={options} className='' value="sv" name="language" placeholder="Choose your language" />
                    </div>
                </div>

                <div class="full_row">
                    <div class="common_input_wrapper_2">
                        <input type="file" name="" id="" />
                    </div>
                </div>
    
                <div class="full_row">
                    <div class="common_input_wrapper_2">
                        <select name="" id="" class="search_select search_select2">
                            <option value=""> Job Category </option>
                        </select>
                    </div>
                </div>

                <div class="full_row grid_item_two">
                    <div>
                        <div class="common_input_wrapper_2">
                            <input type="text" name="" id="" placeholder="City" />
                        </div>                        
                    </div>
                    <div>
                        <div class="common_input_wrapper_2">
                            <input type="text" name="" id="" placeholder="State" />
                        </div>
                    </div>
                </div>

                <div class="full_row grid_item_two">
                        <div>
                            <div class="common_input_wrapper_2">
                                <input type="text" name="" id="" placeholder="Salary" />
                            </div>                        
                        </div>
                        <div>
                            <div class="common_input_wrapper_2">
                                <input type="text" name="" id="" placeholder="Expiry date" />
                            </div>
                        </div>
                </div>

                <div class="full_row job_type">
                    <div class="full_row title">
                        <p>
                            Job type
                        </p>
                    </div>
                    <div class="flex_r_wrap job_type_options">

                        <div>
                            <p>
                                Part-Time
                            </p>
                        </div>
                        <div>
                            <p>
                                Remote
                            </p>
                        </div>
                        <div class="active">
                            <p>
                                Full-Time
                            </p>
                        </div>

                    </div>
                </div>
                <div class="full_row application_mode">
                    <div class="full_row title">
                        <p>
                            Application Mode
                        </p>
                    </div>
                    <div class="the_modes app_mode_grid">
                        <div>
                            <div class="full_row mail_option">
                                <label for="mail">
                                <input type="radio" name="appMode" id="mail" />
                                <span></span>
                                By Mail 
                                </label>
                            </div>
                            <div class="full_row">
                                <div class="common_input_wrapper_2 pl-40">
                                    <input type="text" name="" id="" placeholder="Email Address" />
                                </div>                                
                            </div>
                        </div>
                        <div>
                            <div class="full_row web_option">
                                <label for="web">
                                <input type="radio" name="appMode" id="web" />
                                <span></span>
                                By Website 
                                </label>
                            </div>
                            <div class="full_row">
                                <div class="common_input_wrapper_2 pl-40">
                                    <input type="text" name="" id="" placeholder="Website URL" />
                                </div>                                
                            </div>
                        </div>
                    </div>                                     

                </div>
                <div class="full_row job_description">
                    <div class="full_row title">
                        <p>
                            Job Description (Requirements, Resposibility etc.)
                        </p>
                    </div> 
                    <div class="full_row">
                            <div class="common_input_wrapper_2">
                                <input type="text" name="" id="" placeholder="" />
                            </div>
                    </div>
                </div>
                <div class="flex_r_j_center_align_center form_buttons">

                    <button class="cancel_btn">
                        Cancel                        
                    </button>
                    <button class="black_btn">
                        post job                        
                    </button>

                </div>
            </div>
                
        </div>
  </section>
  <section>
      <div class="full_row">
          <div class="need_help text-center">
                <h2> Need Help? </h2> 
                <p> Contact our friendly team today and they will walk you through the process step by step. </p>      
                <button class="red_btn"> contact us </button> 
          </div>   
      </div>
  </section>
          
        </section>
      </section>
    </Fragment>
  );
};

PostaJob.propTypes = {
  user: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps, {})(PostaJob);
