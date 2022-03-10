import React from "react";

export default function CommentCard({ comment }) {
  return (
    <div>
      <h6 className="a-commentCard__header">{comment.author} | {comment.created_at} | {comment.votes} Votes</h6>
      <p className="a-commentCard__body">{comment.body}</p>
    </div>
  );
}
