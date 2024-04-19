import { create } from 'zustand';
import { Post, PostComment } from '../types';
import axios, { AxiosResponse } from 'axios';
import { commentPostUrl, getPostCommentsUrl, userFeedUrl } from '../api/urls';

interface FeedStoreTypes {
  feed: Array<Post>;
  setFeed: () => Promise<void>;
  setPostComments: (postId: number) => Promise<void>;
  postsComments: { [postId: string]: Array<PostComment> };
  getPostComments: (postId: number) => PostComment[];
  addComment: (postId: number, comment: string) => Promise<void>;
}

const useFeedStore = create<FeedStoreTypes>((set, get) => ({
  feed: [],
  postsComments: {},
  setFeed: async () => {
    const { data: feed } = await axios.get<any, AxiosResponse<Array<Post>>>(
      userFeedUrl,
      { withCredentials: true }
    );
    set({ feed: feed });
  },
  setPostComments: async (postId: number) => {
    const { data: comments } = await axios.get<Array<PostComment>>(
      getPostCommentsUrl(postId),
      {
        withCredentials: true,
      }
    );
    const postsComments = get().postsComments;
    set({
      postsComments: {
        ...postsComments,
        [postId]: comments,
      },
    });
  },
  addComment: async (postId: number, comment: string) => {
    await axios.post(
      commentPostUrl,
      { postId, comment },
      { withCredentials: true }
    );
  },
  getPostComments: (postId: number) => {
    return get().postsComments[postId];
  },
}));

export default useFeedStore;
