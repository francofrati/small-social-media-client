import { User } from "../types";
import { apiBaseUrl } from "./config";

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
