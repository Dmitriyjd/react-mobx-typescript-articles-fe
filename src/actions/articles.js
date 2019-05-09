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
    const body =  userData ;
    const response = await axios.post(url, body );

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
