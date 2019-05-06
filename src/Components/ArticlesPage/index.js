import { connect } from 'react-redux'
import ArticlesPage from './ArticlesPage';
import { getArticles } from "../../actionCreators/articles";

const mapStateToProps = (state) =>{
  return{
    articles: state.articles,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getArticles: (page,count) => {
      getArticles(page, count)(dispatch);
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesPage) ;
