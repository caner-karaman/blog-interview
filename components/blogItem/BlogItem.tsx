import React, {FC} from 'react';
import { BlogTitle, Paragraph, UserName, Wrapper } from './BlogItem.styles';
import Comments from "../comments/Comments";

interface BlogItemProps {
  post: PostResponse;
}

const BlogItem: FC<BlogItemProps> = ({post}) => {
  const {user, body, title, comments} = post;

  return (
    <Wrapper>
      <UserName>{user.username}</UserName>
      <BlogTitle>{title}</BlogTitle>
      <Paragraph>{body}</Paragraph>
      <hr />
      <Comments comments={comments.data}/>
    </Wrapper>
  )
}

export default BlogItem;
