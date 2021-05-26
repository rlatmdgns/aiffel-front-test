import React from 'react';
import { ViewWrapper, Content, Title, Text, Like } from './styles';
import Tag from '../common/Tag';
const ForumView = ({ detail }) => {
  console.log(detail.isLiked);
  const onClickLike = () => {
    console.log(1)
  }
  const onClickUnLike = () => {
    console.log(1)
  }
  return (
    <ViewWrapper>
      <Title>{detail.title}</Title>
      {detail.tag && <Tag color={detail.tag.color}>{detail.tag.name}</Tag>}
      <Content>
        <Text>{detail.content}</Text>
      </Content>
      {detail.isLiked ? <Like type="button" onClick={onClickUnLike}>좋아요 취소 </Like> : <Like type="button" onClick={onClickLike}>좋아요</Like> }
    </ViewWrapper>
  );
};

export default ForumView;
