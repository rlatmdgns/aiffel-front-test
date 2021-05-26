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

export const initalState = {
  forumsLoading: false,
  forumsDone: false,
  forumsError: null,
  searchLoading: false,
  searchDone: false,
  searchError: null,
  detailLoading: false,
  detailDone: false,
  detailError: null,
  forums: [],
  detail: {},
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case FORUMS_LIST_REQUEST:
      return {
        ...state,
        forumsLoading: true,
      };
    case FORUMS_LIST_SUCESS:
      return {
        ...state,
        forums: [...state.forums, ...action.data],
        forumsLoading: false,
        forumsDone: true,
      };
    case FORUMS_LIST_FAIL:
      return {
        ...state,
        forumsLoading: false,
        forumsDone: false,
        forumsError: action.error,
      };
    case FORUMS_SEARCH_REQUEST:
      return {
        ...state,
        searchLoading: true,
      };
    case FORUMS_SEARCH_SUCESS:
      return {
        ...state,
        forums: (state.forums = action.data),
        searchLoading: false,
        searchDone: true,
      };
    case FORUMS_SEARCH_FAIL:
      return {
        ...state,
        searchLoading: false,
        searchDone: false,
        searchError: action.error,
      };
    case FORUMS_DETAIL_REQUEST:
      return {
        ...state,
        detailLoading: true,
      };
    case FORUMS_DETAIL_SUCESS:
      return {
        ...state,
        detail: state.detail = action.data,
        detailLoading: false,
        detailDone: true,
      };
    case FORUMS_DETAIL_FAIL:
      return {
        ...state,
        detailLoading: false,
        detailDone: false,
        detailError: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
