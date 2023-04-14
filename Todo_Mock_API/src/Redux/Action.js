import {
  ADD,
  ERROR,
  LOADING,
  GET_SUCCESS,
  REDUCE,
  POST_SUCCESS,
} from "./actionType";

export function addActionObj(payload) {
  return { type: ADD, payload };
}
export function reduceActionObj(payload) {
  return { type: REDUCE, payload };
}

export const getLoading = () => {
  return { type: LOADING };
};

export const getSuccess = (payload) => {
  return { type: GET_SUCCESS, payload };
};

export const getError = () => {
  return { type: ERROR };
};

export const postSuccess = (payload) => {
  return { type: POST_SUCCESS, payload };
};
