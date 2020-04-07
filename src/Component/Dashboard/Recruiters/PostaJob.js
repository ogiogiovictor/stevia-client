import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { startCase, lowerCase } from 'lodash';

import Header from '../Layout/Header';
import Topnav from '../Layout/Topnav';
import { getCompany, addCompany, postJobs } from '../../../actions/jobs';

const PostaJob = ({
  user,
  getCompany,
  addCompany,
  postJobs,
  jobs: { companies, categories, loading }
}) => {
  useEffect(() => {
    getCompany();
  }, [getCompany]);

  const [formData, setFormData] = useState({
    company_name: '',
    company_address: '',
    contact_person: '',
    company_logo: '',
    job_title: '',
    job_category: '',
    city: '',
    state: '',
    email: '',
    salary: '',
    expiry_date: '',
    job_type: '',
    job_description: '',
    website: '',
    appMode: ''
  });

  const {
    company_name,
    company_address,
    contact_person,
    company_logo,
    job_title,
    city,
    state,
    email,
    salary,
    expiry_date,
    job_description,
    website
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    addCompany(formData);
    setFormData({
      company_name: '',
      company_address: '',
      contact_person: '',
      company_logo: ''
    });
  };

  const onSubmit1 = e => {
    e.preventDefault();
    formData.email = email ? email : 'null';
    formData.website = website ? website : 'null';
    formData.company_name = company_name;
    postJobs(formData);
  };

  let selectedOption = 'Choose Company Name';
  let selectedOption2 = 'Select Job Category';

  return (
    <Fragment>
      <section className='whole_page_wrapper'>
        <Header menu={user && user.menu} />
        <section className='dashboard_body'>
          <Topnav user={user} htitle='Post A Job' />
          <section>
            <div class='full_row form_section_wrapper'>
              <form onSubmit={e => onSubmit1(e)}>
                <div class='form_div'>
                  <div class='full_row form_header'>
                    <h5>Job Information</h5>
                    <p>Please enter the job details below</p>
                  </div>
                  <div class='full_row'>
                    <div class='common_input_wrapper_2'>
                      <select
                        name='company_name'
                        className='search_select search_select2'
                        onChange={e => onChange(e)}
                        required
                      >
                        <option
                          selected='true'
                          disabled='disabled'
                          defaultValue={selectedOption}
                        >
                          {selectedOption}
                        </option>
                        {companies ? (
                          companies
                            .sort((a, b) =>
                              lowerCase(a.company_name) >
                              lowerCase(b.company_name)
                                ? 1
                                : -1
                            )
                            .map(company => (
                              <option
                                key={company && company.id}
                                value={company && company.company_name}
                              >
                                {startCase(company.company_name)}
                              </option>
                            ))
                        ) : (
                          <option>No Companies Found...</option>
                        )}
                      </select>
                      <a className='red_btn' href='#add-service-modal'>
                        Add Company
                      </a>
                    </div>
                  </div>
                  <div class='full_row'>
                    <div class='common_input_wrapper_2'>
                      <input
                        type='text'
                        name='job_title'
                        value={job_title}
                        onChange={e => onChange(e)}
                        placeholder='Job Title (e.g Business Development Executive)'
                        required
                      />
                    </div>
                  </div>
                  <div class='full_row'>
                    <div class='common_input_wrapper_2'>
                      <select
                        name='job_category'
                        className='search_select search_select2'
                        onChange={e => onChange(e)}
                        required
                      >
                        <option selected='true'
                          disabled='disabled'
                          defaultValue={selectedOption2}>
                          {selectedOption2}
                        </option>
                        <option value='aviation'>Aviation</option>
                        <option value='arts'>Arts</option>
                        <option value='Business'>Business</option>
                        <option value='law'>Law Enforcement</option>
                        <option value='media'>Media</option>
                        <option value='medical'>Medical</option>
                        <option value='serviceindustry'>
                          Service Industry
                        </option>
                        <option value='teaching'>Teaching</option>
                        <option value='technology'>Technology</option>
                        {/* {categories.length > 0 ? (
                        categories.map(category => (
                          <option
                            key={category.id}
                            value={category.id}
                          >
                            {category.name}
                          </option>
                        ))
                      ) : (
                        <option>No Categories Found...</option>
                      )} */}
                      </select>
                    </div>
                  </div>
                  <div class='full_row grid_item_two'>
                    <div>
                      <div class='common_input_wrapper_2'>
                        <input
                          type='text'
                          name='city'
                          value={city}
                          onChange={e => onChange(e)}
                          placeholder='City'
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <div class='common_input_wrapper_2'>
                        <input
                          type='text'
                          name='state'
                          value={state}
                          onChange={e => onChange(e)}
                          placeholder='State'
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div class='full_row grid_item_two'>
                    <div>
                      <div class='common_input_wrapper_2'>
                        <input
                          type='text'
                          name='salary'
                          value={salary}
                          onChange={e => onChange(e)}
                          placeholder='Salary'
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <div class='common_input_wrapper_2'>
                        <label htmlFor='expiry_date'>Expiry date</label>
                        <input
                          type='date'
                          name='expiry_date'
                          value={expiry_date}
                          placeholder='Expiry date'
                          onChange={e => onChange(e)}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div class='full_row job_type'>
                    <div class='full_row title'>
                      <p>Job type</p>
                    </div>
                    <div class='flex_r_wrap job_type_options'>
                      <div className='form-check'>
                        <label>
                          <input
                            type='radio'
                            name='job_type'
                            value='Part Time'
                            className='form-check-input'
                            onChange={e => onChange(e)}
                            readOnly
                            required
                          />
                          Part Time
                        </label>
                      </div>
                      <div className='form-check'>
                        <label>
                          <input
                            type='radio'
                            name='job_type'
                            value='Remote'
                            className='form-check-input'
                            onChange={e => onChange(e)}
                            readOnly
                            required
                          />
                          Remote
                        </label>
                      </div>
                      <div className='form-check'>
                        <label>
                          <input
                            type='radio'
                            name='job_type'
                            value='Full Time'
                            className='form-check-input'
                            onChange={e => onChange(e)}
                            readOnly
                            required
                          />
                          Full Time
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class='full_row application_mode'>
                    <div class='full_row title'>
                      <p>Application Mode</p>
                    </div>
                    <div class='the_modes app_mode_grid'>
                      <div>
                        <div class='full_row mail_option'>
                          <label htmlFor='email'>
                            <input
                              type='radio'
                              name='appMode'
                              value={email ? email : website}
                              id='email'
                              className='form-check-input'
                              onChange={e => onChange(e)}
                              readOnly
                              required
                            />
                            <span></span>
                            By Mail
                          </label>
                        </div>
                        <div class='full_row'>
                          <div class='common_input_wrapper_2 pl-40'>
                            <input
                              type='email'
                              name='email'
                              value={email}
                              onChange={e => onChange(e)}
                              placeholder='Email Address'
                              disabled={website ? true : false}
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div class='full_row web_option'>
                          <label htmlFor='website'>
                            <input
                              type='radio'
                              name='appMode'
                              value={website ? website : email}
                              id='website'
                              onChange={e => onChange(e)}
                              readOnly
                              required
                            />
                            <span></span>
                            By Website
                          </label>
                        </div>
                        <div class='full_row'>
                          <div class='common_input_wrapper_2 pl-40'>
                            <input
                              type='text'
                              name='website'
                              value={website}
                              onChange={e => onChange(e)}
                              placeholder='Website URL'
                              disabled={email ? true : false}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class='full_row job_description'>
                    <div class='full_row title'>
                      <p>Job Description (Requirements, Resposibility etc.)</p>
                    </div>
                    <div class='full_row'>
                      <div class='common_input_wrapper_2'>
                        <input
                          type='text'
                          name='job_description'
                          value={job_description}
                          onChange={e => onChange(e)}
                          placeholder=''
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div class='flex_r_j_center_align_center form_buttons'>
                    <button type='reset' class='cancel_btn'>
                      Cancel
                    </button>
                    <button type='submit' class='black_btn'>
                      post job
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </section>
          <div className='add-service-modal' id='add-service-modal'>
            <div>
              <div className='full_row head'>
                <h4> Add Company </h4>
              </div>
              <form onSubmit={e => onSubmit(e)}>
                <div className='full_row cols-2'>
                  <div className='common_input_wrapper_2'>
                    <input
                      type='text'
                      name='company_name'
                      value={company_name}
                      placeholder='Enter Company Name'
                      onChange={e => onChange(e)}
                      required
                    />
                  </div>
                  <div className='common_input_wrapper_2'>
                    <input
                      type='text'
                      name='company_address'
                      value={company_address}
                      placeholder='Enter Company Address'
                      onChange={e => onChange(e)}
                      required
                    />
                  </div>
                  <div className='common_input_wrapper_2'>
                    <input
                      type='text'
                      name='contact_person'
                      value={contact_person}
                      placeholder='Enter Contact Person'
                      onChange={e => onChange(e)}
                      required
                    />
                  </div>
                  <div className='common_input_wrapper_2'>
                    <input
                      type='file'
                      name='company_logo'
                      value={company_logo}
                      onChange={e => onChange(e)}
                      required
                    />
                  </div>
                </div>
                <div className='flex_r_j_end_align_center footer_button'>
                  <div>
                    <a href='#overview_cards'>
                      <button type='button' className='grey_btn'>
                        Close
                      </button>
                    </a>
                  </div>
                  <div>
                    <button type='submit' className='black_btn'>
                      add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </section>
    </Fragment>
  );
};

PostaJob.propTypes = {
  user: PropTypes.object.isRequired,
  getCompany: PropTypes.func.isRequired,
  addCompany: PropTypes.func.isRequired,
  postJobs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.auth.user,
  jobs: state.jobs
});

export default connect(mapStateToProps, {
  getCompany,
  addCompany,
  postJobs
})(PostaJob);
