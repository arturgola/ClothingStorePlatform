import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import Products from './pages/ProductListWomen/Products';
import ProductScreen from './pages/ProductPage/ProductScreen';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import { AuthProvider } from './hooks/AuthContext';
// import { Women } from './pages/ProductPageWo/ProductPageWo';
import { ProductPage } from './pages/ProductPage/ProductPage';
import AboutUs from './pages/AboutUs/Aboutus';
import ContactUs from './pages/Contactus/ContactUS';
import { ShoppingBag } from './pages/ShoppingBag/ShoppingBag';
import CartScreen from './pages/ShoppingBag/CartScreen';
import SearchResults from './pages/SearchResults/SearchResults';

const App = () => {
  return (
    <AuthProvider>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/women" element={<Products />} />
              <Route path="/men" element={<Products />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/productpage" element={<ProductPage />} />
              <Route path="/Aboutus" element={<AboutUs />} />
              <Route path="/ContactUs" element={<ContactUs />} />
              <Route path="/product/:id" element={<ProductScreen />} />
              <Route path="/shoppingbag" element={<ShoppingBag />} />
              <Route path="/cart" element={<CartScreen />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
};

export default App;
