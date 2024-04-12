import { create } from "zustand";
import { Post } from "../types";
import axios, { AxiosResponse } from "axios";
import { userFeedUrl } from "../api/urls";

interface FeedStoreTypes {
  feed: Array<Post>;
  setFeed: () => Promise<void>;
}

const useFeedStore = create<FeedStoreTypes>((set) => ({
  feed: [],
  setFeed: async () => {
    const { data: feed } = await axios.get<any, AxiosResponse<Array<Post>>>(
      userFeedUrl,
      { withCredentials: true }
    );
    set({ feed: feed });
  },
}));

export default useFeedStore;
