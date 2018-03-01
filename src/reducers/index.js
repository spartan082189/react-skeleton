import { combineReducers } from 'redux';
import profile from 'reducers/profile';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  profile,
  routing: routerReducer
});