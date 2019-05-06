import React from 'react';
import ArticlesPage from './components/ArticlesPage'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";


const Routes = () => {
  return (
    <Router>
      <Route exact path="/articles" component = { ArticlesPage }/>
    </Router>
  )
};

export default Routes;
