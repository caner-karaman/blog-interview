import React, {FC} from 'react';
import { BlogTitle, Paragraph, UserName, Wrapper } from './BlogItem.styles';
import Comments from "../comments/Comments";

interface BlogItemProps {
  post: IPost;
  username: string;
}

const BlogItem: FC<BlogItemProps> = ({post, username}) => {
  const {body, title, comments} = post;

  return (
    <Wrapper>
      <UserName>{username}</UserName>
      <BlogTitle>{title}</BlogTitle>
      <Paragraph>{body}</Paragraph>
      <hr />
      <Comments comments={comments.data}/>
    </Wrapper>
  )
}

export default BlogItem;
