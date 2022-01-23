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
  const { data, error, loading } = useQuery<{users?: UserResponse}>(USERS_QUERY);

  if(loading) return <p>Loading...</p>
  if(error) return <p>{`error: ${error}`}</p>

  return (
    <Wrapper>
      <SearchWrapper>
        <SideBarTitle>Search Blogs</SideBarTitle>
        <Input onChange={(text) => setSearch(text)} value={search} placeholder='Search' />
      </SearchWrapper>
      <SideBarTitle>Users</SideBarTitle>
      <UserListWrapper>
        {data?.users?.data?.filter((user) => user.name.includes(search)).map((user) => (
          <UserListItem key={user.id}>
            <Link href={{ pathname: '/', query: { user: user.id } }}>
              <UserListItemText isActive={user.id === query?.user}>{user.name}</UserListItemText>
            </Link>
          </UserListItem>
        ))}
      </UserListWrapper>
    </Wrapper>
  )
}

export default Sidebar;
