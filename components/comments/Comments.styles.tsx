import styled from 'styled-components';
import { device } from "../../common/theme";

export const Wrapper = styled.div`
  height: 200px;
  overflow-y: scroll;


  @media ${device.desktop} { 
    height: 130px;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

export const CommentButton = styled.button`
  border: none;
  font-size: 12px;
  color: ${({theme}) => theme.color.gray};
  cursor: pointer;
`;


export const CommentItemWrapper = styled.div`
  transiton: .3s;
  background-color: ${({theme}) => theme.color.lightGray2};
  border-radius: 10px;
  padding: 10px 12px;
  margin-bottom: 8px;
`;

export const CommentName = styled.span`
  display: block;
  font-weight: 700;
  font-size: 12px;
`;

export const Body = styled.p`
  margin: 4px 0;
  font-size: 14px;
`