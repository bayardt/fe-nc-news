import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import * as api from '../api'

export default function ArticleList() {
  const [articles, setArticles] = useState([""]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    api.getArticles().then(({ articles }) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="o-articleList">
      <div className="m-articleList">
        {articles.map((article) => {
          return (
            <ArticleCard
              key={article.article_id}
              article={article}Í
            />
          );
        })}
      </div>
    </div>
  );
}
