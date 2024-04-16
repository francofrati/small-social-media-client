import { Post } from "../../../types";
import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa";

function FeedPost({
  content,
  imageUrl,
  username,
  profileImg,
  lastComment,
  lastCommentUsername,
  totalComments,
}: Post) {
  return (
    <div className="shadow-xls bg-[#383838]s rounded-xl w-full">
      <section className="flex items-center gap-3 my-4">
        {profileImg ? (
          <img
            className="w-12 h-12 rounded-full object-cover shadow-xl"
            src={profileImg}
          />
        ) : (
          <></>
        )}
        <div className="text-[#ffffff] font-semibold text-xl">{username}</div>
      </section>
      <div className=" pb-4">{content}</div>
      {imageUrl ? (
        <img className="rounded-xl mb-4 w-full" src={imageUrl} />
      ) : (
        <></>
      )}
      <div className="flex gap-4 pr-8 pb-4">
        <FaComment
          size={30}
          color="#4f4f4f"
          className="hover:fill-white transition-all cursor-pointer"
        />
        <FaHeart
          size={30}
          color="#4f4f4f"
          className="hover:fill-white transition-all cursor-pointer"
        />
      </div>
      {lastComment ? (
        <section>
          {totalComments && totalComments > 1 ? (
            <p className="opacity-70">View all {totalComments} comments</p>
          ) : (
            <></>
          )}
          <p>
            <b>{lastCommentUsername} </b>
            {lastComment}
          </p>
        </section>
      ) : (
        <></>
      )}
    </div>
  );
}

export default FeedPost;
