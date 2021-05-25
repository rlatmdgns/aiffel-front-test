import React from 'react'
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  width:100%;
  padding: 14px 0;
  border: 0;
  border-radius:4px;
  background: ${props => props.background || "#555"};
  color: ${props => props.color || "#fff"};
  font-weight: 500;
  cursor: pointer;
`
const Button = ({children, onClick}) => {
  return (
    <ButtonWrapper onClick={onClick}>
      {children}
    </ButtonWrapper>
  )
}


export default Button

