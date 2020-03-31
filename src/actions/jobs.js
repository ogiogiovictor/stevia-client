import Axios from 'axios';
import { setAlert } from './alert';
import { POST_JOBS, VIEW_JOBS, JOBS_ERROR } from './types';

// const url = 'http://127.0.0.1:8000/api';
const url = 'https://omareservations.com/stevia/api';

// Post Jobs
export const postJobs = (formData) => async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    try {
      const res = await Axios.post(
        `${url}/jobs/post_jobs`,
        formData,
        config
      );
      dispatch(setAlert(res.data.message, 'success'));
      dispatch({
        type: POST_JOBS,
        payload: res.data.data
      });
    } catch (error) {
      const errors = error.response.data;
      if (errors) {
        Object.keys(errors).map(fieldName => {
          return errors[fieldName].map(err => dispatch(setAlert(err, 'error')));
        });
      }
      dispatch({
        type: JOBS_ERROR,
        payload: { msg: error.response.data, status: error.response.data.status }
      });
    }
  };

  // View Jobs
export const viewJobs = () => async dispatch => {
    try {
      const res = await Axios.get(
        `${url}/api/myjobs`
      );
  
      dispatch({
        type: VIEW_JOBS,
        payload: res.data.data
      });
    } catch (error) {
      dispatch({
        type: JOBS_ERROR,
        payload: { msg: error }
      });
    }
  };
