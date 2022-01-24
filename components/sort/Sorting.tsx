import React, {FC} from 'react';
import Link from 'next/link';
import { SortingText, Wrapper } from './Sorting.styles';
import { useRouter } from 'next/router';

const Sorting: FC = () => {
  const { query } = useRouter();
  const id = query?.user;
  const sort = query?.sort;

  return (
    <Wrapper>
      <SortingText isActive={sort === "ASC"}>
        <Link href={{ pathname: '/', query: { user: id, page: 1, sort: "ASC"  } }}>
          A-Z
        </Link>
      </SortingText>
      <SortingText>
        /
      </SortingText>
      <SortingText isActive={sort === "DESC"}>
        <Link href={{ pathname: '/', query: { user: id, page: 1, sort: "DESC"  } }}>
          Z-A
        </Link>
      </SortingText>
    </Wrapper>   
  )
}

export default Sorting;
