import UserActionTypes from './user.types';
import Axios from 'axios';

export const fetchUserStart = (data) => ({
  type: UserActionTypes.FETCH_USER_START
});

export const fetchUserSuccess = currentUser => ({
  type: UserActionTypes.FETCH_USER_SUCCESS,
  payload: currentUser
});

export const fetchUserFailure = errorMessage => ({
  type: UserActionTypes.FETCH_USER_FAILURE,
  payload: errorMessage
});

export const fetchUserStartAsync = (data) => {
  return async dispatch => {
    try {
      dispatch(fetchUserStart());
      await Axios({
        method: 'post',
        redirect: 'follow',
        url: 'http://127.0.0.1:8000/api/auth/store',
        timeout: 4000, // 4 seconds timeout
        data: {
          data
        }
      }).then(response => {
        if (response.data.status === 200) {
          this.setState({ successMessage: response.data.message });
          const currentUser = response.data.data;
          dispatch(fetchUserSuccess(currentUser));
        } else {
          const apiErrorMessage = { message: response.data.message };
          this.setState({ formError: apiErrorMessage });
        }
      });
    } catch (error) {
      dispatch(fetchUserFailure(error.message));
    }
  };
};
