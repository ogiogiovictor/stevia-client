import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Topnav from './Topnav';
import Header from './Header';
import Footer from './Footer';
import { getLandingJob } from '../../actions/jobs';
import AllJobsItem from './AllJobsItem';
import FilterResults from 'react-filter-search';

const Jobs = ({ getLandingJob, jobs: { landjobs, loading } }) => {
  useEffect(() => {
    getLandingJob();
  }, [getLandingJob]);

  const [formData, setFormData] = useState({
    value: '',
    coachesland: [],
  });
  const { value } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      <body>
        <Topnav />
        <section className='whole_page_wrapper'>
          <Header />
          <div className='full_row jobs_page_header'>
            <h4>Find your dream job</h4>
            <p>
              Your perfect job may just be a couple of clicks away, unlock new
              opportunities and <br />
              find the right job for you.
            </p>
          </div>
          <section>
            <div className='full_row search_course_wrapper'>
              <div className='flex_r_j_between_align_center search_course_input_wrapper'>
                <div className='search_input'>
                  <input
                    type='text'
                    name='value'
                    value={value}
                    onChange={(e) => onChange(e)}
                    placeholder='Search job title and keyword'
                  />
                </div>
                <div className='search_button'>
                  <button className=''>search</button>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className='full_row jobs_section_wrapper_div'>
              <div className='site_center1'>
                <div className='course_n_category_wrapper'>
                  <div className='left'>
                    <div>
                      <div className='flex_r_j_between_align_center full_row category_header'>
                        <h6>Categories</h6>
                        <i className='fas fa-angle-down'></i>
                      </div>
                      <div className='options_category'>
                        <form action=''>
                          <input
                            type='checkbox'
                            name=''
                            id='development'
                            value='development'
                          />
                          <label for='development'> Development </label>
                          <input
                            type='checkbox'
                            name=''
                            id='systemAdmin'
                            value='systemAdmin'
                          />
                          <label for='systemAdmin'>System Administration</label>
                          <input
                            type='checkbox'
                            name=''
                            id='design'
                            value='design'
                          />
                          <label for='design'> Design </label>
                          <input
                            type='checkbox'
                            name=''
                            id='sales'
                            value='sales'
                          />
                          <label for='sales'> Sales </label>
                          <input
                            type='checkbox'
                            name=''
                            id='finance'
                            value='finance'
                          />
                          <label for='finance'> Finance </label>
                          <input
                            type='checkbox'
                            name=''
                            id='humanResources'
                            value='humanResources'
                          />
                          <label for='humanResources'> Human Resources </label>
                        </form>
                      </div>
                    </div>
                    <div>
                      <div className='flex_r_j_between_align_center full_row JobType_header'>
                        <h6>Job Type</h6>
                        <i className='fas fa-angle-down'></i>
                      </div>
                      <div className='options_jobType'>
                        <form action=''>
                          <input
                            type='checkbox'
                            name=''
                            id='FullTime'
                            value='FullTime'
                          />
                          <label for='FullTime'> Full Time </label>
                          <input
                            type='checkbox'
                            name=''
                            id='Internship'
                            value='Internship'
                          />
                          <label for='Internship'> Internship </label>
                          <input
                            type='checkbox'
                            name=''
                            id='PartTime'
                            value='PartTime'
                          />
                          <label for='PartTime'> Part Time </label>
                          <input
                            type='checkbox'
                            name=''
                            id='Remote'
                            value='Remote'
                          />
                          <label for='Remote'> Remote </label>
                        </form>
                      </div>
                    </div>
                    <div>
                      <div className='flex_r_j_between_align_center full_row location_header'>
                        <h6>Location</h6>
                        <i className='fas fa-angle-down'></i>
                      </div>

                      <div className='options_location'>
                        <form action=''>
                          <input
                            type='checkbox'
                            name=''
                            id='Lagos'
                            value='Lagos'
                          />
                          <label for='Lagos'> Lagos </label>
                          <input
                            type='checkbox'
                            name=''
                            id='Abuja'
                            value='Abuja'
                          />
                          <label for='Abuja'> Abuja </label>
                          <input
                            type='checkbox'
                            name=''
                            id='PortHarcourt'
                            value='PortHarcourt'
                          />
                          <label for='PortHarcourt'> Port Harcourt </label>
                          <input
                            type='checkbox'
                            name=''
                            id='Enugu'
                            value='Enugu'
                          />
                          <label for='Enugu'> Enugu </label>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className='right'>
                    <div className='full_row jobs_header'>
                      <h4>All Jobs</h4>
                    </div>
                    <div className='full_row all_jobs'>
                      {landjobs.length > 0 ? (
                        <FilterResults
                          value={value}
                          data={landjobs}
                          renderResults={(results) =>
                            results.length > 0 ? (
                              results
                                .sort((a, b) =>
                                  a.created_at > b.created_at ? -1 : 1
                                )
                                .map((job) => (
                                  <AllJobsItem key={job.id} job={job} />
                                ))
                            ) : (
                              <h4>
                                {loading ? 'Loading...' : 'No Jobs Found'}
                              </h4>
                            )
                          }
                        />
                      ) : (
                        <h4>{loading ? 'Loading' : 'No Jobs Found...'}</h4>
                      )}
                    </div>

                    <div className='full_row text-center'>
                      <button className='red_btn'>load more</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className='full_row subscribe_section_wrapper_div'>
              <div className='site_center1'>
                <div className='full_row text-center subscribe_header'>
                  <h4>Get the latest jobs as soon as they're posted</h4>
                  <p>
                    Join thousands of people who’ve found their dream job using
                    Stevia. <br />
                    Get started and find your dream job today!
                  </p>
                </div>

                <div className='flex_r_j_between_align_center subscribe_input_wrapper'>
                  <div className='subscribe_input'>
                    <input
                      type='text'
                      name=''
                      id=''
                      placeholder='Search job title and keyword'
                    />
                  </div>
                  <div className='subscribe_button'>
                    <button className=''>subscribe</button>
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

Jobs.propTypes = {
  getLandingJob: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  jobs: state.jobs,
});

export default connect(mapStateToProps, { getLandingJob })(Jobs);
