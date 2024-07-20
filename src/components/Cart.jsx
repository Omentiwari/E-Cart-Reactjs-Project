import React from 'react';

const Cart = ({ cart, setCart }) => {
  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== itemId));
  };

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + parseFloat(item.price), 0);
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                <img src={item.imgSrc} alt={item.title} />
                <div>
                  <h3>{item.title}</h3>
                  <p>₹{item.price}</p>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="total-price">
            Total Price: ₹{calculateTotalPrice()}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
