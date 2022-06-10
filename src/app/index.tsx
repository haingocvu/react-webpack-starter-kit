import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { NotFoundPage } from './pages/NotFound/Loadable';
import { HomePage } from './pages/Home/Loadable';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
