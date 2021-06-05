import React from 'react';
import { ViewWrapper, Content, Title, Text, Like } from './styles';
import Tag from '../common/Tag';
const ForumView = ({ detail }) => {

  return (
    <ViewWrapper>
      <Title>{detail.title}</Title>
      {detail.tag && <Tag color={detail.tag.color}>{detail.tag.name}</Tag>}
      <Content>
        <Text>{detail.content}</Text>
      </Content>
      {detail.isLiked ? <Like type="button">좋아요 취소 </Like> : <Like type="button" >좋아요</Like> }
    </ViewWrapper>
  );
};

export default ForumView;
