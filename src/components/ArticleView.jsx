import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import * as api from "../api"

export default function ArticleView({ article }) {
const { article_id } = useParams();
const [currentArticle, setCurrentArticle] = useState([])

useEffect(() => {
  api.getSingleArticle(article_id).then(({article}) => {
    setCurrentArticle(article)
}, []);
});

  return (
    <div className="m-articleView">
      <h4 className="a-articleView__topic">{currentArticle.topic}</h4>
        <h3 className="a-articleView__title">{currentArticle.title}</h3>
      <article className="a-articleView__article">{currentArticle.body}</article>
    </div>
  );
}
