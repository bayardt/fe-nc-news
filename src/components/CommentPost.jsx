import React, { useState } from "react";
import * as api from "../api";

export default function CommentPost({ currentUser, article_id}) {
  const [newComment, setNewComment] = useState();

  const commentHandler = (e) => {
      e.preventDefault();
    api.postArticleComment(article_id, currentUser, newComment).then((res) => console.log(res))
  };

  return (
    <div>
      <form onSubmit={commentHandler}>
        <input type="text" name="pendingComment" value={newComment} onChange={(e) => setNewComment(e.target.value)}/>
        <button type="submit">Submit Comment</button>
      </form>
    </div>
  );
}
