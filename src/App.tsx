import React from 'react';
import Header from './components/Header';
import { PaginationProvider } from './hooks/PaginationContext';
import { SearchProvider } from './hooks/SearchContext';
import Home from './pages/Home/index';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <PaginationProvider>
        <SearchProvider>
          <Header />
          <Home />
        </SearchProvider>
      </PaginationProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
