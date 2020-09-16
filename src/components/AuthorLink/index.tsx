import React from 'react';
import { ReactComponent as GoToIcon } from '../../assets/icons/goTo.svg';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const GoToLink = styled.button`
  margin-top: 6rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 150px;
  box-sizing: border-box;
  padding: 0 1.75rem;
  align-items: center;
  border: 0;
  color: ##333333;
  fill: ##333333;
  background: #fff;
  outline: 0;
  transition: all 0.3s;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    opacity: 0.9;
    color: #f2f2f2;
    fill: #f2f2f2;
    background: #333333;
    p {
      color: #f2f2f2;
    }
  }
  p {
    color: #4f4f4f;
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 0.5rem;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: end;
  }
  small {
    font-family: Raleway;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #828282;
  }
`;

interface IAuthorLinkProps {
  genre: string;
  author: string;
}
const AuthorLink: React.FC<IAuthorLinkProps> = ({ genre, author }) => {
  const history = useHistory();

  return (
    <GoToLink
      onClick={() => {
        history.push(`/author/${author}`);
      }}
    >
      <div>
        <p> {author || 'Unknow'}</p>
        <small>{genre}</small>
      </div>
      <GoToIcon></GoToIcon>
    </GoToLink>
  );
};

export default AuthorLink;
