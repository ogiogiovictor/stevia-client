import Axios from 'axios';
import { setAlert } from './alert';
import { GET_SERVICES, GET_COACH_SERVICES, SERVICE_ERROR, ADD_SERVICE, DELETE_SERVICE } from './types';

const url = 'http://127.0.0.1:8000/api';
// Get Admin Services
export const getServices = () => async dispatch => {
  try {
    const res = await Axios.get(
      `${url}/admin-service/index`
    );

    dispatch({
      type: GET_SERVICES,
      payload: res.data.data
    });
  } catch (error) {
    dispatch({
      type: SERVICE_ERROR,
      payload: { msg: error.response.data, status: error.response.data.status }
    });
  }
};

// Get Coach Services
export const getCoachServices = () => async dispatch => {
  try {
    const res = await Axios.get(
      `${url}/coach-service/index`
    );

    dispatch({
      type: GET_COACH_SERVICES,
      payload: res.data.data
    });
  } catch (error) {
    dispatch({
      type: SERVICE_ERROR,
      payload: { msg: error.response.data, status: error.response.data.status }
    });
  }
};

// Delete Service
export const deleteService = (formData) => async dispatch => {
    const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
  try {
    const res = await Axios.post(
      `${url}/admin-service/delete`,
      formData,
      config
    );
    console.log(res.data)
    dispatch({
      type: DELETE_SERVICE,
      payload: res.data
    });
    dispatch(setAlert('Service Successfully Deleted', 'success'));
    dispatch(getServices());
  } catch (error) {
    dispatch({
      type: SERVICE_ERROR,
      payload: { msg: error.response.data, status: error.response.data.status }
    });
  }
};

// Add Service
export const addService = (formData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const res = await Axios.post(
      `${url}/admin-service/store`,
      formData,
      config
    );
    dispatch(setAlert(res.data.message, 'success'));
    dispatch({
      type: ADD_SERVICE,
      payload: res.data.data
    });
    dispatch(getServices());
  } catch (error) {
    const errors = error.response.data;
    if (errors) {
      Object.keys(errors).map(fieldName => {
        return errors[fieldName].map(err => dispatch(setAlert(err, 'error')));
      });
    }
    dispatch({
      type: SERVICE_ERROR,
      payload: { msg: error.response.data, status: error.response.data.status }
    });
  }
};
