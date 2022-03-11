import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../contexts/UserStatus";
import * as api from "../api";
import CommentCard from "./CommentCard";
import CommentPost from "./CommentPost";

export default function CommentList({ article_id }) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { currentUser, setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    setIsLoading(true);
    api.getArticleComments(article_id).then(({ comments }) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="m-commentList">
      <h3 className="a-commentList__header">Comments</h3>
      <CommentPost currentUser={currentUser} article_id={article_id} comments={comments} setComments={setComments}/>
      {comments.map((comment) => {
        return <CommentCard comment={comment} key={comment.comment_id} />;
      })}
    </div>
  );
}
