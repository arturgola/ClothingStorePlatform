import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { useState } from 'react';
import { Navbar } from './components/Navbar/Navbar';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/women" element={<Women />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
