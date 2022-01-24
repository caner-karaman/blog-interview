import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;

interface SortingTextProps{
  isActive?: boolean;
}

export const SortingText = styled.a<SortingTextProps>`
  font-size: 16;
  font-weight: 300;
  color: ${({theme, isActive}) => isActive ? theme.color.primary : theme.color.black};
  margin: 0 7px;
  pointer-events: ${({isActive}) => isActive ? 'none' : "default"};
`;


