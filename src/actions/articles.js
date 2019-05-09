import axios from 'axios';

export const getArticles = (page, limit) => async dispatch => {
  try {
    const url = `http://localhost:8080/api/articles`;
    const query = { page, limit };
    const response = await axios.get(url, { params: query });
    dispatch({
      type: 'GET_ARTICLES_SUCCESS',
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'GET_ARTICLES_FAILED'
    });
  }
};

export const createArticle = (userData) => async dispatch => {
  try {
    const url = `http://localhost:8080/api/articles`;
    const response = await axios.post(url, userData);

    dispatch({
      type: 'CREATE_ARTICLE_SUCCESS',
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'CREATE_ARTICLE_FAILED'
    });
  }
};

export const getArticleById = (id) => async dispatch => {
  try {
    const url = `http://localhost:8080/api/articles/${id}`;
    const response = await axios.get(url);

    dispatch({
      type: 'GET_ARTICLE_SUCCESS',
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'GET_ARTICLE_FAILED'
    });
  }
};

export const updateArticleById = (id, userData) => async dispatch => {
  try {
    const url = `http://localhost:8080/api/articles/${id}`;
    const response = await axios.put(url, userData);

    dispatch({
      type: 'UPDATE_ARTICLE_SUCCESS',
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'UPDATE_ARTICLE_FAILED'
    })
  }
};
