import React from 'react';
import styled from 'styled-components';

const buttonSize = (size) => {
  switch (size) {
    case 'small':
      return 'width:40px; padding:4px; font-size:12px;';
    case 'middle':
      return 'width:60px; padding:6px; font-size:14px;';
    case 'large':
      return 'width:80px; padding:8px; font-size:14px;';
    default:
      return 'width:100%; padding:14px; font-size:14px;';
  }
};
const ButtonWrapper = styled.button`
  ${(props) => buttonSize(props.size)};
  border: 0;
  border-radius: 4px;
  background: ${(props) => props.background || '#555'};
  color: ${(props) => props.color || '#fff'};
  font-weight: 500;
  cursor: pointer;
`;
const Button = ({ children, onClick, color, size, background }) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      color={color}
      background={background}
      size={size}
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;
