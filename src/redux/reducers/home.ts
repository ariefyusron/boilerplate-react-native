import { ADD_DATA, DELETE_DATA } from "../actions";
import { Action, HomeState } from "../types";

const initialState: HomeState = {
  data: []
};

export default (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case ADD_DATA:
      return { ...state, data: [payload.data, ...state.data] };
    case DELETE_DATA:
      return {
        ...state,
        data: state.data.filter((data, index) => index !== payload.data)
      };
    default:
      return state;
  }
};
