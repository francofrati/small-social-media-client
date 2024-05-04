import { useState } from 'react';
import CustomModal from '../../../components/customModal/customModal';
import useFeedStore from '../../../stores/feedStore';
import PostComment from '../../../components/post/postComment';
import PostHeader from '../../../components/post/postHeader';
import PostContent from '../../../components/post/postContent';

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
      <div className="max-w-4xl">
        <PostHeader
          profileImg={post?.profileImg as string}
          username={post?.username as string}
        />
        <PostContent
          content={post?.content as string}
          imageUrl={post?.imageUrl as string}
        />
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
            placeholder="Add comment ..."
            className="w-full rounded shadow-sm bg-[#4f4f4f] px-2 py-1"
            value={newComment}
            onChange={(e) => {
              setNewComment(e.target.value);
            }}
          />
        </form>
        {postComments && postComments.length ? (
          postComments.map((comment) => {
            return (
              <PostComment
                comment={comment.content}
                username={comment.username}
                key={comment.commentId}
              />
            );
          })
        ) : (
          <></>
        )}
      </div>
    </CustomModal>
  );
}

export default PostDetailModal;
