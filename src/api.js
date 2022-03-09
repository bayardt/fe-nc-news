import axios from "axios";

const baseURL = "https://nc-news-bt22.herokuapp.com/api";

export const getTrendingArticle = () => {
  return axios.get(`${baseURL}/articles?sort_by=comment_count&limit=1`).then(({ data }) => {
    return data;
  });
};

export const getArticles = () => {
  return axios.get(`${baseURL}/articles`).then(({ data }) => {
    return data;
  });
};
