import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import services from './services';
import courses from './courses';
import jobs from './jobs';

export default combineReducers({
  alert,
  auth,
  profile,
  services,
  courses,
  jobs,
});
