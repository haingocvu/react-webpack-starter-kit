import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { NotFoundPage } from './pages/NotFound/Loadable';
import { HomePage } from './pages/Home/Loadable';
import { GlobalStyle } from 'styles/global-styles';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
