export interface PostProps {
  createdAt: Date;
  description: string;
  likes: number[];
  image: string;
  updatedAt: Date;
  userId?: string;
  _id: string;
}

export interface Posts {
  post: PostProps;
}

export interface User {
  _id: string;
  profilePicture?: string;
  coverPicture: string;
  followers: [];
  followings: [];
  isAdmin: boolean;
  username: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  comment?: string;
}