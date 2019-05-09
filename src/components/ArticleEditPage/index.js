import ArticleEditPage from './ArticleEditPage';
import {getArticleById, updateArticleById} from "../../actions/articles";
import {connect} from "react-redux";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => {
  return (
    {
      gottenArticleById: state.articles.gottenArticleById,
    }
  );
};

const mapDispatchToProps = dispatch => ({
  getArticleById: (id) => {
    getArticleById(id)(dispatch);
  },
  updateArticleById: (id, userData) => {
    updateArticleById(id,userData)(dispatch);
  }
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArticleEditPage));
