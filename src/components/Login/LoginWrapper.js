import React, { useCallback, useEffect } from 'react';
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest } from '../../actions';
import useInput from '../../hooks/useInput';
import Button from '../common/Button';
import InputWithLabel from '../common/InputWithLabel';
import { Wrapper, LoginForm, Logo } from './styles';
const LoginWrapper = ({history}) => {
  const dispatch = useDispatch();
  const {loginDone, loginError} = useSelector((state) => state.user)
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassWord] = useInput('');
  const logoUrl = '/images/aiffel_logo.png';
  
  useEffect(()=>{
    if(loginDone){
      history.push('/forum')
      return;
    }
    if(loginError){
      alert("아이디와 비밀번호를 확인해주세요.");
      return;
    }
    
  },[loginDone,loginError])
  const loginOnClick = useCallback(() => {
    // const emailRegex =
    //   /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    // const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{10,}$/;
    // const loginError = '아이디와 비밀번호를 다시 입력해주세요.';

    // if (!emailRegex.test(email)) {
    //   alert(loginError);
    //   return;
    // }
    // if (!passwordRegex.test(password)) {
    //   alert(loginError);
    //   return;
    // }
    const data = {email, password}
    dispatch(loginRequest(data));
  }, [email, password]);

  return (
    <Wrapper>
      <Logo to="/">
        <img src={logoUrl} alt="AIFFEL" />
      </Logo>
      <LoginForm>
        <InputWithLabel
          label="이메일"
          name="id"
          placeholder="이메일"
          value={email}
          onChange={onChangeEmail}
        />
        <InputWithLabel
          label="비밀번호"
          name="password"
          placeholder="비밀번호"
          type="password"
          value={password}
          onChange={onChangePassWord}
        />
      </LoginForm>
      <Button type="button" size="middle" onClick={loginOnClick}>로그인</Button>
    </Wrapper>
  );
};

export default withRouter(LoginWrapper);
