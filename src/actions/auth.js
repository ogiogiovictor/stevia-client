import Axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR
} from './types';
import { toast } from 'react-toastify';
import setAuthToken from '../Utils/setAuthToken';

// Load User

export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await Axios.post('http://127.0.0.1:8000/api/auth/store');

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
  role
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
    role
  });

  try {
    const res = await Axios.post(
      'http://127.0.0.1:8000/api/register/store',
      body,
      config
    );
    toast.success(res.data.message);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });

    // dispatch(loadUser());

  } catch (error) {
    toast.error(error.response.data.email[0]);
    console.log(error);
    dispatch({
      type: REGISTER_FAIL
    });
  }
};

// Login User

export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await Axios.post(
      'http://127.0.0.1:8000/api/auth/store',
      body,
      config
    );
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data.data
    });

    // dispatch(loadUser());

  } catch (error) {
    console.log(error);
    dispatch({
      type: LOGIN_FAIL
    });
  }
};