import { create } from 'zustand';
import { Post, PostComment, PostLike } from '../types';
import axios, { AxiosResponse } from 'axios';
import {
  commentPostUrl,
  getPostCommentsUrl,
  getPostLikesUrl,
  likePostUrl,
  userFeedUrl,
} from '../api/urls';

interface FeedStoreTypes {
  feed: Array<Post>;
  setFeed: () => Promise<void>;
  setPostComments: (postId: number) => Promise<void>;
  postsComments: { [postId: string]: Array<PostComment> };
  setPostLikes: (postId: number) => Promise<void>;
  getPostComments: (postId: number) => PostComment[];
  postsLikes: { [postId: string]: Array<PostLike> };
  likePost: (postId: number) => Promise<void>;
  addComment: (postId: number, comment: string) => Promise<void>;
}

const useFeedStore = create<FeedStoreTypes>((set, get) => ({
  feed: [],
  postsComments: {},
  postsLikes: {},
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
  setPostLikes: async (postId: number) => {
    const { data: likes } = await axios.get<Array<PostLike>>(
      getPostLikesUrl(postId),
      {
        withCredentials: true,
      }
    );
    const postsLikes = get().postsLikes;
    set({
      postsLikes: {
        ...postsLikes,
        [postId]: likes,
      },
    });
  },
  addComment: async (postId: number, comment: string) => {
    await axios.post(
      commentPostUrl,
      { postId, comment },
      { withCredentials: true }
    );
    await get().setFeed();
    await get().setPostComments(postId);
  },
  likePost: async (postId: number) => {
    try {
      await axios.post(
        likePostUrl,
        { postId: postId },
        { withCredentials: true }
      );
      await get().setPostLikes(postId);
      await get().setFeed();
    } catch (error) {
      console.error(error);
    }
  },
  getPostComments: (postId: number) => {
    return get().postsComments[postId];
  },
}));

export default useFeedStore;
