import { FaHeart } from 'react-icons/fa';
import { IsLikedByUser, PostId, Likes } from '../../types';
import useFeedStore from '../../stores/feedStore';

interface PostLikeProps {
  postId: PostId;
  isLikedByUser: IsLikedByUser;
  likes: Likes;
}

function PostLike({ postId, isLikedByUser, likes }: PostLikeProps) {
  const likePost = useFeedStore((state) => state.likePost);

  return (
    <div className="flex items-center justify-start gap-3">
      <FaHeart
        size={30}
        onClick={async () => {
          await likePost(postId);
        }}
        color={isLikedByUser ? 'white' : '#4f4f4f'}
        className="cursor-pointer transition-all"
      />
      <span className="text-[#8c8c8c]">{likes} Likes</span>
    </div>
  );
}

export default PostLike;
