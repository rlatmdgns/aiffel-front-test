import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin:0;
  padding: 6px;
  border-bottom: 1px solid #eaecef;
  background: #fafbfc;
`;

export const Logo = styled.div`
  img {
    max-width: 120px;
  }
`;
export const Profile = styled.span`
  display: inline-block;
  padding: 4px;
  border-radius: 50%;
  overflow: hidden;
  vertical-align: middle;
  &:hover {
    background-color: rgba(60, 64, 67, 0.08);
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
    max-width: 34px;
    max-height: 34px;
    border-radius: 50%;
  }
`;
export const Name = styled.span`
  display: inline-block;
  margin-right: 10px;
  color: #555;
  text-decoration: none;
  vertical-align: middle;
  &:hover {
    color: #0261cc;
  }
`;

export const InputArea = styled.div`
  position: relative;
  display: inline-block;
  input{
    padding-right: 60px;
  }
  button {
    position: absolute;
    right:10px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
