export default (state = [], action) => {
  switch (action.type) {
    case 'GET_ARTICLES_SUCCESS':
      return action.payload.data;
    case 'GET_ARTICLES_FAILED':
      return [];
    default:
      return state;
  }
};
