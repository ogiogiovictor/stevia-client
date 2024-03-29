import Axios from "axios";
import { setAlert } from "./alert";
import setAuthToken from "../Utils/setAuthToken";
import { GET_COURSES, COURSE_ERROR, ADD_COURSE, ADD_VIDEOS, GET_COURSES_LANDING, COURSE_ENROLLMENT } from '../actions/types';

// const url = 'http://127.0.0.1:8000/api';
const url = 'https://kyc.c-ileasing.com/stevia/api';

// Get Courses

export const getCourses = () => async dispatch => {
    try {
      const res = await Axios.get(
        `${url}/student/index`
      );
  
      dispatch({
        type: GET_COURSES,
        payload: res.data.data
      });
    } catch (error) {
      dispatch({
        type: COURSE_ERROR,
        payload: { msg: error.response.data, status: error.response.data.status }
      });
    }
  };

export const getCoursesLand = () => async dispatch => {
    try {
      const res = await Axios.get(
        `${url}/role/courses`
      );
  
      dispatch({
        type: GET_COURSES_LANDING,
        payload: res.data
      });
    } catch (error) {
      dispatch({
        type: COURSE_ERROR,
        payload: { msg: error }
      });
    }
  };
  
export const getCoursesById = () => async dispatch => {
    try {
      const res = await Axios.get(
        `${url}/student/index`
      );
  
      dispatch({
        type: GET_COURSES,
        payload: res.data.data
      });
    } catch (error) {
      dispatch({
        type: COURSE_ERROR,
        payload: { msg: error.response.data, status: error.response.data.status }
      });
    }
  };
  

  // Add Course
export const addCourse = (formDataImg, config, history) => async dispatch => {
  try {
    const res = await Axios.post(
      `${url}/coach-service/createcourse`,
      formDataImg,
      config
    );
    dispatch({
      type: ADD_COURSE,
      payload: res.data.data
    });
    dispatch(setAlert(res.data.message, 'success'));
    // window.location.href='../courses';
  } catch (error) {
    // const errors = error && error.response.data;
    // if (errors) {
    //   Object.keys(errors).map(fieldName => {
    //     return errors[fieldName].map(err => dispatch(setAlert(err, 'error')));
    //   });
    // }
    dispatch({
      type: COURSE_ERROR,
      payload: { msg: error }
    });
  }
};

  // Add Topics
export const addTopics = (formData) => async dispatch => {
  try {
    const res = await Axios.post(
      `${url}/coach-service/topics_covered`,
      formData
    );
    dispatch(setAlert(res.data.message, 'success'));
  } catch (error) {
    console.log(error);
  }
};
  // Add Team Members
export const addTeamMembers = (formData) => async dispatch => {
  try {
    const res = await Axios.post(
      `${url}/coach-service/team_members`,
      formData
    );
    dispatch(setAlert(res.data.message, 'success'));
  } catch (error) {
    console.log(error);
  }
};

  // Add Documents
export const addDocuments = (formData, config) => async dispatch => {
  try {
    const res = await Axios.post(
      `${url}/coach-service/createcoursedoc`,
      formData,
      config
    );
    dispatch(setAlert(res.data.message, 'success'));
  } catch (error) {
    console.log(error);
  }
};

// Add Videos
export const addVideos = (formData, config) => async dispatch => {
  try {
    const res = await Axios.post(
      `${url}/coach-service/createcoursevideo`,
      formData,
      config
    );
    dispatch({
      type: ADD_VIDEOS,
      payload: res.data.data
    });
    dispatch(setAlert(res.data.message, 'success'));
    console.log(res)
    // window.location.href='/';
  } catch (error) {
    // const errors = error && error.response.data;
    // if (errors) {
    //   Object.keys(errors).map(fieldName => {
    //     return errors[fieldName].map(err => dispatch(setAlert(err, 'error')));
    //   });
    // }
    dispatch({
      type: COURSE_ERROR,
      payload: { msg: error }
    });
  }
};

// Enroll in Course
export const courseEnrollment = (formData) => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }else{
    console.log('no token')
  }
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const res = await Axios.post(
      `${url}/coach-service/coachenrollappoint`,
      formData,
      config
    );
    dispatch(setAlert(res.data.msg, 'success'));
    dispatch({
      type: COURSE_ENROLLMENT,
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
      type: COURSE_ERROR,
      payload: { msg: error.response.data, status: error.response.data.status }
    });
  }
};