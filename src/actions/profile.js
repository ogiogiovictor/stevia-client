import Axios from 'axios';
import { setAlert } from './alert';

import { GET_PROFILE, PROFILE_ERROR, CLEAR_PROFILE, GET_COACHES_PROFILE, UPLOAD_PROFILE_IMAGE } from './types';
import { loadUser } from './auth';

const url = 'https://dueseason.biz/stevia-backend/api';
// const url = 'http://127.0.0.1:8000/api';
export const getCurrentProfile = () => async dispatch => {
if (localStorage.token) {
  try {
    dispatch(loadUser());
    const res = await Axios.get(
      `${url}/dashboard/role/${localStorage.token}`
    );

    dispatch({
      type: GET_PROFILE,
      payload: res.data.data.user_details
    });
  } catch (error) {
    const errors = error.response.data;
    if(errors){
      Object.keys(errors).map((fieldName) => {
       return errors[fieldName].map(err => dispatch(setAlert(err, 'error')));
      });
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: error.response.data }
    });
  }
};
};

// Create or Update a Profile
export const createProfile = (formData, history, edit = false) => async dispatch => {
  try {
    dispatch(getCurrentProfile());
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const res = await Axios.post(`${url}/dashboard/postprofile`, formData, config);

    dispatch({
      type: GET_PROFILE,
      payload: res.data.data
    });
    
    dispatch(setAlert(res.data.message, 'success'));
    history.push('/dashboard');

  } catch (error) {
    const errors = error.response.data;
    if(errors){
      Object.keys(errors).map((fieldName) => {
       return errors[fieldName].map(err => dispatch(setAlert(err, 'error')));
      });
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: error.response.data }
    });
  }
}

// Update a Profile Image
export const profileImage = (formData, history, edit = false) => async dispatch => {
  try {
    dispatch(getCurrentProfile());
    const config = {
      headers: {
        'Content-Type': `multipart/form-data; boundary=${formData._boundary}`
      }
    }
    const res = await Axios.post(`${url}/dashboard/profileimage`, formData, config);

    dispatch({
      type: UPLOAD_PROFILE_IMAGE,
      payload: res.data.data
    });
    
    dispatch(setAlert(res.data.message, 'success'));
    history.push('/dashboard');

  } catch (error) {
    const errors = error.response.data;
    if(errors){
      Object.keys(errors).map((fieldName) => {
       return errors[fieldName].map(err => dispatch(setAlert(err, 'error')));
      });
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: error.response.data }
    });
  }
}


// Get Coaches Profiles

export const getCoachesProfile = () => async dispatch => {
  try {
    const res = await Axios.get(
      `${url}/dashboard/get/coach`
    );
    dispatch({
      type: GET_COACHES_PROFILE,
      payload: res.data.data
    });
  } catch (error) {
    const errors = error.response.data;
    if(errors){
      Object.keys(errors).map((fieldName) => {
       return errors[fieldName].map(err => dispatch(setAlert(err, 'error')));
      });
    }
    dispatch({ type: CLEAR_PROFILE });
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: 'error check' }
    });
  }
};
