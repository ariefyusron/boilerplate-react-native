import { ADD_DATA, DELETE_DATA } from '../actions';

type Action = {
  type: string;
  payload: any;
};

type InitialState = {
  data: Array<any>;
};

const initialState: InitialState = {
  data: []
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case ADD_DATA:
      return { ...state, data: [action.payload.data, ...state.data] };
    case DELETE_DATA:
      return {
        ...state,
        data: state.data.filter((data, index) => index !== action.payload.data)
      };
    default:
      return state;
  }
};
