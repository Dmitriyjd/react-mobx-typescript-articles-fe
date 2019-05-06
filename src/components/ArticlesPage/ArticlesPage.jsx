import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ArticlesTable from '../ArticlesTable/ArticlesTable';
import ArticlesTablePagination from '../ArticlesTablePagination/ArticlesTablePagination'
import './style.scss';

class ArticlesPage extends PureComponent {
  componentDidMount() {
    this.updateArticlesList(1, 10);
  }

  updateArticlesList = (page, count) => this.props.getArticles(page, count);

  render() {
    return (
      <div>
        <div className="articles-page__control-zone">
          <span className="control-zone__articles-label">Articles</span>
          <button className="btn btn-primary">Create</button>
        </div>
        <ArticlesTable data={this.props.articles}/>
        <div className="articles-pagination__wrapper">
          <ArticlesTablePagination pagesCount={5} />
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
};

export  default ArticlesPage;
