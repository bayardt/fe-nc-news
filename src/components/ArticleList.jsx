import React from "react";
import ArticleCard from "./ArticleCard";

export default function ArticleList({articles}) {

  return (
    <div className="o-articleList">
       {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </div>
  );
}
