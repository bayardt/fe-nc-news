import axios from "axios";

const baseURL = "https://nc-news-bt22.herokuapp.com/api";

export const getTrendingArticle = () => {
  return axios
    .get(`${baseURL}/articles?sort_by=comment_count&limit=1`)
    .then(({ data }) => {
      return data;
    });
};

export const getArticles = (topic) => {
  const topicQuery = topic ? `?topic=${topic}` : "";
  return axios.get(`${baseURL}/articles${topicQuery}`).then(({ data }) => {
    return data;
  });
};

export const getSingleArticle = (article_id) => {
  return axios.get(`${baseURL}/articles/${article_id}`).then(({ data }) => {
    return data;
  })
};

export const getTopics = () => {
  return axios.get(`${baseURL}/topics`).then(({ data }) => {
    return data;
  });
};

export const getUserByUsername = (authorUsername) => {
  return axios
    .get(`${baseURL}/users?username=${authorUsername}`)
    .then(({ data }) => {
      return data;
    });
};

export const getArticleComments = (article_id) => {
  return axios
    .get(`${baseURL}/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data;
    });
};

export const patchArticleScore = (article_id, updatedScore) => {
  return axios
    .patch(`${baseURL}/articles/${article_id}`, { inc_votes: updatedScore })
    .then(({ data }) => {
      return data;
    });
};

export const postArticleComment = (article_id, currentUser, commentBody) => {
  return axios
    .post(`${baseURL}/articles/${article_id}/comments`, {
      username: currentUser,
      body: commentBody,
    })
    .then(({ data }) => {
      return data;
    });
};

export const deleteComment = (commentId) => {
  return axios
    .delete(`${baseURL}/comments/${commentId}`)
    .then(({ data }) => {
      return data;
    });
}