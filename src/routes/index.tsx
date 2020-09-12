import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import AuthorPage from '../pages/AuthorPage';
import styled from 'styled-components';

const Layout = styled.section`
  width: 55%;
  margin: 0 auto;
  flex-grow: 1;
  @media (max-width: 768px) {
    width: 95%;
  }
`;
const AppRoutes = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path='/' component={Landing}></Route>
        <Route path='/author/:id' component={AuthorPage}></Route>
      </Switch>
    </Layout>
  );
};

export default AppRoutes;
