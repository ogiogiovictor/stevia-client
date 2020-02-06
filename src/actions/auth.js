import Axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT,
  CLEAR_PROFILE,
  CLEAR_USER
} from './types';
import setAuthToken from '../Utils/setAuthToken';
import { setAlert } from './alert';

// Load User

export const loadUser = () => async dispatch => {
  
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }else{
    console.log('no token')
  }
  const loadUserApi = `https://infinite-falls-35837.herokuapp.com/api/dashboard/currentuser`;
  
  try {
    const res = await Axios.get(loadUserApi);

    dispatch({
      type: USER_LOADED,
      payload: res.data.data
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Signup User

export const signup = ({
  firstname,
  lastname,
  email,
  phone_number,
  password,
  account_type
}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({
    firstname,
    lastname,
    email,
    phone_number,
    password,
    account_type
  });

  try {
    const registerApi = 'https://infinite-falls-35837.herokuapp.com/api/register/store';
    const res = await Axios.post(registerApi, body, config);
    dispatch(setAlert(res.data.message, 'success'));
    console.log(res.data)
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });

  } catch (error) {
    dispatch(setAlert(error.response.data.email[0], 'error'));
    dispatch({
      type: REGISTER_FAIL
    });
  }
};

// Login User

export const login = (email, password) => async dispatch => {
  const loginApi = 'https://infinite-falls-35837.herokuapp.com/api/auth/store';
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await Axios.post(loginApi, body, config);

    if(res.data.status === 200){
      dispatch(setAlert(res.data.message, 'success'));
      dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data.data
    });
    dispatch(loadUser());
    } else {
      dispatch(setAlert(res.data.message, 'error'));
    }

  } catch (error) {
    console.log(error)
    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// Logout /Clear Profile

export const logout = () => dispatch => {
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: CLEAR_USER });
  dispatch({ type: LOGOUT });
 
};
