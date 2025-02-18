import { lazy, Suspense } from 'react'
import './App.css'

import { Container, ThemeProvider } from '@mui/material';
import theme from './theme';
import Header from './components/Header';

// import BookList from "booklist/Booklist";

const BookList = lazy(() => import("booklist/BookList"));

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Container>
        <Suspense fallback={<div>Loading Book List...</div>}>
          <BookList />
        </Suspense>
      </Container>
    </ThemeProvider>
  );
}

export default App
