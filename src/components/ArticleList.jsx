import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import * as api from "../api";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic_slug } = useParams();
  const [err, setErr] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    api
      .getArticles(topic_slug)
      .then(({ articles }) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((error) => {
        setErr(error);
        setIsLoading(false);
      });
  }, [topic_slug]);

  if (isLoading) return <p>Loading...</p>;
  if (err) return <section><h3>{err.message}</h3></section>;
  return (
    <section>
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </section>
  );
}
