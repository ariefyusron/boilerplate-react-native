const initialState = {
  language: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHOOSE_LANGUAGE':
      return { ...state, language: action.payload };
    default:
      return state;
  }
};
