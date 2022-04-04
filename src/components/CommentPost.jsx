import React, { useState } from "react";
import * as api from "../api";

export default function CommentPost({
  currentUser,
  article_id,
  comments,
  setComments,
}) {
  const [newComment, setNewComment] = useState("");
  const [err, setErr] = useState(null);

  const commentHandler = (e) => {
    e.preventDefault();
    if (!newComment) return setErr("You must enter a comment! Please refresh and try again.");
    e.target.commentField.value = "";
    api
      .postArticleComment(article_id, currentUser, newComment)
      .then(({ comment }) => {
        setComments([comment, ...comments]);
      })
      .catch((err) => {
        setErr("Something went wrong, try again");
      });
  };

  return (
    <div>
      {err ? (
        <p>{err}</p>
      ) : (
        <form onSubmit={commentHandler}>
          <input
            id="commentField"
            type="text"
            name="pendingComment"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button type="submit">Submit Comment</button>
        </form>
      )}
    </div>
  );
}
