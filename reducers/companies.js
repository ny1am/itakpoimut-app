const initialState = {
  companies: [],
};

const companiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'COMPANIES_SUCCESS':
      return Object.assign({}, state, {
        companies: action.payload.companies,
      });

    default:
      return state;
  }
};

export default companiesReducer;
