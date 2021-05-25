import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import {
  FORUMS_LIST_FAIL,
  FORUMS_LIST_REQUEST,
  FORUMS_LIST_SUCESS,
} from '../actions';
import * as api from '../api/forum';
function* fourms() {
  try {
    const result = yield call(api.getForums);
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

function* watchFourm() {
  yield takeLatest(FORUMS_LIST_REQUEST, fourms);
}

export default function* forumSaga(){
  yield all([
    fork(watchFourm),
  ])
}