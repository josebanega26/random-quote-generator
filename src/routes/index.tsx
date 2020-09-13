import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import AuthorPage from '../pages/AuthorPage';
import styled from 'styled-components';
import Spinner from '../components/Spinner';
import { RootState } from '../redux/reducers/reducers';
import { useSelector } from 'react-redux';
const Layout = styled.section`
  width: 55%;
  margin: 0 auto;
  flex-grow: 1;
  @media (max-width: 768px) {
    width: 95%;
  }
`;
const AppRoutes = () => {
  const { loading } = useSelector((state: RootState) => state.ui);
  return (
    <Layout>
      {loading && <Spinner></Spinner>}
      <Switch>
        <Route exact path='/' component={Landing}></Route>
        <Route path='/author/:id' component={AuthorPage}></Route>
      </Switch>
    </Layout>
  );
};

export default AppRoutes;
