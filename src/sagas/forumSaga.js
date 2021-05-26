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
} from '../actions';
import * as api from '../api/forum';

function* fourms(action) {
  try {
    const result = yield call(api.getForums, action.data);
    console.log(result);
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
    console.log(action);
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


function* watchFourm() {
  yield takeLatest(FORUMS_LIST_REQUEST, fourms);
}
function* watchSearchFourm() {
  yield takeLatest(FORUMS_SEARCH_REQUEST, Searchfourm);
}
function* watchDetailFourm() {
  yield takeLatest(FORUMS_DETAIL_REQUEST, Deatilfourm);
}

export default function* forumSaga() {
  yield all([fork(watchFourm), fork(watchSearchFourm), fork(watchDetailFourm)]);
}
