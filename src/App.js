import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Prediction from './pages/Prediction'
import Result from './pages/Result'
import About from './pages/About'
import Message from './pages/Message'

function App() {
  return (
    <div className="box-sizing:border-box light:bg-gray-100 dark:black">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prediction" element={<Prediction />} />
        <Route path="/result" element={<Result />} />
        <Route path="/about" element={<About />} />
        <Route path="/message" element={<Message />} />
      </Routes>
    </div>
  );
}

export default App;
