import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Topnav from './Topnav';
import { getCoachesProfile } from '../../actions/profile';
import CoachItem from './CoachItem';

const Coaches = ({ getCoachesProfile, profile: { coaches, loading } }) => {
  useEffect(() => {
    getCoachesProfile();
  }, [getCoachesProfile]);
  return (
    <Fragment>
      <body>
        <Topnav />
        <section className='whole_page_wrapper'>
          <header className='full_row site_header_4_coaches'>
            <Header />
            <div className='full_row header_desc_wrapper'>
              <div className='flex_r_j_between_align_center site_center1'>
                <div className='header_desc_left'>
                  <h4>
                    Find coaches that understand your <br />
                    situation and can help you go after <br />
                    your greatness.
                  </h4>
                  <p>
                    We have serial entrepreneurs, brand strategy experts, HR{' '}
                    <br />
                    professionals, former C-Suite executives and more, so you
                    can find <br />
                    the right coach based on the specificity of your role.
                  </p>
                </div>
              </div>
            </div>
          </header>
          <section>
            <div className='full_row courses_section_wrapper_div'>
              <div className='site_center1'>
                <div className='full_row text-center courses_section_header_txt'>
                  <h4>All Coaches</h4>
                </div>
                <div className='flex_r_j_between course_search_n_category coach_search_n_category'>
                  <div className='flex_r_a_center coaches_category'>
                    <div>
                      <h6>Filter Coaches:</h6>
                    </div>

                    <div className='ml-3 select_wrapper specialization'>
                      <select name='' id='' className='search_select'>
                        <option value=''>Specialization</option>
                      </select>
                    </div>
                    <div className='ml-3 select_wrapper ratings'>
                      <select name='' id='' className='search_select'>
                        <option value=''>Ratings</option>
                      </select>
                    </div>
                    <div className='ml-3 select_wrapper cost'>
                      <select name='' id='' className='search_select'>
                        <option value=''>Cost</option>
                      </select>
                    </div>
                  </div>
                  <div className='flex_r_j_between_align_center course_search'>
                    <input
                      type='text'
                      name=''
                      id=''
                      placeholder='Search job title and keyword'
                    />
                    <button>
                      <i className='fas fa-search'></i>
                    </button>
                  </div>
                </div>
                <div className='coaches_wrapper_div'>
                  {coaches.length > 0 ? (
                    coaches.map(coach => (
                      <CoachItem
                        key={coach.id}
                        coach={coach}
                        loading={loading}
                      />
                    ))
                  ) : (
                    <h4>Loading...</h4>
                  )}
                </div>

                {/* <div className="flex_r_j_center_align_center full_row pagination_div">

                    <div className="active">
                        <a href="#">
                            <i className="fas fa-angle-left"></i>
                        </a>
                    </div>
                    <div className="active">
                        <a href="#">
                            1
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            2
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            3
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            4
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            5
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <i className="fas fa-angle-right"></i>
                        </a>
                    </div>

                </div> */}
              </div>
            </div>
          </section>
          <section>
            <div className='full_row sixth_section_wrapper_div'>
              <div className='site_center1 text-center'>
                <h5>Do you want to become a coach on Stevia?</h5>
                <Link to='/coach'>
                  <button className='black_btn'>Become a coach</button>
                </Link>
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

Coaches.propTypes = {
  getCoachesProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getCoachesProfile })(Coaches);
