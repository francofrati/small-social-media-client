import { create } from 'zustand';

import axios, { AxiosResponse } from 'axios';

import { Chat, ChatRoomId, Message } from '../types';

import { getChatsUrl, getChatUrl } from '../api/urls';

interface ChatStoreTypes {
  chatBoxChats: Array<Chat>;
  getChatBoxChats: () => Promise<Array<Chat>>;
  setChatBoxChats: () => Promise<void>;
  openChat: (chatRoomId: ChatRoomId) => void;
  getChat: (chatRoomId: ChatRoomId) => Promise<Array<Message>>;
  chats: { [chatRoomId: ChatRoomId]: Array<Message> };
  setChat: (chatRoomId: ChatRoomId) => Promise<void>;
  selectedChat?: ChatRoomId;
}

const useChatStore = create<ChatStoreTypes>((set, get) => ({
  chatBoxChats: [],
  getChatBoxChats: async () => {
    const { data: chats } = await axios.get<any, AxiosResponse<Array<Chat>>>(
      getChatsUrl,
      { withCredentials: true }
    );
    return chats;
  },
  setChatBoxChats: async () => {
    const chats = await get().getChatBoxChats();
    set({ chatBoxChats: chats });
  },
  async getChat(chatRoomId) {
    const { data: chat } = await axios.get<any, AxiosResponse<Array<Message>>>(
      getChatUrl(chatRoomId),
      { withCredentials: true }
    );
    return chat;
  },
  setChat: async (chatRoomId) => {
    const chat = await get().getChat(chatRoomId);
    const chats = get().chats;
    set({
      chats: {
        ...chats,
        [chatRoomId]: chat,
      },
    });
  },
  openChat(chatRoomId) {
    set({ selectedChat: chatRoomId });
  },
  chats: {},
}));

export default useChatStore;
