import React from "react";

export default function ArticleCard({ article }) {
  return (
    <div className="m-articleCard">
      <h4 className="a-articleCard__topic">{article.topic}</h4>
      <h3 className="a-articleCard__title">{article.title}</h3>
      <article className="a-articleCard__article">{article.body}</article>
    </div>
  );
}
