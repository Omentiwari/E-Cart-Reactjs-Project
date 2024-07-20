import React from 'react';
import { useParams } from 'react-router-dom';
import { items } from './Data';
import Product from './Product';

const SearchItem = ({ cart, setCart }) => {
  const { term } = useParams();
  const searchResults = items.filter(item =>
    item.title.toLowerCase().includes(term.toLowerCase()) ||
    item.description.toLowerCase().includes(term.toLowerCase())
  );

  return (
    <div className="search-results">
      <h2>Search Results for "{term}"</h2>
      {searchResults.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="product-list">
          {searchResults.map(product => (
            <Product key={product.id} product={product} cart={cart} setCart={setCart} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchItem;
