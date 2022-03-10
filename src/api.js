import axios from "axios";

const baseURL = "https://nc-news-bt22.herokuapp.com/api";

export const getTrendingArticle = () => {
  return axios.get(`${baseURL}/articles?sort_by=comment_count&limit=1`).then(({ data }) => {
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
  });
};

export const getTopics = () => {
  return axios.get(`${baseURL}/topics`).then(({ data }) => {
    return data;
  });
};

export const getUserByUsername = (authorUsername) => {
  return axios.get(`${baseURL}/users?username=${authorUsername}`).then(({ data }) => {
    return data;
  });
}