import { connect } from 'react-redux';
import ArticlesTablePagination from './ArticlesTablePagination';
import { getArticles } from "../../actions/articles";

const mapStateToProps = state => {
  return (
    {
      pagination: state.articles.pagination,
    }
  );
};

const mapDispatchToProps = dispatch => ({
  getArticles: (page, count) => {
    getArticles(page, count)(dispatch);
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesTablePagination) ;
