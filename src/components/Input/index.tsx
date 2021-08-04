import React, { InputHTMLAttributes } from 'react';
import { Container, SearchIcon, ClearIcon } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  handleInputClean(): void;
}

const Input: React.FC<InputProps> = ({ handleInputClean, ...rest }) => {
  return (
    <Container>
      <SearchIcon size={15} />
      <input {...rest} />
      <ClearIcon size={15} onClick={() => handleInputClean()} />
    </Container>
  );
};

export default Input;
