import React, { useCallback, useState } from 'react';
import useFeedStore from '../../stores/feedStore';
import FeedPost from './components/post';
import { Post } from '../../types';
import PostDetailModal from './components/postDetailModal';

function Feed() {
  const [postDetailModal, setPostDetailModal] = useState<boolean>(false);
  const [selectedPostDetail, setSelectedPostDetail] = useState<
    number | string
  >();

  const feed = useFeedStore((state) => state.feed);
  const getPostComments = useFeedStore((state) => state.setPostComments);

  const openPostDetailModal = useCallback(
    async (post: Post) => {
      await getPostComments(post.postId);
      setSelectedPostDetail(post.postId);
      setPostDetailModal(true);
    },
    [setPostDetailModal]
  );
  const closePostDetailModal = useCallback(() => {
    setPostDetailModal(false);
  }, [setPostDetailModal]);

  return (
    <>
      <div className="text-center ">Feed</div>
      <section className="flex flex-col gap-5 px-5 items-center max-w-4xl mx-auto">
        {feed.length ? (
          feed.map((post) => (
            <React.Fragment key={post.postId}>
              <FeedPost post={post} openPostDetail={openPostDetailModal} />
              <hr className="mt-5 border-[3px] rounded-full border-[#383838] last:hidden w-full" />
            </React.Fragment>
          ))
        ) : (
          <></>
        )}
        {postDetailModal && selectedPostDetail ? (
          <PostDetailModal
            handleClose={closePostDetailModal}
            postId={selectedPostDetail}
          />
        ) : (
          <></>
        )}
      </section>
    </>
  );
}

export default Feed;
