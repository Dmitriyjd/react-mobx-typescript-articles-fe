import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import ArticlesTable from './ArticlesTable';
import { getArticles } from "../../actions/articles";

const mapStateToProps = state => {
  return ({ articlesList: state.articles.articlesList });
};

const mapDispatchToProps = dispatch => ({
  getArticles: (page, count) => {
    getArticles(page, count)(dispatch);
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArticlesTable));