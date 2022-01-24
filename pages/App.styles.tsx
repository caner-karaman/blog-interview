import styled from 'styled-components';
import Container from '../components/container/Container';
import { device } from '../common/theme';

export const StyledContainer = styled(Container)`
  display: grid;
  grid-column-gap: 50px;

  @media ${device.mobile} { 
    display: block;
  }
`

export const Main = styled.main`
  grid-column-start: 3;
  grid-column-end: 12;
`

export const Articles = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const ItemWrapper = styled.div`
  margin: 10px 0;
`

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  width: 100%;
`;
