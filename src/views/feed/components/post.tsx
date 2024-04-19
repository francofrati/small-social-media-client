import { Post } from '../../../types';
import { FaHeart } from 'react-icons/fa';
import { FaComment } from 'react-icons/fa';

interface FeedPostProps {
  post: Post;
  openPostDetail: (post: Post) => Promise<void>;
}

function FeedPost({ post, openPostDetail }: FeedPostProps) {
  return (
    <div className="shadow-xls bg-[#383838]s rounded-xl w-full">
      <section className="flex items-center gap-3 my-4">
        {post.profileImg ? (
          <img
            className="w-12 h-12 rounded-full object-cover shadow-xl"
            src={post.profileImg}
          />
        ) : (
          <></>
        )}
        <div className="text-[#ffffff] font-semibold text-xl">
          {post.username}
        </div>
      </section>
      <div className=" pb-4">{post.content}</div>
      {post.imageUrl ? (
        <img className="rounded-xl mb-4 w-full" src={post.imageUrl} />
      ) : (
        <></>
      )}
      <div className="flex gap-4 pr-8 pb-4">
        <FaComment
          size={30}
          onClick={async () => {
            await openPostDetail(post);
          }}
          color="#4f4f4f"
          className="hover:fill-white transition-all cursor-pointer"
        />
        <FaHeart
          size={30}
          color="#4f4f4f"
          className="hover:fill-white transition-all cursor-pointer"
        />
      </div>
      {post.lastComment ? (
        <section>
          {post.totalComments && post.totalComments > 1 ? (
            <p className="opacity-70">View all {post.totalComments} comments</p>
          ) : (
            <></>
          )}
          <p>
            <b>{post.lastCommentUsername} </b>
            {post.lastComment}
          </p>
        </section>
      ) : (
        <></>
      )}
    </div>
  );
}

export default FeedPost;
