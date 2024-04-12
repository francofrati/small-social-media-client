export interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  bitrhDate: string;
  profileImg?: string;
  email?: string;
}

export interface Post {
  postId: number;
  createdAt: string;
  content: string;
  imageUrl: string | null;
  postedBy: number;
  username: string;
  profileImg: string;
}
