/* eslint-disable @next/next/google-font-display */
/* eslint-disable @next/next/no-page-custom-font */
import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { device } from '../common/theme';

const LogoWrapper = styled.div`
  padding: 10px 15px;
  width: 246px;
  transform: skew(-15deg, 0);
  background-color: ${({theme}) => theme.color.primary};

  @media ${device.mobile} { 
    width: 220px;
    margin-left: 10px;
  }
`;

const Heading = styled.h1`
  margin: 0;
  font-family: 'Macondo Swash Caps', serif;
  font-size: 32px;
  color: ${({theme}) => theme.color.white};

  @media ${device.mobile} { 
    font-size: 28px;
  }
`

const Logo = () => {
  return(
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Macondo+Swash+Caps" />
      </Head>
      <LogoWrapper>
        <Heading>Viable Ventures</Heading>
      </LogoWrapper>
    </>
  )
}

export default Logo;
