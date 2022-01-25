/* eslint-disable @next/next/link-passhref */
import React, {FC, useState} from 'react';
import Link from 'next/link';
import { SearchWrapper, SideBarTitle, UserListItem, UserListItemText, UserListWrapper, Wrapper } from "./Sidebar.styles";
import Input from "../input/Input";
import { useRouter } from "next/router";
import { gql, useQuery } from '@apollo/client';

const USERS_QUERY = gql`
  query POSTS_QUERY {
    users {
      data{
        name
        username
        id
        email
      }
    }
  }
`;

const Sidebar: FC = () => {
  const [search, setSearch] = useState('')
  const { query } = useRouter();
  const { data, error, loading } = useQuery<{users?: AllUserResponse}>(USERS_QUERY);

  if(loading) return <p>Loading...</p>
  if(error) return <p>{`error: ${error}`}</p>

  return (
    <Wrapper>
      <SearchWrapper>
        <SideBarTitle>Search Users</SideBarTitle>
        <Input data-cy="userSearch" onChange={(text) => setSearch(text)} value={search} placeholder='Search' />
      </SearchWrapper>
      <SideBarTitle>Users</SideBarTitle>
      <UserListWrapper>
        <UserListItem>
          <Link href={{ pathname: '/', query: { page: 1 }}}>
            <UserListItemText isActive={!query?.user}>All User</UserListItemText>
          </Link>
        </UserListItem>
        {data?.users?.data?.filter((user) => user.name.includes(search)).map((user) => (
          <UserListItem data-cy="user" key={user.id}>
            <Link href={{ pathname: '/', query: { user: user.id, page: 1 } }}>
              <UserListItemText isActive={user.id === query?.user}>{user.name}</UserListItemText>
            </Link>
          </UserListItem>
        ))}
      </UserListWrapper>
    </Wrapper>
  )
}

export default Sidebar;
