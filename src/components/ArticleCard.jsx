import React from 'react'
import { Link } from 'react-router-dom';

export default function ArticleCard({article}) {
  return (
    <div className="m-articleCard">
      <h4 className="a-articleCard__topic">{article.topic}</h4>
      <Link to={`/article/${article.article_id}`}>
        <h3 className="a-articleCard__title">{article.title}</h3>
      </Link>
      <article className="a-articleCard__article">{article.body}</article>
    </div>
  );
}
