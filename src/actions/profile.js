import Axios from 'axios';
import { loadUser } from '../actions/auth';

import { GET_PROFILE, PROFILE_ERROR, CLEAR_PROFILE, GET_COACHES_PROFILE } from './types';

export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await Axios.get(
      `https://infinite-falls-35837.herokuapp.com/dashboard/role/${localStorage.token}`
    );

    dispatch({
      type: GET_PROFILE,
      payload: res.data.data.user_details
    });
  } catch (error) {
    dispatch({ type: CLEAR_PROFILE });
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: 'error check' }
    });
  }
};


// Get Coaches Profiles

export const getCoachesProfile = () => async dispatch => {
  try {
    dispatch(loadUser());
    const res = await Axios.get(
      `https://infinite-falls-35837.herokuapp.com/dashboard/get/coach`
    );
    console.log(res.data.data);
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
