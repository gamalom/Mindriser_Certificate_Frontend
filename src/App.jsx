import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Provider } from "react-redux";
import Navbar from './globals/components/navbar/Navbar';
import Footer from './globals/components/footer/Footer';
import store from './store/store';
import Home from './pages/home/components/Home';
import Cart from './pages/cart/Cart';
import Login from './pages/auth/login/Login';
import Register from './pages/auth/register/Register';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
