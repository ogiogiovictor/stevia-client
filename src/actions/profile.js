import Axios from 'axios';
import { loadUser } from '../actions/auth';
import { setAlert } from './alert';

import { GET_PROFILE, PROFILE_ERROR, CLEAR_PROFILE, GET_COACHES_PROFILE } from './types';

// const url = 'https://dueseason.biz/stevia-backend/api';
const url = 'http://127.0.0.1:8000/api';

export const getCurrentProfile = () => async dispatch => {
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
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: 'error check' }
    });
  }
};

// Create or Update a Profile
export const createProfile = (formData, history, edit = false) => async dispatch => {
  try {
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
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: 'error check' }
    });
  }
}


// Get Coaches Profiles

export const getCoachesProfile = () => async dispatch => {
  try {
    dispatch(loadUser());
    const res = await Axios.get(
      `${url}/dashboard/get/coach`
    );
    dispatch({
      type: GET_COACHES_PROFILE,
      payload: res.data.data
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: CLEAR_PROFILE });
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: 'error check' }
    });
  }
};
