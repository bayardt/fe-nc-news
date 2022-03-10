import React, { useState } from 'react'
import * as api from '../api'

export default function CommentPost({currentUser}, article_id) {
const [newComment, setNewComment] = useState();


const commentHandler = () => {
api.postArticleComment()
}

  return (
    <div>
      <form onSubmit={commentHandler}>
        <input type="text" value={newComment}></input>
        <button type="submit">{currentUser}</button>
      </form>
    </div>
  );
}
