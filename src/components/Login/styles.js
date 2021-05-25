import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 600px;
  transform: translate(-50%, -50%);
  padding: 40px 20px;
  border: 1px solid #eee;
  border-radius: 7px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  text-align: center;
`;

export const LoginForm = styled.form`
  margin: 40px 0;
  text-align: left;
`;

export const Logo = styled(Link)`
  text-align: center;
  img{
    max-width: 200px;
  }
`;

// const Logo = styled(Link)`
//     color: white;
//     font-family: 'Rajdhani';
//     font-size: 2.4rem;
//     letter-spacing: 5px;
//     text-decoration: none;
// `;

// // children 이 들어가는 곳
// const Contents = styled.div`
//     background: white;
//     padding: 2rem;
//     height: auto;
// `;
