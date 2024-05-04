interface PostCommentProps {
  username: string;
  comment: string;
}

function PostComment({ comment, username }: PostCommentProps) {
  return (
    <p>
      <b>{username} </b>
      {comment}
    </p>
  );
}

export default PostComment;
