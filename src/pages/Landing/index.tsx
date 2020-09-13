import React from 'react';
import Quote from '../../components/Quote';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import AuthorLink from '../../components/AuthorLink';
import { onGetRandomQuote } from '../../redux/reducers/quotesSlice';
import { RootState } from '../../redux/reducers/reducers';

const Landing = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const LandingWrapper = () => {
  const { loading } = useSelector((state: RootState) => state.ui);
  const { currentQuote } = useSelector((state: RootState) => state.quotes);

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(onGetRandomQuote());
  }, [dispatch]);

  return (
    <Landing>
      {currentQuote && !loading ? (
        <React.Fragment>
          <Quote quote={currentQuote?.quoteText}></Quote>
          <AuthorLink
            author={currentQuote!.quoteAuthor}
            genre={currentQuote!.quoteGenre}
          ></AuthorLink>
        </React.Fragment>
      ) : null}
    </Landing>
  );
};

export default LandingWrapper;
