export default (state = {
  articlesList: [],
  article: {},
  gottenArticleById: {
    title: '',
    body: '',
  },
  updatedArticleById: {
    title: '',
    body: '',
  },
  pagination: {
    pageCount: 0,
    count: 0,
    page: 0,
    limit: 10
  },
}, action) => {
  switch (action.type) {
    case 'GET_ARTICLES_SUCCESS':
      return {
        ...state,
        articlesList: action.payload.data,
        pagination: {
          pageCount: +action.payload.pagination.pageCount,
          count: +action.payload.pagination.count,
          page: +action.payload.pagination.page,
          limit: +action.payload.pagination.limit,
        },
      };
    case 'GET_ARTICLES_FAILED':
      return state;
    case 'CREATE_ARTICLE_SUCCESS':
      return {
        ...state,
        article: action.payload.data,
      };
    case 'GET_ARTICLE_SUCCESS':
      return {
        ...state,
        gottenArticleById: action.payload,
      };
    case 'CREATE_ARTICLE_FAILED':
      return state;
    case 'UPDATE_ARTICLE_SUCCESS':
      return {
        ...state,
        updatedArticleById: action.payload,
      };
    default:
      return state;
  }
};
