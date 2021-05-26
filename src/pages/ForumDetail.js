import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { forumsDetaulRequest } from '../actions';
import { ForumView } from '../components/ForumView';

const ForumDetail = ({match}) => {
  const { id } = match.params;
  const dispatch = useDispatch()
  const {detail} = useSelector(state => state.forum)
  useEffect(() => {
    dispatch(forumsDetaulRequest(id))
  }, []);
  return (
    <ForumView detail={detail}/>
  );
};
export default ForumDetail;
