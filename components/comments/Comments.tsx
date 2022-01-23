import React, {FC, useState} from 'react';
import { Wrapper, Header, CommentButton, CommentItemWrapper, CommentName, Body } from './Comments.styles';

interface CommentsProps {
  comments: Array<IComment>;
}

const Comments: FC<CommentsProps> = ({comments}) => {
  const [isShow, setIsShow] = useState(false);

  const handleClick = () => {
    setIsShow(!isShow);
  }

  return (
    <Wrapper>
      <Header>
        <CommentButton onClick={handleClick}>All Comments</CommentButton>
      </Header>
      {
        comments.map((comment, index) => (
          <>
            {(isShow || index === 0) && (
              <CommentItemWrapper key={comment.id}>
                <CommentName>{comment.name}</CommentName>
                <Body>{comment.body}</Body>
              </CommentItemWrapper>
            )}
          </>
        ))
      }
    </Wrapper>
  )
}

export default Comments;