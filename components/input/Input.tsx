import React, {FC} from 'react';
import { StyledInput } from './Input.styles';

interface InputProps {
  onChange(text: string): void;
  value: string;
  placeholder: string;
}

const Input: FC<InputProps> = ({onChange, value, placeholder}) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => onChange && onChange(event.target.value);

  return (
    <StyledInput data-testid="input" onChange={handleChange} value={value} placeholder={placeholder}/>
  )
};

export default Input;
