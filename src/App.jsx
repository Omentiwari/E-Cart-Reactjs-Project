// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductDetail from './components/ProductDetail';
import SearchItem from './components/SearchItem';
import Cart from './components/Cart';
import { items } from './components/Data';
import ProductList from './components/ProductList';
import Wishlist from './components/Wishlist';
import './index.css'; // Ensure this is imported

const App = () => {
  const [data, setData] = useState([...items]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [priceRange, setPriceRange] = useState('');

  const addToWishlist = (item) => {
    setWishlist((prevWishlist) => [...prevWishlist, item]);
  };

  const removeFromWishlist = (itemId) => {
    setWishlist((prevWishlist) => prevWishlist.filter(item => item.id !== itemId));
  };

  return (
    <Router>
      <div>
        <Navbar setData={setData} cart={cart} wishlist={wishlist} setPriceRange={setPriceRange} />
        <Routes>
          <Route path="/" element={<ProductList data={data} addToWishlist={addToWishlist} cart={cart} setCart={setCart} />} />
          <Route path="/product/:id" element={<ProductDetail cart={cart} setCart={setCart} />} />
          <Route path="/search/:term" element={<SearchItem cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
          <Route path="/wishlist" element={<Wishlist wishlist={wishlist} removeFromWishlist={removeFromWishlist} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
