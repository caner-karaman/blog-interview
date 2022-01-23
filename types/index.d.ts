interface IPost {
  title: string;
  id: string;
  body: string;
  comments: {
    data: Array<IComment>
  }
}

interface IUser {
  name: string;
  email: string;
  username: string;
  id: string;
}

interface IComment {
  body: string;
  name: string;
  id: string;
}

interface AllUserResponse {
  data: Array<IUser>;
}

interface UserResponse extends IUser {
  posts: {
    data: Array<IPost>;
  }
}

interface UserPostsResponse {
  data: Array<UserResponse>;
}