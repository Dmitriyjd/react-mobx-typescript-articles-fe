export default (state = { data: [], pagination: {} }, action) => {
  switch (action.type) {
    case 'GET_ARTICLES_SUCCESS':
      return {
        data: action.payload.data,
        pagination: action.payload.pagination,
      };
    case 'GET_ARTICLES_FAILED':
      return state;
    default:
      return state;
  }
};
