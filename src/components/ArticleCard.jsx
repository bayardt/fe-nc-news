import React from "react";
import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  return (
    <section>
      <aside>
        <sup className="a-articleCard__topic">{article.topic}</sup>
        <Link to={`/article/${article.article_id}`}>
          <h3 className="a-articleCard__title">{article.title}</h3>
        </Link>
        <p className="a-articleCard__article">{article.body}</p>
      </aside>
    </section>
  );
}
