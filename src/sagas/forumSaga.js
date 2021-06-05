import { all, call, fork, put, takeLatest, delay } from 'redux-saga/effects';
import {
  FORUMS_LIST_FAIL,
  FORUMS_LIST_REQUEST,
  FORUMS_LIST_SUCESS,
  FORUMS_SEARCH_FAIL,
  FORUMS_SEARCH_REQUEST,
  FORUMS_SEARCH_SUCESS,
  FORUMS_DETAIL_FAIL,
  FORUMS_DETAIL_REQUEST,
  FORUMS_DETAIL_SUCESS,
  FORUMS_WRITE_FAIL,
  FORUMS_WRITE_REQUEST,
  FORUMS_WRITE_SUCESS,
} from '../actions';
import * as api from '../api/forum';

function* fourms(action) {
  try {
    const result = yield call(api.getForums, action.data);
    yield put({
      type: FORUMS_LIST_SUCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: FORUMS_LIST_FAIL,
      data: error,
    });
  }
}

function* Searchfourm(action) {
  try {
    yield delay(100);
    yield put({
      type: FORUMS_SEARCH_SUCESS,
      data: action.data,
    });
  } catch (error) {
    yield put({
      type: FORUMS_SEARCH_FAIL,
      data: error,
    });
  }
}

function* Deatilfourm(action) {
  try {
    const result = yield call(api.getForumDetail, action.data);
    yield put({
      type: FORUMS_DETAIL_SUCESS,
      data: result.data,
    });
  } catch (error) {
    yield put({
      type: FORUMS_DETAIL_FAIL,
      data: error,
    });
  }
}
function* Writefourm(action) {
  try {
    yield call(api.postForumWrite, action.data);
    yield put({
      type: FORUMS_WRITE_SUCESS,
      data: action.data,
    });
  } catch (error) {
    yield put({
      type: FORUMS_WRITE_FAIL,
      data: error,
    });
  }
}

function* watchFourm() {
  yield takeLatest(FORUMS_LIST_REQUEST, fourms);
}
function* watchSearchFourm() {
  yield takeLatest(FORUMS_SEARCH_REQUEST, Searchfourm);
}
function* watchDetailFourm() {
  yield takeLatest(FORUMS_DETAIL_REQUEST, Deatilfourm);
}

function* watchWriteFourm() {
  yield takeLatest(FORUMS_WRITE_REQUEST, Writefourm);
}

export default function* forumSaga() {
  yield all([
    fork(watchFourm),
    fork(watchSearchFourm),
    fork(watchDetailFourm),
    fork(watchWriteFourm),
  ]);
}
