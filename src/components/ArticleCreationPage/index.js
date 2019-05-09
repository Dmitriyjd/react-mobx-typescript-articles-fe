import ArticleCreationPage from './ArticleCreationPage';
import { connect } from 'react-redux';
import {createArticle} from "../../actions/articles";

const mapStateToProps = state => (
  {
    article: state.articles.data,
  }
);

const mapDispatchToProps = dispatch => ({
  createArticle: (userData) => {
    createArticle(userData)(dispatch);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleCreationPage);
