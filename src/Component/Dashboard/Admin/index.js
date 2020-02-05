import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AdminDashboard = props => {
  return (
    <Fragment>
      <section className='whole_page_wrapper'>
        <aside className='side_nav'>
          <div className='full_row logo_div'>
            <img
              src={process.env.PUBLIC_URL + '../assets/utils/images/51.png'}
              alt=''
            />
          </div>
          <div className='side_nav_wrapper'>
            <Link to='#' className='active'>
              <i className='fab fa-buromobelexperte'></i> Overview
            </Link>
            <Link to='#'>
              <i className='fas fa-award'></i> Coaches
            </Link>
            <Link to='#'>
              <i className='fas fa-user-friends'></i> Students
            </Link>
            <Link to='#'>
              <i className='fas fa-briefcase'></i> Jobs
            </Link>
            <Link to='#'>
              <i className='far fa-plus-square'></i> Services
            </Link>
            <Link to='#'>
              <i className='far fa-credit-card'></i> Transactions
            </Link>
            <Link to='#'>
              <i className='fas fa-cog'></i> Settings
            </Link>
            <Link to='#'>
              <i className='fas fa-sign-out-alt'></i> Logout
            </Link>
          </div>
        </aside>

        <section className='dashboard_body'>
          <div className='full_row top_nav'>
            <div className='dashboard_center'>
              <div className='flex_r_j_between_align_center'>
                <div className='left_side'>
                  <h4>Overview</h4>
                </div>
                <div className='flex_r_j_between_align_center right_side'>
                  <div className='bell'>
                    <i className='far fa-bell'></i>
                  </div>
                  <div className='flex_r_j_between_align_center username'>
                    <span>KW</span>
                    <h6>Kunle Williams</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='full_row admin_overview_cards' id='overview_cards'>
            <div className='dashboard_center'>
              <div className='full_row cards_wrapper'>
                <div className='flex_r_a_center'>
                  <div className='left'>
                    <div className='full_row'>
                      <h6>No. of Students</h6>
                    </div>
                    <div className='full_row'>
                      <h2>270</h2>
                    </div>
                  </div>
                </div>
                <div className='flex_r_a_center'>
                  <div className='left'>
                    <div className='full_row'>
                      <h6>No. of Coaches</h6>
                    </div>
                    <div className='full_row'>
                      <h2>230</h2>
                    </div>
                  </div>
                </div>
                <div className='flex_r_a_center'>
                  <div className='left'>
                    <div className='full_row'>
                      <h6>Total Income (July, 2019)</h6>
                    </div>
                    <div className='full_row flex_r'>
                      <h2>
                        <sup>N</sup> 3,350,650
                      </h2>
                    </div>
                  </div>
                </div>
                <div className='flex_r_a_center'>
                  <div className='left'>
                    <div className='full_row'>
                      <h6>Total Profit (July, 2019)</h6>
                    </div>
                    <div className='full_row'>
                      <h2>1,150,050</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='full_row history_n_stream_section'>
            <div className='dashboard_center'>
              <div className='full_row flex_r history_n_stream'>
                <div className='recent_payment'>
                  <div className='full_row header'>
                    <h5>Recent Payment</h5>
                  </div>
                  <div className='full_row table_div'>
                    <table>
                      <thead>
                        <tr>
                          <th> Recipient </th>
                          <th> Amount Paid </th>
                          <th> Date </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td> Strive Masayiwa </td>
                          <td> N130,000 </td>
                          <td> 25th - June - 2019 </td>
                        </tr>
                        <tr>
                          <td> Strive Masayiwa </td>
                          <td> N130,000 </td>
                          <td> 25th - June - 2019 </td>
                        </tr>
                        <tr>
                          <td> Strive Masayiwa </td>
                          <td> N130,000 </td>
                          <td> 25th - June - 2019 </td>
                        </tr>
                        <tr>
                          <td> Strive Masayiwa </td>
                          <td> N130,000 </td>
                          <td> 25th - June - 2019 </td>
                        </tr>
                        <tr>
                          <td> Strive Masayiwa </td>
                          <td> N130,000 </td>
                          <td> 25th - June - 2019 </td>
                        </tr>
                        <tr>
                          <td> Strive Masayiwa </td>
                          <td> N130,000 </td>
                          <td> 25th - June - 2019 </td>
                        </tr>
                        <tr>
                          <td> Strive Masayiwa </td>
                          <td> N130,000 </td>
                          <td> 25th - June - 2019 </td>
                        </tr>
                        <tr>
                          <td> Strive Masayiwa </td>
                          <td> N130,000 </td>
                          <td> 25th - June - 2019 </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className='activity_strem'>
                  <div className='full_row header'>
                    <h5> Activity Stream </h5>
                  </div>
                  <div className='full_row flex_r each_activity'>
                    <div className='image'>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          '../assets/utils/images/52.png'
                        }
                        alt=''
                      />
                    </div>
                    <div className='activity'>
                      <p>
                        <span className='red'> Femi Ajiboye </span> booked an
                        appointment with{' '}
                        <span className='green'> Akin Alabi</span>
                      </p>
                    </div>
                  </div>
                  <div className='full_row flex_r each_activity'>
                    <div className='image'>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          '../assets/utils/images/53.png'
                        }
                        alt=''
                      />
                    </div>
                    <div className='activity'>
                      <p>
                        <span className='red'> Femi Ajiboye </span> booked an
                        appointment with{' '}
                        <span className='green'> Akin Alabi</span>
                      </p>
                    </div>
                  </div>
                  <div className='full_row flex_r each_activity'>
                    <div className='image'>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          '../assets/utils/images/52.png'
                        }
                        alt=''
                      />
                    </div>
                    <div className='activity'>
                      <p>
                        <span className='red'> Femi Ajiboye </span> booked an
                        appointment with{' '}
                        <span className='green'> Akin Alabi</span>
                      </p>
                    </div>
                  </div>
                  <div className='full_row flex_r each_activity'>
                    <div className='image'>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          '../assets/utils/images/54.png'
                        }
                        alt=''
                      />
                    </div>
                    <div className='activity'>
                      <p>
                        <span className='red'> Femi Ajiboye </span> booked an
                        appointment with{' '}
                        <span className='green'> Akin Alabi</span>
                      </p>
                    </div>
                  </div>
                  <div className='full_row flex_r each_activity'>
                    <div className='image'>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          '../assets/utils/images/55.png'
                        }
                        alt=''
                      />
                    </div>
                    <div className='activity'>
                      <p>
                        <span className='red'> Femi Ajiboye </span> booked an
                        appointment with{' '}
                        <span className='green'> Akin Alabi</span>
                      </p>
                    </div>
                  </div>
                  <div className='full_row flex_r each_activity'>
                    <div className='image'>
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          '../assets/utils/images/56.png'
                        }
                        alt=''
                      />
                    </div>
                    <div className='activity'>
                      <p>
                        <span className='red'> Femi Ajiboye </span> booked an
                        appointment with{' '}
                        <span className='green'> Akin Alabi</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </Fragment>
  );
};

AdminDashboard.propTypes = {};

export default AdminDashboard;
