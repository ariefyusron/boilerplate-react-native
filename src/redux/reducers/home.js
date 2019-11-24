import { ADD_DATA, DELETE_DATA } from '../actions';

const initialState = {
  data: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return { ...state, data: [action.payload, ...state.data] };
    case DELETE_DATA:
      return {
        ...state,
        data: state.data.filter(data => data !== action.payload)
      };
    default:
      return state;
  }
};
