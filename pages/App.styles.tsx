import styled from 'styled-components';
import Container from '../components/container/Container';

export const StyledContainer = styled(Container)`
  display: grid;
  grid-column-gap: 50px;
`

export const Main = styled.main`
  grid-column-start: 3;
  grid-column-end: 12;
`

export const Articles = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 35px;
  flex-wrap: wrap;
`;

export const ItemWrapper = styled.div`
  margin: 10px 0;
`