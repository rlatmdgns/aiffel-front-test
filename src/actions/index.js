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

export const FORUMS_SEARCH_SUCESS = 'FORUMS_SEARCH_SUCCESS';
export const FORUMS_SEARCH_FAIL = 'FORUMS_SEARCH_FAIL';
export const FORUMS_SEARCH_REQUEST = 'FORUMS_SEARCH_REQUEST';

export const FORUMS_DETAIL_SUCESS = 'FORUMS_DETAIL_SUCCESS';
export const FORUMS_DETAIL_FAIL = 'FORUMS_DETAIL_FAIL';
export const FORUMS_DETAIL_REQUEST = 'FORUMS_DETAIL_REQUEST';

export const FORUMS_WRITE_SUCESS = 'FORUMS_WRITE_SUCCESS';
export const FORUMS_WRITE_FAIL = 'FORUMS_WRITE_FAIL';
export const FORUMS_WRITE_REQUEST = 'FORUMS_WRITE_REQUEST';

export const forumsListRequest = (data) => ({
  type: FORUMS_LIST_REQUEST,
  data
});

export const forumsSearchRequest = (data) => ({
  type: FORUMS_SEARCH_REQUEST,
  data
});

export const forumsDetaulRequest = (data) => ({
  type: FORUMS_DETAIL_REQUEST,
  data
});

export const forumsWriteRequest = (data) => ({
  type: FORUMS_WRITE_REQUEST,
  data
});
