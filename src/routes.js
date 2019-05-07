import React from 'react';
import ArticlesPage from './components/ArticlesPage';
import ArticleCreationPage from './components/ArticleCreationPage';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import ArticleEditPage from "./components/ArticleEditPage";


const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path ="/articles" component = { ArticlesPage }/>
        <Route exact path ="/articles/create" component = { ArticleCreationPage }/>
        <Route exact path ="/articles/:id/edit" component={ ArticleEditPage}/>

        <Redirect to="/articles?page=1&limit=10"/>
      </Switch>
    </Router>
  )
};

export default Routes;
