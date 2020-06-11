import { call, put, takeLatest, all } from "redux-saga/effects";

import {
  REQUEST_API_DATA,
  REQUEST_FILTER_DATA,
  REQUEST_SORT_DATA,
  REQUEST_SELECTED_DATA,
  receiveApiData,
  receiveDataById,
} from "../actions";

import { fetchData } from "../api";

function* getApiData(action) {
  try {
    const data = yield call(fetchData);
    yield put(receiveApiData(data));
  } catch (e) {
    console.log(e);
  }
}

function* getFilteredData(action) {
  try {
    const data = yield call(fetchData);
    yield put(receiveApiData(data));
  } catch (e) {
    console.log(e);
  }
}

function* getSelectedData(action) {
  try {
    const data = yield call(fetchData);
    yield put(receiveDataById(data));
  } catch (e) {
    console.log(e);
  }
}

function* actionWatcher() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}
function* actionWatcher2() {
  yield takeLatest(REQUEST_FILTER_DATA, getFilteredData);
}
function* actionWatcher3() {
  yield takeLatest(REQUEST_SELECTED_DATA, getSelectedData);
}
export default function* rootSaga() {
  yield all([actionWatcher(), actionWatcher2(), actionWatcher3()]);
}
