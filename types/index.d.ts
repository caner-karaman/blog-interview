interface IPost {
  title: string;
  id: string;
  body: string;
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

interface PostResponse extends IPost {
  user: IUser;
  comments: {
    data: Array<IComment>
  }
}

interface UserResponse {
  data: Array<IUser>;
}

interface IPostsBlogListResponse {
  data: Array<PostResponse>;
}