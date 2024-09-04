import { create } from 'zustand';

import axios, { AxiosResponse } from 'axios';

import {
  Chat,
  ChatRoomId,
  Message,
  MessageContent,
  ProfileImg,
  UserId,
  Username,
} from '../types';

import { getChatsUrl, getChatUrl, sendMessageUrl } from '../api/urls';

interface ChatStoreTypes {
  chatBoxChats: Array<Chat>;
  getChatBoxChats: () => Promise<Array<Chat>>;
  setChatBoxChats: () => Promise<void>;
  openChat: (
    chatRoomId: ChatRoomId,
    username: Username,
    profileImg: ProfileImg
  ) => void;
  closeSelectedChat: () => void;
  getChat: (chatRoomId: ChatRoomId) => Promise<Array<Message>>;
  chats: { [chatRoomId: ChatRoomId]: Array<Message> };
  setChat: (chatRoomId: ChatRoomId) => Promise<void>;
  selectedChat?: {
    chatRoomId: ChatRoomId;
    username: Username;
    profileImg: ProfileImg;
  };
  sendMessage: (
    chatRoomId: ChatRoomId,
    receiverUsername: Username,
    messageContent: MessageContent
  ) => Promise<void>;
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
  openChat(chatRoomId, username, profileImg) {
    set({ selectedChat: { chatRoomId, username, profileImg } });
  },
  closeSelectedChat() {
    set({ selectedChat: undefined });
  },
  chats: {},
  async sendMessage(chatRoomId, receiverUsername, messageContent) {
    const body = {
      receiverUsername,
      content: messageContent,
    };
    await axios.post(sendMessageUrl(chatRoomId), body, {
      withCredentials: true,
    });

    await get().setChat(chatRoomId);
  },
}));

export default useChatStore;
