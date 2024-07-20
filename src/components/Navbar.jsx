// Navbar.js
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { items } from './Data';
import { BsFillCartCheckFill } from 'react-icons/bs';

const Navbar = ({ setData, cart, wishlist, setPriceRange }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");

  const filterByCategory = (category) => {
    const filteredItems = items.filter((product) => product.category === category);
    setData(filteredItems);
  };

  const filterByPrice = (range) => {
    let filteredItems;
    switch (range) {
      case "0-20000":
        filteredItems = items.filter((product) => parseFloat(product.price) <= 20000);
        break;
      case "20001-40000":
        filteredItems = items.filter((product) => parseFloat(product.price) > 20000 && parseFloat(product.price) <= 40000);
        break;
      case "40001-60000":
        filteredItems = items.filter((product) => parseFloat(product.price) > 40000 && parseFloat(product.price) <= 60000);
        break;
      case "60001-80000":
        filteredItems = items.filter((product) => parseFloat(product.price) > 60000 && parseFloat(product.price) <= 80000);
        break;
      case "80001":
        filteredItems = items.filter((product) => parseFloat(product.price) > 80000);
        break;
      default:
        filteredItems = items;
    }
    setData(filteredItems);
    setSelectedPriceRange(range);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredItems = items.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setData(filteredItems);
    navigate('/');
    setSearchTerm("");
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price), 0);
  };

  return (
    <>
      <header className='header'>
        <Link to={'/'} className="brand">E-Cart</Link>

        <form onSubmit={handleSearch} className="search-bar">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder='Search Products'
          />
          <button type="submit">Search</button>
        </form>

        <div className="cart-info">
          <Link to={'/cart'} className="cart">
            <button type="button" className="btn btn-primary position-relative">
              <BsFillCartCheckFill style={{ fontSize: '1.5rem' }} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
                <span className="visually-hidden">unread messages</span>
              </span>
            </button>
          </Link>
          <div className="cart-price">
            Total Price: ₹{calculateTotalPrice()}
          </div>
        </div>

        <div className="wishlist-info">
          <Link to={'/wishlist'} className="wishlist">
            Wishlist ({wishlist.length})
          </Link>
        </div>
      </header>

      {location.pathname === '/' && (
        <div className="nav-bar-wrapper">
          <div className="filter-options">
            <div className="items" onClick={() => setData(items)}>No Filter</div>
            <div className="items" onClick={() => filterByCategory('mobiles')}>Mobiles</div>
            <div className="items" onClick={() => filterByCategory('laptops')}>Laptops</div>
            <div className="items" onClick={() => filterByCategory('tablets')}>Tablets</div>

            <div className="price-filter">
              <button onClick={() => filterByPrice("0-20000")} className={`price-btn ${selectedPriceRange === "0-20000" ? 'active' : ''}`}>₹0 - ₹20,000</button>
              <button onClick={() => filterByPrice("20001-40000")} className={`price-btn ${selectedPriceRange === "20001-40000" ? 'active' : ''}`}>₹20,001 - ₹40,000</button>
              <button onClick={() => filterByPrice("40001-60000")} className={`price-btn ${selectedPriceRange === "40001-60000" ? 'active' : ''}`}>₹40,001 - ₹60,000</button>
              <button onClick={() => filterByPrice("60001-80000")} className={`price-btn ${selectedPriceRange === "60001-80000" ? 'active' : ''}`}>₹60,001 - ₹80,000</button>
              <button onClick={() => filterByPrice("80001")} className={`price-btn ${selectedPriceRange === "80001" ? 'active' : ''}`}>Above ₹80,000</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
