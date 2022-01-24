import styled from 'styled-components';
import { device } from "../../common/theme";

export const Wrapper = styled.aside`
  grid-column-start: 1;
  grid-column-end: 3;
  padding-top: 22px;
  width: 210px;


  @media ${device.desktop} { 
    width: 150px;
  }
`;

export const SideBarTitle = styled.h3`
  color: ${({theme}) => theme.color.primary};
  font-weight: 600;
  font-style: italic;
  font-size: 16px;
  padding-bottom: 5px;
  border-bottom: 1px solid ${({theme}) => theme.color.primary};
  margin-top: 0;
  margin-bottom: 30px;

  @media ${device.mobile} { 
    margin-bottom: 10px;
  }
`

export const SearchWrapper = styled.div`
  margin-bottom: 50px;

  @media ${device.mobile} { 
    margin-bottom: 30px;
  }
`

export const UserListWrapper = styled.ul`
  padding: 0;
`

export const UserListItem = styled.li`
  list-style: none;
  margin: 7px 0;
`

interface UserListItemTextProps {
  isActive?: boolean;
}

export const UserListItemText = styled.a<UserListItemTextProps>`
  font-size: 16px;
  color: ${({theme, isActive}) => isActive ? theme.color.primary : theme.color.gray};
  cursor: pointer;

  &:hover{
    color: ${({theme}) => theme.color.primary};
  }
`