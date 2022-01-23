import React, {FC} from 'react';

interface InputProps {
  onChange(text: string): void;
  value: string;
  placeholder: string;
}

const Input: FC<InputProps> = ({onChange, value, placeholder}) => {
  return (
    <input data-testid="input" />
  )
};

export default Input;
