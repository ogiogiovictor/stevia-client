import Axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT
} from './types';
import setAuthToken from '../Utils/setAuthToken';
import { setAlert } from './alert';

// Load User

export const loadUser = () => async dispatch => {
  
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  const loadUserApi = `http://127.0.0.1:8000/api/dashboard/currentuser`;
  
  try {
    const res = await Axios.get(loadUserApi);

    dispatch({
      type: USER_LOADED,
      payload: res.data.data[0]
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
    const registerApi = 'http://127.0.0.1:8000/api/register/store';
    const res = await Axios.post(registerApi, body, config);
    dispatch(setAlert(res.data.message, 'success'));
    console.log(res.data)
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });

  } catch (error) {
    dispatch(setAlert(error.response.data.email[0]));
    dispatch({
      type: REGISTER_FAIL
    });
  }
};

// Login User

export const login = (email, password) => async dispatch => {
  const loginApi = 'http://127.0.0.1:8000/api/auth/store';
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
    dispatch(setAlert(error, 'error'));
    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// Logout /Clear Profile

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};
