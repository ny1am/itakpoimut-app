import { combineReducers } from 'redux';

import AppNavigation from '../components/navigation/AppNavigation';
import companiesReducer from './companies';

const navReducer = (state, action) => {
  const newState = AppNavigation.router.getStateForAction(action, state);
  return newState || state;
};

const rootReducer = combineReducers({
  nav: navReducer,
  companies: companiesReducer,
});

export default rootReducer;
