import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home/Home';
import Women from './pages/Category/Women';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';

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
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
