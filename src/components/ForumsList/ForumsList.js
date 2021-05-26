import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { forumsListRequest } from '../../actions';
import { withRouter } from "react-router-dom";
import Button from '../common/Button';
import Tag from '../common/Tag';
import {
  Section,
  ForumsGroup,
  ForumItem,
  ForumTitle,
  ForumDescription,
  Like,
  SubInfo,
  Date,
  MoreArea,
} from './styles';
import Modal from '../Modal/Modal';
import ForumWrite from '../ForumWrite/ForumWrite';
const ForumsList = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [isShow, setIsShow] = useState(false);
  const { forums } = useSelector((state) => state.forum);
  const onClickMore = () => {
    let nextPage = page + 1;
    dispatch(forumsListRequest(nextPage));
    setPage(nextPage);
  };

  const onClickReset = () => {
    dispatch(forumsListRequest(1));
  };

  const onClickWrite = () => {
    setIsShow(true)
  };

  useEffect(() => {
    if(forums.length === 0 ){
      dispatch(forumsListRequest(page));
    }
  }, [page]);
  const isForumsData = forums.length > 0;
  return (
    <Section>
      <div>
        <Button type="button"  size="large" onClick={onClickWrite}>
          글 작성
        </Button>
        <Modal isShow={isShow} setIsShow={setIsShow} dimd>
          <ForumWrite/>
        </Modal>
      </div>
      {isForumsData ? (
        <>
          <ForumsGroup>
            {forums.map((forum) => {
              return (
                <li key={forum.id}>
                  <Link to={`/forum/${forum.id}`}>
                    <ForumItem>
                      <ForumTitle>
                        {forum.title || '데이터가 없습니다.'}
                      </ForumTitle>
                      <ForumDescription>
                        {forum.content || '데이터가 없습니다.'}
                      </ForumDescription>
                      {forum.tag && (
                        <Tag color={forum.tag.color}>{forum.tag.name}</Tag>
                      )}
                      <SubInfo>
                        {/* <Like type="button">
                          {forum.isLiked ? '좋아요 취소 ' : '좋아요'}
                        </Like> */}
                        <Date>2021-00-00</Date>
                      </SubInfo>
                    </ForumItem>
                  </Link>
                </li>
              );
            })}
          </ForumsGroup>
          <MoreArea>
            <Button type="button" onClick={onClickMore}>
              더보기
            </Button>
          </MoreArea>
        </>
      ) : (
        <div>
          <p>결과를 찾을 수 없습니다.</p>
          <Button type="button" onClick={onClickReset}>
            초기화
          </Button>
        </div>
      )}
    </Section>
  );
};

export default ForumsList;
