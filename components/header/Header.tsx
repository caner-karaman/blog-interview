import React from 'react';
import { HeaderContent, Heading2, StyledHeader } from './Header.styles';
import Image from 'next/image';
import Container from '../container/Container';
import Logo from '../Logo';

const Header = () => {
  return (
    <StyledHeader>
      <Image src="/images/blogBg.jpg" alt="Blog Background" layout='fill'/>
      <Container>
        <HeaderContent>
          <Logo></Logo>
          <Heading2>Blog</Heading2>
        </HeaderContent>
      </Container>
    </StyledHeader>
  )
}

export default Header;
