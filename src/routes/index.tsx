import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import AuthorPage from '../pages/AuthorPage';

const AppRoutes = () => {
  return (
    <div style={{ flexGrow: 1 }}>
      <Switch>
        <Route path='/' component={Landing}></Route>
        <Route path='/:id' component={AuthorPage}></Route>
      </Switch>
    </div>
  );
};

export default AppRoutes;
