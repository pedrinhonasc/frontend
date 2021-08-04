import React, { createContext, useCallback, useContext, useState } from 'react';

interface SearchContextData {
  queryText: string;
  addSearchText(text: string): void;
}

export const SearchContext = createContext<SearchContextData>(
  {} as SearchContextData,
);

export const SearchProvider: React.FC = ({ children }) => {
  const [queryText, setQueryText] = useState('');

  const addSearchText = useCallback((text: string) => {
    setQueryText(text);
  }, []);

  return (
    <SearchContext.Provider value={{ queryText, addSearchText }}>
      {children}
    </SearchContext.Provider>
  );
};

export function useSearch(): SearchContextData {
  const context = useContext(SearchContext);

  if (!context) throw new Error('useSearch must be used within SearchProvider');

  return context;
}
