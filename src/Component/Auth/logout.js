import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {logout} from '../../actions/auth'
import { Link } from 'react-router-dom'
import Header from '../Dashboard/Layout/Header';
import Topnav from '../Dashboard/Layout/Topnav';

const logoutEnd = ({user, logout}) => {
    return (
        <Fragment>
            <section className='whole_page_wrapper'>
            <Header menu={user && user.menu} />
            <section className='dashboard_body'>
          <Topnav user={user} htitle='Logout' />
            <h1>Are you sure you want to Logout</h1>
            <Link onClick={logout} to='/'><button>Yes</button></Link>
            <Link to='/dashboard'><button>No</button></Link>
            </section>
            </section>
        </Fragment>
    )
}

logoutEnd.propTypes = {
    logout: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    user: state.auth.user
  });

export default connect(mapStateToProps, {logout})(logoutEnd)
