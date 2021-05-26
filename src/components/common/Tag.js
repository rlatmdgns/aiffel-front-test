import React from 'react';
import styled from 'styled-components';

const TagWrapper = styled.em`
  display: inline-block;
  background: ${(props) => props.color};
  padding: 6px;
  min-width: 40px;
  border-radius: 20px;
  font-style: normal;
  font-weight: 700;
  color: #fff;
  text-align:center;
  font-size: 12px;
`;
const Tag = ({ color, children }) => (
  <TagWrapper color={color}>{children}</TagWrapper>
);

export default Tag;
