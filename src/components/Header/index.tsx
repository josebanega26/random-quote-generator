import React from 'react';
import { ReactComponent as RandomIcon } from '../../assets/icons/random.svg';
import styled, { keyframes } from 'styled-components';
import { useDispatch } from 'react-redux';
import { onGetRandomQuote } from '../../redux/reducers/quotesSlice';
import { useHistory } from 'react-router-dom';

const infiniteSpinner = keyframes`
from{
  transform: rotate(0deg);
}
to{
  transform: rotate(360deg);
}`;
const Button = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 120px;
  font-family: 'Raleway', sans-serif;
  border: 0;
  outline: 0;
  font-size: 18px;
  background: transparent;
  cursor: pointer;
  svg {
    fill: #4f4f4f;
  }
  &:hover {
    svg {
      animation: ${infiniteSpinner} 1s infinite;
    }
  }
`;
const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  padding: 1rem 3rem;
  @media (max-width: 768px) {
    padding: 1rem 0;
  }
`;
const HeaderWrapper = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <Header>
      <Button
        onClick={() => {
          history.push('/');
          dispatch(onGetRandomQuote());
        }}
      >
        random
        <RandomIcon></RandomIcon>
      </Button>
    </Header>
  );
};

export default HeaderWrapper;
