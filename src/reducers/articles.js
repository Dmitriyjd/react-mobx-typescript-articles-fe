export default (state = { articlesList: [], article: {}, pagination: {} }, action) => {
  switch (action.type) {
    case 'GET_ARTICLES_SUCCESS':
      return {
        articlesList: action.payload.data,
        pagination: action.payload.pagination,
      };
    case 'GET_ARTICLES_FAILED':
      return state;
    case 'CREATE_ARTICLE_SUCCESS':
      return {
        article: action.payload.data,
      };
    case 'CREATE_ARTICLE_FAILED':
      return state;
    default:
      return state;
  }
};
