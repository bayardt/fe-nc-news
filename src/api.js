import axios from "axios";

const baseURL = "https://nc-news-bt22.herokuapp.com/api";

export const getArticles = () => {
  return axios.get(`${baseURL}/articles`).then(({ data }) => {
    return data;
  });
};
