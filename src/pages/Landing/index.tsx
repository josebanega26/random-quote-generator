import React from 'react';
import Quote from '../../components/Quote';
import styled from 'styled-components';
import { mockQuote } from '../../utils/mockResponse';
// import quotesSaga from '../../redux/sideeffects';
// import { useDispatch } from 'react-redux';
import AuthorLink from '../../components/AuthorLink';
const Landing = styled.section`
  width: 55%;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 95%;
  }
`;

const LandingWrapper = () => {
  // const dispatch = useDispatch();
  // React.useEffect(() => {

  // }, []);
  const text = mockQuote;
  return (
    <Landing>
      <Quote quote={text}></Quote>
      <AuthorLink></AuthorLink>
    </Landing>
  );
};

export default LandingWrapper;
