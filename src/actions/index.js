//import * as types from "../constants";

export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";
export const REQUEST_SELECTED_DATA = "REQUEST_SELECTED_DATA";
export const REQUEST_FILTER_DATA = "REQUEST_FILTER_DATA";
export const REQUEST_SORT_DATA = "REQUEST_SORT_DATA";

export const requestApiData = () => ({ type: REQUEST_API_DATA });

export const receiveApiData = (payload) => ({
  type: RECEIVE_API_DATA,
  payload,
});
export const receiveDataById = (payload) => ({
  type: REQUEST_SELECTED_DATA,
  payload,
});

export const filterByValue = (payload) => ({
  type: REQUEST_FILTER_DATA,
  payload,
});

export const sortByAlphabet = (payload) => ({
  type: REQUEST_SORT_DATA,
  payload,
});
