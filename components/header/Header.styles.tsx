import React from 'react';
import styled from 'styled-components';
import BlogBG from "../../public/blogBg.jpg";

export const StyledHeader = styled.header`
  width: 100%;
  position: relative;
`;

export const HeaderContent = styled.div`
  height: 240px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Heading2 = styled.h2`
  text-align: center;
  color: white;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-style: italic;
  font-weight: 600;
  font-size: 34px;
  margin: 0 0 5px;
`