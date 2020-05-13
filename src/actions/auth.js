import Axios from 'axios';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT,
  CLEAR_PROFILE
} from './types';
import setAuthToken from '../Utils/setAuthToken';
import { setAlert } from './alert';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

// Load User
// const url = 'https://kyc.c-ileasing.com/stevia/api';
const url = 'http://127.0.0.1:8000/api';

export const loadUser = () => async dispatch => {
  
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }else{
    console.log('no token')
  }
  const loadUserApi = `${url}/dashboard/currentuser`;
  
  try {
    const config = {
      headers: {
        'Cache-Control': 'no-cache',
      }
    };
    const res = await Axios.get(loadUserApi, config);

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
    const registerApi = `${url}/register/store`;
    const res = await Axios.post(registerApi, body, config);
    console.log(res.data)
    dispatch(setAlert(res.data.message, 'success'));
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    dispatch(
      MySwal.fire({
        title: 'Hello World',
        footer: 'Copyright 2018',
        onOpen: () => {
          // `MySwal` is a subclass of `Swal`
          //   with all the same instance & static methods
          MySwal.clickConfirm()
        }
      }).then(() => {
        return MySwal.fire('Shorthand works too')
      })
    );
  } catch (error) {
    dispatch(setAlert(error.response.data.email[0], 'error'));
    setTimeout(() => {
      dispatch(window.location.reload())
    }, 3000); 
    dispatch({
      type: REGISTER_FAIL
    });
  }
}; 

// Login User

export const login = (email, password) => async dispatch => {
  const loginApi = `${url}/auth/store`;
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
      setTimeout(() => {
        dispatch(window.location.reload())
      }, 3000); 
    }

  } catch (error) {
    console.log(error)
    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// Logout /Clear Profile

export const logout = () => async dispatch => {
  const logoutApi = `${url}/dashboard/logout`;
  const res = await Axios.post(logoutApi);
  dispatch(setAlert(res.data.message, 'success'));
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
  dispatch(window.location.href='/');
};
