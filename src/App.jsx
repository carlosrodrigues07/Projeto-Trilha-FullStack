// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "/src/pages/Home";
import ProductDetails from "/src/pages/ProductDetails";
import Cart from "/src/pages/Card.jsx";
import Header from "/src/components/Header";
import Footer from "/src/components/Footer";
import { CartProvider } from "/src/context/CardContext";


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produto/:id" element={<ProductDetails />} />
          <Route path="/carrinho" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
