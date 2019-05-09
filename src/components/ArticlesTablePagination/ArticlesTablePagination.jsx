import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ArticlesTablePagination extends PureComponent {
  hasNextPage() {
    return this.props.pagination.page < this.props.pagination.pageCount;
  }

  hasPreviousPage() {
    return this.props.pagination.page > 1;
  }

  getPreviousPageIndex = () => {
    if(this.hasPreviousPage()){
      return this.props.pagination.page - 1;
    }
    return this.props.pagination.page;
  };

  getNextPageIndex = () => {
    if(this.hasNextPage()){
      return this.props.pagination.page + 1;
    }
    return this.props.pagination.page;
  };

  renderPaginationItems = () => (
    (new Array(this.props.pagination.pageCount).fill()).map((_, index) => (
      <li key={index} className="page-item">
        <a className="page-link" href={`/articles?page=${index+1}&limit=10`}>{index + 1}</a>
      </li>
    ))
  );

  render() {
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li
            className="page-item"
          >
            <a
              className="page-link"
              href={`/articles?page=${this.getPreviousPageIndex()}&limit=10`}
            >
              Previous
            </a>
          </li>
          {this.renderPaginationItems()}
          <li
            className="page-item"
          >
            <a
              className="page-link"
              href={`/articles?page=${this.getNextPageIndex()}&limit=10`}
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

ArticlesTablePagination.propTypes = {
  pagination: PropTypes.object.isRequired,
};

export default ArticlesTablePagination;
