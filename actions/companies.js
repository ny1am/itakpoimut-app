import request from '../utils/request';

// const API_ROOT = 'https://itp-api-staging.herokuapp.com';
const API_ROOT = 'https://itakpoimut.herokuapp.com';

export function search() {
  return function(dispatch) {
    request(`${API_ROOT}/companies`).then((data) => {
      return dispatch({ type: 'COMPANIES_SUCCESS', payload: data });
    });
  };
}
