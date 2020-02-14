import React, { Fragment } from 'react';
// import PropTypes from 'prop-types';

const AdminDashboard = props => {
  return (
    <Fragment>
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
                      process.env.PUBLIC_URL + '../assets/utils/images/52.png'
                    }
                    alt=''
                  />
                </div>
                <div className='activity'>
                  <p>
                    <span className='red'> Femi Ajiboye </span> booked an
                    appointment with <span className='green'> Akin Alabi</span>
                  </p>
                </div>
              </div>
              <div className='full_row flex_r each_activity'>
                <div className='image'>
                  <img
                    src={
                      process.env.PUBLIC_URL + '../assets/utils/images/53.png'
                    }
                    alt=''
                  />
                </div>
                <div className='activity'>
                  <p>
                    <span className='red'> Femi Ajiboye </span> booked an
                    appointment with <span className='green'> Akin Alabi</span>
                  </p>
                </div>
              </div>
              <div className='full_row flex_r each_activity'>
                <div className='image'>
                  <img
                    src={
                      process.env.PUBLIC_URL + '../assets/utils/images/52.png'
                    }
                    alt=''
                  />
                </div>
                <div className='activity'>
                  <p>
                    <span className='red'> Femi Ajiboye </span> booked an
                    appointment with <span className='green'> Akin Alabi</span>
                  </p>
                </div>
              </div>
              <div className='full_row flex_r each_activity'>
                <div className='image'>
                  <img
                    src={
                      process.env.PUBLIC_URL + '../assets/utils/images/54.png'
                    }
                    alt=''
                  />
                </div>
                <div className='activity'>
                  <p>
                    <span className='red'> Femi Ajiboye </span> booked an
                    appointment with <span className='green'> Akin Alabi</span>
                  </p>
                </div>
              </div>
              <div className='full_row flex_r each_activity'>
                <div className='image'>
                  <img
                    src={
                      process.env.PUBLIC_URL + '../assets/utils/images/55.png'
                    }
                    alt=''
                  />
                </div>
                <div className='activity'>
                  <p>
                    <span className='red'> Femi Ajiboye </span> booked an
                    appointment with <span className='green'> Akin Alabi</span>
                  </p>
                </div>
              </div>
              <div className='full_row flex_r each_activity'>
                <div className='image'>
                  <img
                    src={
                      process.env.PUBLIC_URL + '../assets/utils/images/56.png'
                    }
                    alt=''
                  />
                </div>
                <div className='activity'>
                  <p>
                    <span className='red'> Femi Ajiboye </span> booked an
                    appointment with <span className='green'> Akin Alabi</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

AdminDashboard.propTypes = {};

export default AdminDashboard;
