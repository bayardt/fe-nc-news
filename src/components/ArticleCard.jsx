import React from 'react'
import { Link } from 'react-router-dom';

export default function ArticleCard({ article }) {
  return (
    <div className="m-articleCard">
      <small className="a-articleCard__topic">{article.topic}</small><br/>
      <Link to={`/article/${article.article_id}`}>
        <strong className="a-articleCard__title">{article.title}</strong>
        <br />
      </Link>
      <article className="a-articleCard__article">{article.body}</article>
      <br />
      <hr />
    </div>
  );
}
