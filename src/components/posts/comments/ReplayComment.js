import React from "react";
import Comment from "./comment";

const ReplayComment = ({ comments, parentCommentId, onReply }) => {
  return comments.map((comment) => {
    return (
      parentCommentId === comment.responseTo && (
        <div className="ml-5  rounded-lg" key={comment._id}>
          <Comment comment={comment} onReply={onReply} />
          <ReplayComment
            comments={comments}
            parentCommentId={comment._id}
            onReply={onReply}
          />
        </div>
      )
    );
  });
};

export default ReplayComment;
