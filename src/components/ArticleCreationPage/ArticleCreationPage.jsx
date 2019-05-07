import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

class ArticleCreationPage extends PureComponent {
  render() {
    return (
      <form className="article-creation-page">
        <span className="article-creation-page__title">
          Create Article
        </span>
        <hr className="article-creation-page__separator"/>
        <div className="article-creation-page__title-group">
          <span className="title-group__label">
            Title:
          </span>
          <input
            className="title-group__input"
            placeholder="Enter title (required)"
            required
          />
        </div>
        <div className="article-creation-page__body-group">
          <span className="body-group__label">
            Body:
          </span>
          <textarea
            className="body-group__input"
            placeholder="Enter article`s body"
            rows = "15"
          />
        </div>
        <div className="article-creation-page__submit-group">
          <button
            type="submit"
            className="btn btn-success submit-group__submit"
          >
            Create
          </button>
          <Link
            to="/articles?page=1&limit=10"
            className="btn btn-secondary"
          >
            Cancel
          </Link>
        </div>
      </form>
    )
  }
}

export default ArticleCreationPage;
