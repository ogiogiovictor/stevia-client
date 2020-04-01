import Axios from 'axios';
import { setAlert } from './alert';
import {
  POST_JOBS,
  VIEW_JOBS,
  JOBS_ERROR,
  ADD_COMPANY,
  GET_COMPANY,
  GET_JOB_CATEGORIES
} from './types';

// const url = 'http://127.0.0.1:8000/api';
const url = 'https://omareservations.com/stevia/api';

// Post Jobs
export const postJobs = formData => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const res = await Axios.post(`${url}/job/post_jobs`, formData, config);
    dispatch(setAlert(res.data.msg, 'success'));
    window.location.href='../recruiter/viewjobs';
    dispatch({
      type: POST_JOBS,
      payload: res.data
    });
  } catch (error) {
    console.log(error)
    // const errors = error.response.data;
    // if (errors) {
    //   Object.keys(errors).map(fieldName => {
    //     return errors[fieldName].map(err => dispatch(setAlert(err, 'error')));
    //   });
    // }
    dispatch({
      type: JOBS_ERROR,
      payload: { msg: error }
    });
  }
};

// View Jobs
export const viewJobs = () => async dispatch => {
  try {
    const res = await Axios.get(`${url}/job/myjobs`);

    dispatch({
      type: VIEW_JOBS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: JOBS_ERROR,
      payload: { msg: error }
    });
  }
};

// Add Company Name
export const addCompany = formData => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const res = await Axios.post(`${url}/job/company`, formData, config);
    dispatch(setAlert(res.data.msg, 'success'));
    dispatch(getCompany());
    dispatch(getCompany());
    dispatch(getCompany());
      // setTimeout(() => {
      //   dispatch(window.location.reload())
      // }, 3000);
    dispatch({
      type: ADD_COMPANY,
      payload: res.data.msg
    });
    dispatch(getCompany());
  } catch (error) {
    dispatch({
      type: JOBS_ERROR,
      payload: { msg: error }
    });
  }
};

// Get Company Name
export const getCompany = () => async dispatch => {
  try {
    const res = await Axios.get(`${url}/job/mycompany`);
    dispatch({
      type: GET_COMPANY,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: JOBS_ERROR,
      payload: { msg: error }
    });
  }
};

// Get Job Categories
export const getJobCategories = () => async dispatch => {
  try {
    const res = await Axios.get(`${url}/job/job_category`);
    dispatch({
      type: GET_JOB_CATEGORIES,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: JOBS_ERROR,
      payload: { msg: error }
    });
  }
};
