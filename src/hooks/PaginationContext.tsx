import React, { createContext, useCallback, useContext, useState } from 'react';

interface PaginationContextData {
  currentPage: number;
  changePage(newPage: number): void;
}

export const PaginationContext = createContext<PaginationContextData>(
  {} as PaginationContextData,
);

export const PaginationProvider: React.FC = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const changePage = useCallback((newPage: number) => {
    setCurrentPage(newPage);
  }, []);

  return (
    <PaginationContext.Provider value={{ currentPage, changePage }}>
      {children}
    </PaginationContext.Provider>
  );
};

export function usePagination(): PaginationContextData {
  const context = useContext(PaginationContext);

  if (!context)
    throw new Error('usePagination must be used within PaginationProvider');

  return context;
}
