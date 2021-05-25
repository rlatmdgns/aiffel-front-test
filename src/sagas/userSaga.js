import {all, call, fork, put, takeLatest} from 'redux-saga/effects';
import {
  LOGIN_SUCCESS, 
  LOGIN_FAIL,
  LOGIN_REQUEST
} from '../actions';
import * as api from '../api/users';
function* login(action){
  try {
    const result = yield call(api.login, action.data);
    yield put({
      type: LOGIN_SUCCESS,
      data: result.data[0].username,
    });
  } catch (error) {
    console.log('error', error);
    yield put({
      type: LOGIN_FAIL,
      data: error,
    });
  }
}
function* watchLogin(){
  yield takeLatest(LOGIN_REQUEST,login);
}

export default function* userSaga(){
  yield all([
    fork(watchLogin),
  ])
}
