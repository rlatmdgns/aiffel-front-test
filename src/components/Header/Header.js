import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import Input from '../common/Input';
import useInput from '../../hooks/useInput';
import { HeaderWrapper, Logo, Profile, Name, InputArea } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import {forumsSearchRequest,forumsListRequest} from '../../actions/index'

const Header = ({ location }) => {
  const dispatch = useDispatch()
  const [user, setUser] = useState('');
  const [searchKeyword, onChangeSearch] = useInput('');
  const { forums, searchForums } = useSelector((state) => state.forum);
  const onClickSearch = useCallback(() => {
    const result = forums.filter((item) => {
      if (item.hasOwnProperty('title')) //title 속성 여부 체크 
        return item.title.indexOf(searchKeyword) !== -1;
    });
    dispatch(forumsSearchRequest(result));
  }, [searchKeyword]);
  useEffect(() => {
    setUser(localStorage.getItem('user'));
  }, [user]);

  if (location.pathname === '/') {
    return null;
  }
  return (
    <HeaderWrapper>
      <Logo>
        <img src="/images/aiffel_logo.png" alt="AIFFEL" />
      </Logo>
      <InputArea>
        <Input
          type="text"
          placeholder="검색어를 입력하세요."
          value={searchKeyword}
          onChange={onChangeSearch}
          size="middle"
        />
        <Button size="middle" type="button" onClick={onClickSearch}>
          검색
        </Button>
      </InputArea>
      <Link to="profile">
        <Name>{user}님</Name>
        <Profile>
          <img src="/images/profile.png" alt="프로필 이미지" />
        </Profile>
      </Link>
    </HeaderWrapper>
  );
};

export default Header;
