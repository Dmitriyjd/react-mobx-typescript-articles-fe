import React from 'react';
import ArticlesPage from './components/ArticlesPage';
import ArticleCreationPage from './components/ArticleCreationPage';
import { BrowserRouter as Router, Route } from "react-router-dom";


const Routes = () => {
  return (
    <Router>
      <Route exact path="/articles" component = { ArticlesPage }>
        <Route exact path ="/create" component = { ArticleCreationPage }/>
      </Route>
    </Router>
  )
};

export default Routes;
