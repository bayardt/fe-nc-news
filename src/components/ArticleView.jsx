import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as api from "../api";

export default function ArticleView({ article }) {
  const [currentArticle, setCurrentArticle] = useState([]);
  const [currentAuthor, setCurrentAuthor] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  const getAuthorName = (username) => {
    api.getUserByUsername(username).then(({users}) => {
      setCurrentAuthor(users[0].name)
    })
  }

  useEffect(() => {
    setIsLoading(true);
    api.getSingleArticle(article_id).then(({ article }) => {
      setCurrentArticle(article);
      getAuthorName(article.author);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="m-articleView">
      <h4 className="a-articleView__topic">{currentArticle.topic}</h4>
      <h3 className="a-articleView__title">{currentArticle.title}</h3>
      <h5>{currentAuthor}</h5>
      <article className="a-articleView__article">
        {currentArticle.body}
      </article>
    </div>
  );
}
