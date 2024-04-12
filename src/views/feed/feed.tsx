import useFeedStore from "../../stores/feedStore";
import FeedPost from "./components/post";

function Feed() {
  const feed = useFeedStore((state) => state.feed);

  return (
    <>
      <div className="text-center ">Feed</div>
      <section className="flex flex-col gap-5 px-5">
        {feed.length ? feed.map((post) => <FeedPost {...post} />) : <></>}
      </section>
    </>
  );
}

export default Feed;
