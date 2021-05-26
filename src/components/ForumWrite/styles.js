import styled, { css } from 'styled-components';

export const Form = styled.form`
  width: 600px;
  padding: 20px 30px 15px;
  background: #fff;
  border: 1px solid #777;
  box-sizing: border-box;
  box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  textarea{
    margin-top: 30px;
    border: 1px solid #ddd;
  }
  button{
    display: block;
    margin:10px auto;
  }
`;