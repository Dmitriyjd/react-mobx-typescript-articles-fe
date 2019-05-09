import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.scss';

class ArticleEditPage extends PureComponent {
  state = {
    title: this.props.gottenArticleById.title,
    body: this.props.gottenArticleById.body,
  };

  componentDidMount() {
    const locationItems = this.props.location.pathname.split('/');
    const id = locationItems[locationItems.length - 2];
    this.props.getArticleById(id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.gottenArticleById.title !== this.props.gottenArticleById.title) {
      this.setState({ title: nextProps.gottenArticleById.title });
    }

    if (nextProps.gottenArticleById.body !== this.props.gottenArticleById.body) {
      this.setState({ body: nextProps.gottenArticleById.body });
    }
  }

  onChange = ((event) => {
    this.setState({ [event.target.name]: event.target.value });
  });

  onSubmit = ((event) => {
    event.preventDefault();
    const locationItems = this.props.location.pathname.split('/');
    const id = locationItems[locationItems.length - 2];
    this.props.updateArticleById(id, this.state)
  });

  render() {
    return (
      <form
        className="article-edit-page"
        onSubmit={this.onSubmit}
      >
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
            name="title"
            required
            defaultValue={this.props.gottenArticleById.title}
            onChange={this.onChange}
          />
        </div>
        <div className="article-edit-page__body-group">
          <span className="body-group__label">
            Body:
          </span>
          <input
            className="body-group__input"
            placeholder="Enter article`s body(required)"
            name="body"
            required
            onChange={this.onChange}
            defaultValue={this.props.gottenArticleById.body}
          >
          </input>
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
  gottenArticleById: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string,
  }),
  getArticleById: PropTypes.func.isRequired,
  updateArticleById: PropTypes.func.isRequired,
};

export default ArticleEditPage;
