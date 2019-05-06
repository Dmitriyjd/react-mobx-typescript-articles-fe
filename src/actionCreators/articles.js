import axios from 'axios';

// getArticlesPending
export const getArticles = (page, count) => async dispatch => {
  try {
    const url = `http://localhost:8080/api/articles`;
    const query = {
      page, count };

    const response = await axios.get(url, { params: query, crossdomain: true });
    const responseBody = response.data;

    dispatch(getArticlesSuccess(responseBody));
  } catch (error) {
    console.error(error);
    dispatch(getArticlesFailed());
  }
};

export const getArticlesSuccess = articlesData => ({
  type: 'GET_ARTICLES_SUCCESS',
  payload: articlesData,
});

export const getArticlesFailed = () => ({ type: 'GET_ARTICLES_FAILED' });
