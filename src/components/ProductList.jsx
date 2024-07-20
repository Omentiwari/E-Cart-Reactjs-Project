import React from 'react';
import Product from './Product';

const ProductList = ({ data, addToWishlist, cart, setCart }) => {
  return (
    <div className="product-list">
      {data.map(product => (
        <Product
          key={product.id}
          product={product}
          addToWishlist={addToWishlist}
          cart={cart}
          setCart={setCart}
        />
      ))}
    </div>
  );
};

export default ProductList;