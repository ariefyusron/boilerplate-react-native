import { CHOOSE_LANGUAGE } from '../actions';

type Action = {
  type: string;
  payload: any;
};

type InitialState = {
  language: string;
};

const initialState: InitialState = {
  language: ''
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case CHOOSE_LANGUAGE:
      return { ...state, language: action.payload.data };
    default:
      return state;
  }
};
