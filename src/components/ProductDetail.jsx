import React from 'react';
import { useParams } from 'react-router-dom';
import { items } from './Data';

const ProductDetail = ({ cart, setCart }) => {
  const { id } = useParams();
  const product = items.find(item => item.id === parseInt(id));

  const addToCart = () => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className="product-detail">
      <img src={product.imgSrc} alt={product.title} className="product-image" />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>₹{product.price}</p>
      <a href={product.amazonLink} target="_blank" rel="noopener noreferrer">Buy on Amazon</a>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;