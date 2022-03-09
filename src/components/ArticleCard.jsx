import React from 'react'

export default function ArticleCard({article}) {
  return (
    <div className="m-articleCard">
      <h3 className="a-articleCard__topic">{article.topic}</h3>
      <h2 className="a-articleCard__title">{article.title}</h2>
      <article className='a-articleCard__article'>{article.body}</article>
    </div>
  );
}
