import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.scss';

class ArticleEditPage extends PureComponent {
  render() {
    return (
      <form className="article-edit-page">
        <span className="article-edit-page__title">
          Edit Article
        </span>
        <hr className="article-edit-page__separator"/>
        <div className="article-edit-page__title-group">
          <span className="title-group__label">
            Title:
          </span>
          <input
            className="title-group__input"
            placeholder="Enter title (required)"
            required
          >
            {this.props.title}
          </input>
        </div>
        <div className="article-edit-page__body-group">
          <span className="body-group__label">
            Body:
          </span>
          <textarea
            className="body-group__input"
            placeholder="Enter article`s body(required)"
            rows = "15"
            required
          >
            {this.props.body}
          </textarea>
        </div>
        <div className="article-edit-page__submit-group">
          <button
            type="submit"
            className="btn btn-success submit-group__submit"
          >
            Update
          </button>
          <Link
            to="/articles"
            className="btn btn-secondary"
          >
            Cancel
          </Link>
        </div>
      </form>
    )
  }
}

ArticleEditPage.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string,
};

export default ArticleEditPage;
