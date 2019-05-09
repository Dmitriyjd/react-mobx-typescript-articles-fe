import { connect } from 'react-redux';
import ArticlesPage from './ArticlesPage';
import { getArticles } from "../../actions/articles";

const mapStateToProps = state => (
  {
    articlesList: state.articles.articlesList,
    pageCount: state.articles.pagination.pageCount,
  }
);

const mapDispatchToProps = dispatch => ({
  getArticles: (page, count) => {
    getArticles(page, count)(dispatch);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesPage) ;
