import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import * as api from "../api";
import CommentList from "./CommentList";

export default function ArticleView() {
  const [currentArticle, setCurrentArticle] = useState([]);
  const [currentAuthor, setCurrentAuthor] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();
  const [currentScore, setCurrentScore] = useState([]);
  const [err, setErr] = useState(null);

  const getAuthorName = (username) => {
    api.getUserByUsername(username).then(({ users }) => {
      setCurrentAuthor(users[0].name);
    });
  };

  const voteInc = () => {
    setCurrentScore((currScore) => currScore + 1);
    api.patchArticleScore(article_id, 1).catch((err) => {
      setCurrentScore((currScore) => currScore - 1);
      setErr("Something went wrong, try again.");
    });
  };

  const voteDec = () => {
    setCurrentScore((currScore) => currScore - 1);
    api.patchArticleScore(article_id, -1).catch((err) => {
      setCurrentScore((currScore) => currScore + 1);
      setErr("Something went wrong, try again.");
    });
  };

  useEffect(() => {
    setIsLoading(true);
    api
      .getSingleArticle(article_id)
      .then(({ article }) => {
        if (!article) return;
        setCurrentArticle(article);
        getAuthorName(article.author);
        setCurrentScore(article.votes);
        setIsLoading(false);
      })
      .catch((error) => {
        setErr(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) return <p> Loading...</p>;
  if (err) {
  return (
    <section>
      <h3>{err.message}</h3>
    </section>
  )};
  return (
    <article>
      <sup className="a-articleView__topic">{currentArticle.topic}</sup>
      <h3 className="a-articleView__title">{currentArticle.title}</h3>
      <h5>{currentAuthor}</h5>
      <article className="a-articleView__article">
        {currentArticle.body}
      </article>
      <section>
        <p className="m-articleVotes">
          <button className="a-articleVotes__button" onClick={voteDec}>
            -
          </button>
          {currentScore} votes
          <button className="a-articleVotes__button" onClick={voteInc}>
            +
          </button>
        </p>
      </section>
      <hr />
      <div>
        <article>
          <CommentList key="CommentList" article_id={article_id} />
        </article>
      </div>
    </article>
  );
}
