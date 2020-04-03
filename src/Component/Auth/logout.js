import React from 'react'
import { connect } from 'react-redux'
import {logout} from '../../actions/auth'
import { Link } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'


const logoutEnd = ({auth: {loading, isAuthenticated}, logout}) => {

      return loading && isAuthenticated ? <Spinner /> : (
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
              <h3>You have successfully signed out</h3>
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
                  Log in again
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
  });

export default connect(mapStateToProps, logout)(logoutEnd)
