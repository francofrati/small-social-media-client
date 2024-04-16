import React from "react";
import useFeedStore from "../../stores/feedStore";
import FeedPost from "./components/post";

function Feed() {
  const feed = useFeedStore((state) => state.feed);

  return (
    <>
      <div className="text-center ">Feed</div>
      <section className="flex flex-col gap-5 px-5 items-center max-w-4xl mx-auto">
        {feed.length ? (
          feed.map((post) => (
            <React.Fragment key={post.postId}>
              <FeedPost {...post} />
              <hr className="mt-5 border-[3px] rounded-full border-[#383838] last:hidden w-full" />
            </React.Fragment>
          ))
        ) : (
          <></>
        )}
      </section>
    </>
  );
}

export default Feed;
