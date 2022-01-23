import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 345px;
  border: 1px solid ${({theme}) => theme.color.lightGray};
  border-radius: 5px;
  padding: 7px 15px 20px;
  height: 100%;
`;

export const UserName = styled.span`
  font-weight: 300;
  font-size: 12px;
  display: block;
  margin-bottom: 7px;
`;

export const BlogTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 14px;
`;

export const Paragraph = styled.p`
  font-size: 14px;
`;