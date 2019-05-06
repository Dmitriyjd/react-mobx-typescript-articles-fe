import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ArticlesTablePagination extends PureComponent {
  renderPaginationItems = () => (
    (new Array(this.props.pagesCount).fill()).map((_, index) => (
      <li className="page-item">
        <a className="page-link" href="#">{index + 1}</a>
      </li>
    ))
  );

  render() {
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item"><a className="page-link" href="#">Previous</a></li>
          {this.renderPaginationItems()}
          <li className="page-item"><a className="page-link" href="#">Next</a></li>
        </ul>
      </nav>
    );
  }
}

ArticlesTablePagination.propTypes = {
  pagesCount: PropTypes.number.isRequired,
};

export default ArticlesTablePagination;
