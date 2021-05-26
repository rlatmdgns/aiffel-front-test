import React from 'react';
import styled from 'styled-components';

const TextAreaWrapper = styled.textarea`
  width: 100%;
  height: 400px;
  border-radius: 4px;
  background: 1px solid #ddd;
  color: #333;
  cursor: pointer;
  resize: none;
`;
const TextArea = ({ children, onClick, color, size, background, ...rest }) => {
  return (
    <TextAreaWrapper
      onClick={onClick}
      color={color}
      background={background}
      size={size}
      {...rest}
    />
  );
};

export default TextArea;
