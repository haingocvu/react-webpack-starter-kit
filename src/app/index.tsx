import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NotFound from './components/NotFound';
import { HomePage } from './pages/Home/Loadable';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
