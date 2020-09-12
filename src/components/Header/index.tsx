import React from 'react';
import { ReactComponent as RandomIcon } from '../../assets/icons/random.svg';
import styled, { keyframes } from 'styled-components';
import { useDispatch } from 'react-redux';
import { onGetRandomQuote } from '../../redux/reducers/quotesSlice';

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
`;
const HeaderWrapper = () => {
  const dispatch = useDispatch();

  return (
    <Header>
      <Button
        onClick={() => {
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
