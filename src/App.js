import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
      <>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/faq" element={<Faq/>}/>
          </Routes>
      </>
  );
}

export default App;
