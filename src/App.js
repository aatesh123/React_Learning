import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import First from './Components/ContextApi/First';
import Second from './Components/ContextApi/Second';
import MyProvider from './Components/ContextApi/MyProvider';
import Navbar from './Components/Navbar';

function App() {
  return (
    <MyProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<First />} />
          <Route path="/first" element={<First />} />
          <Route path="/second" element={<Second />} />
        </Routes>
      </BrowserRouter>
    </MyProvider>
  );
}

export default App;
