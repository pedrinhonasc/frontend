import React from 'react';
import Container from './styles';
import { useSearch } from '../../hooks/SearchContext';

const ProductListTitle: React.FC = () => {
  const { queryText } = useSearch();
  return (
    <Container>
      <span>{queryText || 'Lista de produtos'}</span>
    </Container>
  );
};

export default ProductListTitle;
