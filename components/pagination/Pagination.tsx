import React, {FC} from 'react';
import Link from "next/link";
import { DisplayPage, NextButton, PrevButton, Wrapper } from './Pagination.styles';
import { useRouter } from 'next/router';

interface PaginationProps {
  page: string;
  pageCount: string;
}

const Pagination: FC<PaginationProps> = ({page, pageCount}) => {
  const { query } = useRouter();
  const id = query?.user;

  return(
    <Wrapper>
      <PrevButton isDisabled={+page <= 1} aria-disabled={+page <= 1}>
        <Link href={{ pathname: '/', query: { user: id, page: +page-1  } }}>
          ← Prev
        </Link>
      </PrevButton>
      <DisplayPage>{page} of {pageCount}</DisplayPage>
      <NextButton isDisabled={+page >= pageCount} aria-disabled={+page >= pageCount}>
        <Link href={{ pathname: '/', query: { user: id, page: +page+1  } }}>
          Next →
        </Link>
      </NextButton>
    </Wrapper>
  )
}

export default Pagination;
