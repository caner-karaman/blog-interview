import styled from 'styled-components';
import Container from '../components/container/Container';

export const StyledContainer = styled(Container)`
  display: grid;
  grid-column-gap: 20px;
`

export const Main = styled.main`
  grid-column-start: 3;
  grid-column-end: 12;
  background-color: lightgray;
  height: 200px;
`