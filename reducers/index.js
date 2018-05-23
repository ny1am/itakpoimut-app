import { combineReducers } from 'redux';

import AppNavigation from '../components/navigation/AppNavigation';
import companiesReducer from './companies';
import authReducer from './auth';

const navReducer = (state, action) => {
  const newState = AppNavigation.router.getStateForAction(action, state);
  return newState || state;
};

const rootReducer = combineReducers({
  nav: navReducer,
  companies: companiesReducer,
  auth: authReducer,
});

export default rootReducer;
