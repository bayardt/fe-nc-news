import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import * as api from "../api";

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [sortCriteria, setSortCriteria] = useState('created_at');
  const [sortOrder, setSortOrder] = useState('desc');
  const [isLoading, setIsLoading] = useState(true);
  const { topic_slug } = useParams();

  useEffect(() => {
    setIsLoading(true);
    api.getArticles(topic_slug).then(({ articles }) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, [topic_slug]);

  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="o-articleList">
      <div className="m-articleList">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </div>
    </div>
  );
}
