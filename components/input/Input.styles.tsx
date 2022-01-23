import styled from 'styled-components';


interface StyledInputProps {
  value: string;
}

export const StyledInput = styled('input')<StyledInputProps>`
  color: ${(({theme, value}) => !!value ? theme.color.primary : theme.color.gray)};
  font-size: 16px;
  border: none;
  border-bottom: 1px solid ${({theme, value}) => !!value ? theme.color.primary : theme.color.gray};
  padding-left: 10px;
  width: 100%;
  outline: none;
  padding-bottom: 8px;

  &:focus{
    border-color: ${({theme}) => theme.color.primary};
    color: ${({theme}) => theme.color.primary};
  }


`;
