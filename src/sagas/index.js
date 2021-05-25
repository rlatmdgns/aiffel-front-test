import { all, fork } from 'redux-saga/effects';
import userSaga from './userSaga';
import forumSaga from './forumSaga';

export default function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(forumSaga),
  ]);
}