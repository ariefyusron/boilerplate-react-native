export const ADD_DATA = 'ADD_DATA';
export const DELETE_DATA = 'DELETE_DATA';

type Params = {
  type: string;
  payload: object;
};
type Dispatch = (params: Params) => void;

export const addData = (data: string) => (dispatch: Dispatch) => {
  dispatch({ type: ADD_DATA, payload: { data } });
};

export const deleteData = (data: number) => (dispatch: Dispatch) => {
  dispatch({ type: DELETE_DATA, payload: { data } });
};
