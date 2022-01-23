/* eslint-disable @next/next/link-passhref */
import React from 'react';
import Link from 'next/link';
import { SearchWrapper, SideBarTitle, UserListItem, UserListItemText, UserListWrapper, Wrapper } from "./Sidebar.styles";
import Input from "../input/Input";
import { createUsers } from '../../types/mockData';
import { useRouter } from "next/router";

const users = createUsers();
const Sidebar = () => {
  const { query } = useRouter();
  console.log('icerde');
  console.log(query);

  return (
    <Wrapper>
      <SearchWrapper>
        <SideBarTitle>Search Blogs</SideBarTitle>
        <Input onChange={() => null} value='' placeholder='Search' />
      </SearchWrapper>
      <SideBarTitle>Users</SideBarTitle>
      <UserListWrapper>
        {users.map((user) => (
          <UserListItem key={user.id}>
            <Link href={{ pathname: '/', query: { user: user.id } }}>
              <UserListItemText isActive={user.id === query?.user}>{user.username}</UserListItemText>
            </Link>
          </UserListItem>
        ))}
      </UserListWrapper>
    </Wrapper>
  )
}

export default Sidebar;
