import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/reducers/reducers';
import Quote from '../../components/Quote';
import { onGetQuotesByAuthor } from '../../redux/reducers/quotesSlice';
import styled from 'styled-components';

const Title = styled.h3`
  font-family: 'Raleway', sans-serif;
  margin-top: 1rem;
  font-size: 36px;
  line-height: 42px;
  color: #333333;
`;
interface AuthorRouterProps {
  id: string;
}

interface AuthorPageProps extends RouteComponentProps<AuthorRouterProps> {}

const AuthorPage: React.FC<AuthorPageProps> = ({ match }) => {
  const dispatch = useDispatch();
  const quotesByAuthor = useSelector((state: RootState) => state.quotes?.quotesByAuthor);
  const { params } = match;

  React.useEffect(() => {
    console.log(params.id);
    dispatch(onGetQuotesByAuthor(params.id));
  }, [params.id, dispatch]);

  return (
    <div>
      <Title>{params.id}</Title>
      {quotesByAuthor?.quotes.map(({ _id, quoteText }) => (
        <Quote key={_id} quote={quoteText}></Quote>
      ))}
    </div>
  );
};

export default AuthorPage;
