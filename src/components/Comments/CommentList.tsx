import React from 'react';
import CommentItem from './CommentItem';

export default function CommentList() {
  return (
    <ul className="comment-list">
      <CommentItem/>
      <CommentItem/>
      <CommentItem/>
    </ul>
  );
}
