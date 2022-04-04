import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../contexts/UserStatus";
import * as api from "../api";
import CommentCard from "./CommentCard";
import CommentPost from "./CommentPost";
import { useParams } from "react-router-dom";

export default function CommentList() {
  const [comments, setComments] = useState();
  const [remainingComments, setRemainingComments] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { currentUser } = useContext(UserContext);
  const [err, setErr] = useState(null);
  const { article_id } = useParams()

  const deleteCommentHandler = (e) => {
    api
      .deleteComment(e.target.id)
      .then(() => {
          setRemainingComments(comments.filter((comment) => {
            return comment.comment_id !== parseInt(e.target.id);
          }))
          setComments(remainingComments)})
      .catch((err) => setErr("Something went wrong, try again"));
  };

  useEffect(() => {
    setIsLoading(true);
    api.getArticleComments(article_id).then(({ comments }) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, [remainingComments]);

  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="m-commentList">
      <h3 className="a-commentList__header">Comments</h3>
      <CommentPost
        currentUser={currentUser}
        article_id={article_id}
        comments={comments}
        setComments={setComments}
      />
      {comments.map((comment) => {
        return (
          <>
            {err ? (
              <p>{err}</p>
            ) : (
              <>
                <CommentCard comment={comment} key={comment.comment_id} />
                {comment.author === currentUser ? (
                  <button
                    id={comment.comment_id}
                    onClick={deleteCommentHandler}
                  >
                    Delete
                  </button>
                ) : (
                  ""
                )}
              < hr />
              </>
            )}
          </>
        );
      })}
    </div>
  );
}
