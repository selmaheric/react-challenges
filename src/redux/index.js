import { combineReducers } from 'redux';

import authReducer from './auth/reducer';
import counterReducer from "./counter/reducer"

export default combineReducers({
  auth: authReducer,
  counter: counterReducer
})