import React from 'react'
import { connect } from 'react-redux'
import {logout} from '../../actions/auth'
import { Redirect } from 'react-router-dom'

const logoutEnd = ({user, logout}) => {

    return (
        <Redirect to='/' />
    )
}

const mapStateToProps = state => ({
    user: state.auth.user
  });

export default connect(mapStateToProps, logout)(logoutEnd)
