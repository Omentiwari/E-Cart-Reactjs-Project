import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product, addToWishlist, cart, setCart }) => {
  const addToCart = () => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className="product">
      <img src={product.imgSrc} alt={product.title} className="product-image" />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>₹{product.price}</p>
      <Link to={`/product/${product.id}`} className="details-link">View Details</Link>
      <button onClick={addToCart}>Add to Cart</button>
      <button onClick={() => addToWishlist(product)}>Add to Wishlist</button>
    </div>
  );
};

export default Product;