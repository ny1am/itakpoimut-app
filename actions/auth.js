import queryString from 'query-string';

import request from '../utils/request';

const API_ROOT = 'https://itp-api-staging.herokuapp.com';

export function auth({ username, password }) {
  return function(dispatch) {
    return request(`${API_ROOT}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: queryString.stringify({ username, password }),
    })
      .then((data) => {
        return dispatch({ type: 'AUTH_SUCCESS', payload: data });
      })
      .catch((error) => {
        return dispatch({ type: 'AUTH_FAILURE', error });
      });
  };
}
