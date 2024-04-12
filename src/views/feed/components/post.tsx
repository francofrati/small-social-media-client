import { Post } from "../../../types";
import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa";

function FeedPost({ content, imageUrl, username, profileImg }: Post) {
  return (
    <div className="shadow-xl bg-[#383838] rounded-xl">
      <section className="flex items-center gap-3 mx-4 my-4">
        {profileImg ? (
          <img
            className="w-12 h-12 rounded-full object-cover shadow-xl"
            src={profileImg}
          />
        ) : (
          <></>
        )}
        <div className="text-[#1a1a1a] font-semibold text-xl">{username}</div>
      </section>
      <div className="px-8 pb-4">{content}</div>
      {imageUrl ? <img className=" mb-4" src={imageUrl} /> : <></>}
      <div className="flex gap-4 px-8 pb-4">
        <FaComment size={30} color="#4f4f4f" />
        <FaHeart size={30} color="#4f4f4f" className="shadow-xl" />
      </div>
    </div>
  );
}

export default FeedPost;
