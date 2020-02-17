import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import services from './services';
import courses from './courses';

export default combineReducers({
  alert,
  auth,
  profile,
  services,
  courses
});
