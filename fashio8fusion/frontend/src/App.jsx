import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import Women from "./pages/ProductListWomen/Women";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import { AuthProvider } from './hooks/AuthContext';
// import { Women } from './pages/ProductPageWo/ProductPageWo';
import { ProductPage } from './pages/ProductPage/ProductPage';

const App = () => {
  return (
    <AuthProvider>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/women" element={<Women />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/productpage" element={<ProductPage />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
};

export default App;