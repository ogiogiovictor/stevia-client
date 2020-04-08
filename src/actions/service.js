import Axios from 'axios';
import { setAlert } from './alert';
import { GET_SERVICES, ADD_COACH_SERVICE, GET_COACH_SERVICES, SERVICE_ERROR, ADD_SERVICE, DELETE_SERVICE, BOOK_A_COACH, GET_COACH_APPOINTMENTS } from './types';
import setAuthToken from '../Utils/setAuthToken';

// const url = 'http://127.0.0.1:8000/api';
const url = 'https://omareservations.com/stevia/api';

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
      payload: res.data.data.coach_service
    });
  } catch (error) {
    dispatch({
      type: SERVICE_ERROR,
      payload: { msg: error }
    });
  }
};

// Get Coach Appointments
export const getAppointments = () => async dispatch => {
  try {
    const res = await Axios.get(
      `${url}/coach-service/courses_appointments`
    );
    console.log(res.data.data);
    dispatch({
      type: GET_COACH_APPOINTMENTS,
      payload: res.data.data
    });
  } catch (error) {
    dispatch({
      type: SERVICE_ERROR,
      payload: { msg: error }
    });
  }
};

// Get Paystack Object
export const verifyPaystack = async (reference) => {
  try {
    const config = {
      headers: {
        'Authorization': 'Bearer sk_test_30b3e04f11b84a6f52360c86d1159c5b33e4e933',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
      }
    };
    delete Axios.defaults.headers.common["AuthToken"];
    const res = await Axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      config
    );
    return res.data.data;
  } catch (error) {
    console.log(error)
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

// Add Coach Service
export const addCoachService = (formData) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const res = await Axios.post(
      `${url}/coach-service/store`,
      formData,
      config
    );
    dispatch(setAlert('Service Successfully Added ', 'success'));
    dispatch({
      type: ADD_COACH_SERVICE,
      payload: res.data.data
    });
    dispatch(getCoachServices());
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

// Book a Coach
export const bookACoach = (formData) => async dispatch => {
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
      type: BOOK_A_COACH,
      payload: res.data.data
    });
    dispatch(getCoachServices());
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

