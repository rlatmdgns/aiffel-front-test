import styled from 'styled-components';

export const Section = styled.section`
  overflow: auto;
  padding:20px 0;
  height: calc(100vh - 55px);
`;
export const ForumsGroup = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  padding: 10px 30px;
  li {
    margin: 5px;
  }
  a{
    text-decoration: none;
  }
`;

export const ForumItem = styled.div`
  width: 280px;
  height: 372px;
  padding: 20px;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  &:hover {
    transform: translateY(-8px);
    box-shadow: rgb(0 0 0 / 8%) 0px 12px 20px 0px;
  }
`;

export const ForumTitle = styled.h4`
  font-size: 1rem;
  margin: 0px 0px 0.25rem;
  line-height: 1.5;
  word-break: break-word;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: rgb(33, 37, 41);
`;
export const ForumDescription = styled.p`
  margin: 0px 0px 1.5rem;
  word-break: break-word;
  overflow-wrap: break-word;
  font-size: 0.875rem;
  line-height: 1.5;
  height: 14.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 11;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgb(73, 80, 87);
`;
export const SubInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
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

export const Date = styled.span`
  font-size: 12px;
  color: #888;
`;
export const MoreArea = styled.div`
  text-align:center;
`;
export const Top = styled.div`
  position: relative;
  button{
    position: absolute;
    top: 0;
    right: 10px;
  }
`;
