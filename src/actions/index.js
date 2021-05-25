// 로그인 액션
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';

export const loginRequest = (data) => ({
  type: LOGIN_REQUEST,
  data,
});

// 포럼 액션
export const FORUMS_LIST_SUCESS = 'FORUMS_LIST_SUCCESS';
export const FORUMS_LIST_FAIL = 'FORUMS_LIST_FAIL';
export const FORUMS_LIST_REQUEST = 'FORUMS_LIST_REQUEST';

export const forumsListRequest = () => ({
  type: FORUMS_LIST_REQUEST,
});
