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
    api
      .getArticles(topic_slug, sortCriteria, sortOrder)
      .then(({ articles }) => {
        setArticles(articles);
        setIsLoading(false);
      });
  }, [topic_slug, sortCriteria, sortOrder]);

  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="o-articleList">
      <div className="m-articleList__Sorter">
        <select value={sortCriteria} onChange={(e) => setSortCriteria(e.target.value)}>
          <option value="created_at">Most Recent</option>
          <option value="comment_count">Most Commented</option>
          <option value="votes">Most Voted</option>
        </select>
        <select
          value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <div className="m-articleList__List">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </div>
    </div>
  );
}
