const initialState = {
  loggedUser: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_SUCCESS':
      return Object.assign({}, state, {
        loggedUser: action.payload.user,
      });

    case 'LOGOUT':
    case 'AUTH_FAILURE':
      return initialState;

    default:
      return state;
  }
};

export default authReducer;
