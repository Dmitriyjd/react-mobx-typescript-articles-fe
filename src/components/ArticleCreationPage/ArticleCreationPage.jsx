import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

class ArticleCreationPage extends PureComponent {
  state = {
    title: "",
    body: "",
  };

  constructor(props) {
    super(props);
    this.articleCreationTitle = React.createRef();
    this.articleCreationBody = React.createRef();

  }

  onTitleChange = ((event) => {
    this.setState({ title: event.target.value });
  });

  onBodyChange = ((event) => {
    this.setState({ body: event.target.value });
  });

  onSubmit = ((event) => {
    event.preventDefault();
    this.props.createArticle(this.state);
    this.articleCreationTitle.current.value = "";
    this.articleCreationBody.current.value = "";
});

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
            onChange={this.onTitleChange}
            name = "title"
            ref={this.articleCreationTitle}
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
            onChange={this.onBodyChange}
            name = "body"
            ref={this.articleCreationBody}
            className="body-group__input"
            placeholder="Enter article`s body"
            rows = "15"
          />
        </div>
        <div className="article-creation-page__submit-group">
          <button
            onClick={this.onSubmit}
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
