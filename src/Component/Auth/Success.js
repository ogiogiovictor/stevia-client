import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Success extends Component {
  render() {
    return (
      <div>
        <div className='flex_c_align_center recruiters_success'>
          <div className='success_div'>
            <div className='full_row'>
              <Link to='/'>
                <img
                  src={process.env.PUBLIC_URL + 'assets/utils/images/15.png'}
                  width='100px'
                  alt=''
                />
              </Link>
            </div>
            <div className='full_row success_text'>
              <h3>Account created successfully</h3>
            </div>
            <div className='full_row'>
              <Link to='/login'>
                <img
                  src={process.env.PUBLIC_URL + 'assets/utils/images/31.png'}
                  alt=''
                />
              </Link>
            </div>
            <div className='full_row success_btn'>
              <Link to='/login'>
                <button className='red_btn full_width_btn'>
                  Log in and start using Stevia
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Success;
