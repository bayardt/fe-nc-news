import React, { useState } from "react";
import * as api from "../api";

export default function CommentCard({ comment }) {
  const [currentScore, setCurrentScore] = useState(comment.votes);
  const [votedUp, setVotedUp] = useState(false);
  const [votedDown, setVotedDown] = useState(false);
  const [err, setErr] = useState(null);

  const commentDate = new Date(comment.created_at);
  const voteInc = () => {
    if (votedUp) return;
    setVotedUp(true);
    if (votedDown) setVotedUp(false);
    setVotedDown(false);
    setCurrentScore((currScore) => currScore + 1);
    api.patchCommentScore(comment.comment_id, 1).catch((err) => {
      setCurrentScore((currScore) => currScore - 1);
      setErr("Something went wrong, try again.");
    });
  };

  const voteDec = () => {
    if (votedDown) return;
    setVotedDown(true);
    if (votedUp) setVotedDown(false);
    setVotedUp(false)
    setCurrentScore((currScore) => currScore - 1);
    api.patchCommentScore(comment.comment_id, -1).catch((err) => {
      setCurrentScore((currScore) => currScore + 1);
      setErr("Something went wrong, try again.");
    });
  };

  return (
    <div key={comment.comment_id}>
      <h6 className="a-commentCard__header">
        {comment.author} | {commentDate.toDateString()} <br />
        {err ? (
          <p>{err}</p>
        ) : (
          <p>
            <button onClick={voteDec}>-</button>
            {currentScore} votes
            <button onClick={voteInc}>+</button>
          </p>
        )}
      </h6>
      <p className="a-commentCard__body">{comment.body}</p>
      <hr />
    </div>
  );
}
