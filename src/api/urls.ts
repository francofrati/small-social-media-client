import { ChatRoomId, User } from '../types';
import { apiBaseUrl } from './config';

export interface LoginBody {
  email: string;
  password: string;
}
export const loginUrl = `${apiBaseUrl}/auth/login`;

export const userInfoUrl = `${apiBaseUrl}/user/info`;

export interface UserContactsResponse {
  followers: Array<User>;
  followeds: Array<User>;
  followRequests: Array<User>;
}
export const userContacts = `${apiBaseUrl}/user/contacts`;

export const userFeedUrl = `${apiBaseUrl}/feed/user`;

export const commentPostUrl = `${apiBaseUrl}/post/comment`;

export const getPostCommentsUrl = (postId: number) =>
  `${apiBaseUrl}/post/${postId}/comments`;

export const getPostLikesUrl = (postId: number) =>
  `${apiBaseUrl}/post/${postId}/likes`;

export const likePostUrl = `${apiBaseUrl}/post/like`;

export const getChatsUrl = `${apiBaseUrl}/chat`;

export const getChatUrl = (chatRoomId: ChatRoomId) =>
  `${apiBaseUrl}/chat/${chatRoomId}`;
