import React from 'react';
import { ReactComponent as GoToIcon } from '../../assets/icons/goTo.svg';
import styled from 'styled-components';

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
  color: #f2f2f2;
  fill: #f2f2f2;
  outline: 0;
  background: #333333;
`;
const AuthorLink = () => {
  return (
    <GoToLink>
      <div>
        <div>Author</div>
        <div>genre</div>
      </div>
      <GoToIcon></GoToIcon>
    </GoToLink>
  );
};

export default AuthorLink;
