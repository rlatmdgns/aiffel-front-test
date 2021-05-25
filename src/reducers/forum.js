import {FORUMS_LIST_FAIL, FORUMS_LIST_REQUEST, FORUMS_LIST_SUCESS } from '../actions';

export const initalState = {
  forumsLoading:false,
  forumsDone:false,
  forumsError:null,
  forums:[]
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case FORUMS_LIST_REQUEST :
      return{
        ...state,
        forumsLoading:true,
      };
    case FORUMS_LIST_SUCESS :
      return{
        ...state,
        forums:action.data,
        forumsLoading:false,
        forumsDone:true,
      };
    case FORUMS_LIST_FAIL :
      return{
        ...state,
        forumsLoading:false,
        forumsDone:false,
        forumsError: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
