import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ArticlesTable from '../ArticlesTable/ArticlesTable';
import ArticlesTablePagination from '../ArticlesTablePagination/ArticlesTablePagination'
import './style.scss';

class ArticlesPage extends PureComponent {
  componentDidMount() {
    this.props.getArticles(1, 10);
  }

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
        <ArticlesTable data={this.props.articles}/>
        <div className="articles-pagination__wrapper">
          <ArticlesTablePagination pagesCount={this.props.pageCount} />
        </div>
      </div>
    );
  }
}

ArticlesPage.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      updated_at: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
    })
  ),
  getArticles: PropTypes.func.isRequired,
  pageCount: PropTypes.number.isRequired,
};

export  default ArticlesPage;
