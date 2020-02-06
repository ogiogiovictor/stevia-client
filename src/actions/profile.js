import Axios from 'axios';

import { GET_PROFILE, PROFILE_ERROR } from './types';

export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await Axios.get(
      'https://infinite-falls-35837.herokuapp.com/api/dashboard/currentuser'
    );

    dispatch({
      type: GET_PROFILE,
      payload: res.data.data
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: 'error check' }
    });
  }
};
