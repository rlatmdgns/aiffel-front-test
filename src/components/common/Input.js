import React from 'react';
import styled from 'styled-components';
const inputSize = size => {
  switch (size) {
    case "small":
      return "200px";
    case "middle":
      return "400px";
    case "large":
      return "600px";
    default:
      return "100%";
  }
};
const InputWrapper = styled.input`
  width: ${(props) => inputSize(props.size)};
  height: 40px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
`;
function Input({ size, ...rest }) {
  return <InputWrapper size={size} {...rest} />;
}

export default Input;
