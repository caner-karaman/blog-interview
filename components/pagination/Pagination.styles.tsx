import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;

interface StyledButtonProps{
  isDisabled?: boolean;
}
export const StyledButton = styled('a')<StyledButtonProps>`
  padding: 10px 13px;
  background-color: ${({theme}) => theme.color.lightGray2};
  pointer-events: ${({isDisabled}) => isDisabled ? 'none' : "default"};
`;

export const PrevButton = styled(StyledButton)`
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const NextButton = styled(StyledButton)`
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const DisplayPage = styled.div`
  padding: 10px 13px;
  background-color: ${({theme}) => theme.color.lightGray2};
`;
