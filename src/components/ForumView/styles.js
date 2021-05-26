import styled from 'styled-components';

export const ViewWrapper = styled.div`
  overflow: auto;
  width: 768px;
  padding:20px;
  margin: 100px auto 0;
  border: 1px solid #ddd;
  border-radius: 4px;
`;
export const Content = styled.div`
  min-height: 400px;
`;
export const Title = styled.h3`
  font-size: 2rem;
  line-height: 1.5;
  letter-spacing: -0.004em;
  margin-top: 0px;
  font-weight: 700;
  color: #555;
  word-break: keep-all;
`;
export const Text = styled.p`
  font-size: 1.125rem;
  color: rgb(34, 36, 38);
  line-height: 1.7;
  letter-spacing: -0.004em;
  word-break: keep-all;
  overflow-wrap: break-word;
`;

export const Like = styled.button`
  background: transparent;
  border: 0;
  padding: 0;
  font-size: 12px;
  color: #888;
  cursor: pointer;
  &:hover {
    color: #333;
    font-weight: 700;
  }
`;