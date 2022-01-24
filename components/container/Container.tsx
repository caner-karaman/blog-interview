import styled from 'styled-components';
import { device } from "../../common/theme";

const Container = styled.div`
  width: 1024px;
  margin: 0 auto;
  position: relative;

  @media ${device.desktop} { 
    width: 100%;
    padding: 0 30px;
  }

  @media ${device.mobile} { 
    padding: 0 10px;
  }
`;

export default Container;