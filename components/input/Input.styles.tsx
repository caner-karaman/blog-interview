import styled from 'styled-components';


interface StyledInputProps {
  value: string;
}

export const StyledInput = styled('input')<StyledInputProps>`
  color: ${(({theme, value}) => !!value ? theme.color.secondary : theme.color.gray)};
  font-size: 16px;
  border: none;
  border-bottom: 1px solid ${({theme, value}) => !!value ? theme.color.secondary : theme.color.gray};
  padding-left: 10px;
  width: 100%;
  outline: none;
  padding-bottom: 8px;

  &:focus{
    border-color: ${({theme}) => theme.color.secondary};
    color: ${({theme}) => theme.color.secondary};
  }

  &:placeholder {
    color: ${({theme}) => theme.color.lightGray};
  }

`;
