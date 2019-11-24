export const ADD_DATA = 'ADD_DATA';
export const DELETE_DATA = 'DELETE_DATA';

export const addData = data => dispatch => {
  dispatch({ type: ADD_DATA, payload: data });
};

export const deleteData = data => dispatch => {
  dispatch({ type: DELETE_DATA, payload: data });
};
