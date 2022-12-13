import React from 'react';
import './App.css';
import { Routes, Route }
    from 'react-router-dom';
import Home
    from './pages/home/Home';
import Subreddit
    from "./pages/subreddit/Subreddit";

function App() {
  return (
      <>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/subreddit/:id" element={<Subreddit/>}/>
          </Routes>
      </>
  );
}

export default App;
