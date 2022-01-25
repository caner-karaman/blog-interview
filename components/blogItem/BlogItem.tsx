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
    <Wrapper data-cy="blogItem">
      <UserName data-cy="blogItemUser">{username}</UserName>
      <BlogTitle data-cy="blogItem title">{title}</BlogTitle>
      <Paragraph data-cy="blogItem body">{body}</Paragraph>
      <hr />
      <Comments comments={comments.data}/>
    </Wrapper>
  )
}

export default BlogItem;
