import { Dispatch } from "../types";

export const ADD_DATA = "ADD_DATA";
export const DELETE_DATA = "DELETE_DATA";

export const addData = (data: string) => (dispatch: Dispatch) => {
  dispatch({ type: ADD_DATA, payload: { data } });
};

export const deleteData = (data: number) => (dispatch: Dispatch) => {
  dispatch({ type: DELETE_DATA, payload: { data } });
};
