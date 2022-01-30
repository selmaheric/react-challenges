import { combineReducers } from 'redux';

import authReducer from './auth/reducer';
import contextReducer from "./context/reducer"

export default combineReducers({
  auth: authReducer,
  context: contextReducer
})