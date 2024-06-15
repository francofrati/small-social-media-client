export type Username = string;
export type ChatRoomId = number;
export type ProfileImg = string;
export type MessageContent = string;
export type CreatedAt = string;
export type UserId = number;

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: username;
  bitrhDate: string;
  profileImg?: string;
  email?: string;
}

export type PostId = number;
export type IsLikedByUser = boolean;
export type Likes = number;

export interface Post {
  postId: PostId;
  createdAt: string;
  content: string;
  imageUrl: string | null;
  postedBy: number;
  username: string;
  profileImg: string;
  lastComment: string | null;
  lastCommentUsername: string | null;
  totalComments: number | null;
  likes: Likes;
  isLikedByUser: IsLikedByUser;
  comments?: PostComment[];
}

export interface PostComment {
  content: string;
  username: string;
  profileImg: string;
  postId: number;
  commentId;
}

export interface PostLike {
  username: string;
  profileImg: string;
  createdAt: string;
}

export interface Chat {
  username: Username;
  profileImg: ProfileImg;
  userId: UserId;
  chatRoomId: ChatRoomId;
  lastMessage: MessageContent;
  lastMessageCreatedAt: CreatedAt;
}
