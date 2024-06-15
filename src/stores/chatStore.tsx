import { create } from 'zustand';

import axios, { AxiosResponse } from 'axios';

import { Chat } from '../types';

import { getChatsUrl } from '../api/urls';

interface ChatStoreTypes {
  chats: Array<Chat>;
  getChats: () => Promise<Array<Chat>>;
  setChats: () => Promise<void>;
}

const useChatStore = create<ChatStoreTypes>((set, get) => ({
  chats: [],
  getChats: async () => {
    const { data: chats } = await axios.get<any, AxiosResponse<Array<Chat>>>(
      getChatsUrl,
      { withCredentials: true }
    );
    return chats;
  },
  setChats: async () => {
    const chats = await get().getChats();
    set({ chats: chats });
  },
}));

export default useChatStore;
