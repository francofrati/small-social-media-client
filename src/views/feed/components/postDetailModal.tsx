import { useEffect, useState } from 'react';
import CustomModal from '../../../components/customModal/customModal';
import useFeedStore from '../../../stores/feedStore';
import { Post } from '../../../types';

function PostDetailModal({
  postId,
  handleClose,
}: {
  postId: number | string;
  handleClose: () => void;
}) {
  const feed = useFeedStore((state) => state.feed);
  const post = feed.find((post) => post.postId === postId);
  const postComments = useFeedStore((state) => state.getPostComments)(
    postId as number
  );
  const addComment = useFeedStore((state) => state.addComment);

  const [newComment, setNewComment] = useState<string>('');
  return (
    <CustomModal handleClose={handleClose}>
      <form
        onSubmit={async (e) => {
          try {
            e.preventDefault();
            await addComment(postId as number, newComment);
            setNewComment('');
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <input
          type="text"
          placeholder="Add comment"
          value={newComment}
          onChange={(e) => {
            setNewComment(e.target.value);
          }}
        />
      </form>
      {postComments && postComments.length ? (
        postComments.map((comment) => {
          return (
            <span className="flex items-center justify-start">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={comment.profileImg}
              />
              <span>{comment.username}</span>
              <p>{comment.content}</p>
            </span>
          );
        })
      ) : (
        <></>
      )}
    </CustomModal>
  );
}

export default PostDetailModal;
