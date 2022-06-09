import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NotFound from './components/NotFound';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='abc' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
