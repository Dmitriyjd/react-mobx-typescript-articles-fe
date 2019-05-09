import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import ArticlesTable from '../ArticlesTable';
import ArticlesTablePagination from '../ArticlesTablePagination'
import './style.scss';

class ArticlesPage extends PureComponent {
  render() {
    return (
      <div>
        <div className="articles-page__control-zone">
          <span className="control-zone__articles-label">Articles</span>
          <Link
            className="btn btn-primary"
            to="/articles/create"
          >
            Create
          </Link>
        </div>
        <ArticlesTable />
        <div className="articles-pagination__wrapper">
          <ArticlesTablePagination />
        </div>
      </div>
    );
  }
}

export default ArticlesPage;
