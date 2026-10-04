import React, { useContext } from 'react';
import CartUseContext from './CartUseContext';

function CartSummery() {

  const { cartItems, removeFromCart } = useContext(CartUseContext);

  return (
    <div>
      <h2>Cart Summary</h2>
      <p>Total Items: {cartItems.length}</p>
      <ul>
        {cartItems.map((item) => (
          <li key={item.Id}>
            {item.name} - ${item.price}{' '}
            <button onClick={() =>  removeFromCart(item.Id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartSummery;
