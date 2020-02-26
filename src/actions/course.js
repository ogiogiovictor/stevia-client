import Axios from "axios";
import { setAlert } from "./alert";
import { GET_COURSES, COURSE_ERROR, ADD_COURSE } from '../actions/types';

const url = 'http://127.0.0.1:8000/api';
// const url = 'https://omareservations.com/stevia/api';
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
    window.location.href='../courses';
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