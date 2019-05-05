import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';


const Routes = () => {
  return (
    <Switch>
      <Route exact path="/articles" component = { ArticlesPage }/>

      <Redirect to="/articles" />
    </Switch>
  )
};

export default Routes;
