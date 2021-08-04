import React, { useState, KeyboardEvent, useCallback } from 'react';

import Container from './styles';
import Input from '../Input/index';
import { useSearch } from '../../hooks/SearchContext';
import { usePagination } from '../../hooks/PaginationContext';

const Header: React.FC = () => {
  const [text, setText] = useState('');
  const { addSearchText } = useSearch();
  const { changePage } = usePagination();

  const handleKeyPressOnSearch = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        changePage(1);
        addSearchText(text);
      }
    },
    [text, addSearchText, changePage],
  );

  const handleInputClean = useCallback(() => {
    setText('');
    addSearchText('');
    changePage(1);
  }, [addSearchText, changePage]);

  return (
    <Container>
      <h2>mmartan</h2>
      <Input
        handleInputClean={handleInputClean}
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyPress={handleKeyPressOnSearch}
        placeholder="Busca"
        type="text"
      />
    </Container>
  );
};

export default Header;
