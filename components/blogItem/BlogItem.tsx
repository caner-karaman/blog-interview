import React, {FC} from 'react';
import { BlogTitle, Paragraph, UserName, Wrapper } from './BlogItem.styles';

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
    </Wrapper>
  )
}

export default BlogItem;
