import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Topnav from './Topnav';
import Header from './Header';
import Footer from './Footer';
import { getLandingJob } from '../../actions/jobs';
import Spinner from '../Spinner/Spinner'

const JobDetails = ({ getLandingJob, jobs: { landjobs, loading }, match }) => {
  useEffect(() => {
    getLandingJob();
  }, [getLandingJob]);

  const job = landjobs.find(({ id }) => id === parseInt(match.params.id));

  const presentDate = moment().format('MM/DD/YYYY');
  const postedDate = moment(job && job.created_at).format('MM/DD/YYYY');
  const postedDays = moment(presentDate).day() - moment(postedDate).day();
  return loading ? <Spinner /> :
   (
    <Fragment>
      <body>
        <Topnav />
        <section className='whole_page_wrapper'>
          <Header />
          <section>
            <div className='full_row jobDescription_section_wrapper_div'>
              <div className='full_row job_desc_header_wrapper'>
                <div className='site_center1'>
                  <div className='flex_r_j_between_align_center header_content_wrapper'>
                    <div className='back_to_job_link'>
                      <Link to='/jobs' className='rubber_effect_link'>
                        <i className='fas fa-angle-left'></i>
                        Back to Jobs
                      </Link>
                    </div>
                    <div className='job_title'>
                      <h4>{job && job.job_title}</h4>
                    </div>
                    <div className='posted_day'>
                      <p>Posted {postedDays} days ago</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='full_row'>
                <div className='site_center1'>
                  <div className='full_row flex_r job_description_content'>
                    <div className='job_location'>
                      <div className='full_row comp_name_n_location'>
                        <p>
                          <i className='fas fa-briefcase'></i>
                          {job && job.company_name}
                        </p>

                        <p>
                          <i className='far fa-clock'></i>
                          {job && job.job_type}
                        </p>

                        <p>
                          <i className='fas fa-map-marker-alt'></i>
                          {job && job.city}, {job && job.state}
                        </p>
                      </div>
                      <div className='full_row expiry_date'>
                        <h6>Expiry date</h6>
                        <p>{moment(job && job.expiry_date).format('MMMM Do YYYY')}</p>
                      </div>
                      <div className='full_row social_share'>
                        <div className='full_row'>
                          <h6>Share this job:</h6>
                        </div>

                        <div className='full_row'>
                          <i className='fab fa-facebook-square'></i>
                          <i className='fab fa-linkedin'></i>
                          <i className='fab fa-twitter-square'></i>
                        </div>
                      </div>
                      <div className='full_row share_btn'>
                        <a href={job && job.email !== 'null' ? (`mailto:${job.email}`) : (`${job && job.website}`)}><button className='red_btn'>Apply for job</button></a>
                      </div>
                      <div className='full_row save_later'>
                        <h6>
                          <i className='far fa-heart'></i>
                          Save for later
                        </h6>
                      </div>
                    </div>
                    <div className='main_job_desc'>
                      <div className='full_row description'>
                        <div className='full_row header'>
                          <h6>Description</h6>
                        </div>
                        <div className='full_row description_content'>
                          <p>
                            {job && job.job_description}
                          </p>
                        </div>
                      </div>
                      {/* <div className='full_row responsibility'>
                        <div className='full_row header'>
                          <h6>Responsibility</h6>
                        </div>
                        <div className='full_row responsibility_content'>
                          <div className='flex_r_a_center'>
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                '../../assets/utils/images/19.png'
                              }
                              alt=''
                            />
                            <p>Developing new user experiences using React</p>
                          </div>

                          <div className='flex_r_a_center'>
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                '../../assets/utils/images/19.png'
                              }
                              alt=''
                            />
                            <p>
                              Building reusable components and frontend
                              libraries
                            </p>
                          </div>

                          <div className='flex_r_a_center'>
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                '../../assets/utils/images/19.png'
                              }
                              alt=''
                            />
                            <p>
                              Translate designs, wireframes, and business
                              requirements into high quality UI
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='full_row responsibility'>
                        <div className='full_row header'>
                          <h6>Requirements</h6>
                        </div>
                        <div className='full_row responsibility_content'>
                          <div className='flex_r_a_center'>
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                '../../assets/utils/images/19.png'
                              }
                              alt=''
                            />
                            <p>A computer science qualification BA/BSc/HND</p>
                          </div>

                          <div className='flex_r_a_center'>
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                '../../assets/utils/images/19.png'
                              }
                              alt=''
                            />
                            <p>
                              3+ years of professional experience working on
                              digital products
                            </p>
                          </div>
                          <div className='flex_r_a_center'>
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                '../../assets/utils/images/19.png'
                              }
                              alt=''
                            />
                            <p>
                              Applied experience with UX research techniques,
                              planning and running user tests, analyzing
                              findings and articulating results.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='full_row responsibility'>
                        <div className='full_row header'>
                          <h6>Perks</h6>
                        </div>
                        <div className='full_row responsibility_content'>
                          <div className='flex_r_a_center'>
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                '../../assets/utils/images/19.png'
                              }
                              alt=''
                            />
                            <p>Free Macbook</p>
                          </div>

                          <div className='flex_r_a_center'>
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                '../../assets/utils/images/19.png'
                              }
                              alt=''
                            />
                            <p>Quarterly bonus</p>
                          </div>
                        </div>
                      </div> */}
                      <div className='full_row responsibility'>
                        <div className='full_row header'>
                          <h6>Salary</h6>
                        </div>
                        <div className='full_row responsibility_content'>
                          <div className='flex_r_a_center'>
                            <p>Salary & Benefits: ₦ {new Intl.NumberFormat('en-EN').format(Number(job && job.salary))} / Annually</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='full_row'>
                <div className='site_center1'>
                  <div className='full_row text-center recommendation_header'>
                    <h3>Courses that will enhance your career</h3>
                  </div>
                  <div className='courses_wrapper_div'>
                    <div className='each_course'>
                      <div className='flex_r_j_between_align_center'>
                        <div className='lecturer'>
                          <p>By Strive Masayiwa</p>
                        </div>

                        <div className='flex_r_a_center course_price'>
                          <div className='price_tag_icon'>
                            <i className='fas fa-tag'></i>
                          </div>
                          <div className='course_amount'>
                            <p>N100,000</p>
                          </div>
                        </div>
                      </div>

                      <div className='flex_r_a_center course_icon_n_name'>
                        <div className='course_image_wrapper'>
                          <div className='course_image'>
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                '../../assets/utils/images/Bitmap.png'
                              }
                              alt=''
                            />
                          </div>
                        </div>
                        <div className='course_name'>
                          <h5>Skillsets to shift your career</h5>
                        </div>
                      </div>

                      <div className='full_row course_description'>
                        <p>
                          A course for anyone who’s ready to find their dream
                          job. Covering everything from resumes to job
                          applications.
                        </p>
                      </div>
                      <div className='full_row'>
                        <button className='black_btn full_width_btn'>
                          Enrol Now
                        </button>
                      </div>
                    </div>

                    <div className='each_course'>
                      <div className='flex_r_j_between_align_center'>
                        <div className='lecturer'>
                          <p>By Strive Masayiwa</p>
                        </div>

                        <div className='flex_r_a_center course_price'>
                          <div className='price_tag_icon'>
                            <i className='fas fa-tag'></i>
                          </div>
                          <div className='course_amount'>
                            <p>N100,000</p>
                          </div>
                        </div>
                      </div>
                      <div className='flex_r_a_center course_icon_n_name'>
                        <div className='course_image_wrapper'>
                          <div className='course_image'>
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                '../../assets/utils/images/Bitmap.png'
                              }
                              alt=''
                            />
                          </div>
                        </div>
                        <div className='course_name'>
                          <h5>Skillsets to shift your career</h5>
                        </div>
                      </div>
                      <div className='full_row course_description'>
                        <p>
                          A course for anyone who’s ready to find their dream
                          job. Covering everything from resumes to job
                          applications.
                        </p>
                      </div>
                      <div className='full_row'>
                        <button className='black_btn full_width_btn'>
                          Enrol Now
                        </button>
                      </div>
                    </div>
                    <div className='each_course'>
                      <div className='flex_r_j_between_align_center'>
                        <div className='lecturer'>
                          <p>By Strive Masayiwa</p>
                        </div>

                        <div className='flex_r_a_center course_price'>
                          <div className='price_tag_icon'>
                            <i className='fas fa-tag'></i>
                          </div>
                          <div className='course_amount'>
                            <p>N100,000</p>
                          </div>
                        </div>
                      </div>
                      <div className='flex_r_a_center course_icon_n_name'>
                        <div className='course_image_wrapper'>
                          <div className='course_image'>
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                '../../assets/utils/images/Bitmap.png'
                              }
                              alt=''
                            />
                          </div>
                        </div>
                        <div className='course_name'>
                          <h5>Skillsets to shift your career</h5>
                        </div>
                      </div>
                      <div className='full_row course_description'>
                        <p>
                          A course for anyone who’s ready to find their dream
                          job. Covering everything from resumes to job
                          applications.
                        </p>
                      </div>
                      <div className='full_row'>
                        <button className='black_btn full_width_btn'>
                          Enrol Now
                        </button>
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

JobDetails.propTypes = {
  getLandingJob: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  jobs: state.jobs
});

export default connect(mapStateToProps, { getLandingJob })(JobDetails);
