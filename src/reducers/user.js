import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from '../actions';

export const initalState = {
  me: null,
  loginLoading: false,
  loginDone: false,
  loginError: null,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loginLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginLoading: false,
        loginDone: true,
        me: action.data,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loginLoading: false,
        loginError: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
