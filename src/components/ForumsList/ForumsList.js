import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { forumsListRequest } from '../../actions';

const ForumsList = (props) => {
  const dispatch = useDispatch();
  const {forums} = useSelector(state => state.forum)
  useEffect(()=>{
    console.log(111)
    dispatch(forumsListRequest());
  },[])
  return (
    <div>
      {forums.map((v)=>{
        return (
          <div key={v.id}>
            {v.title}
            {v.content}
          </div>
        )
      })}
    </div>
  )
}

export default ForumsList

