import React, { useState } from 'react';
import  ShoppingCart  from './ShoppingCart'; 
import CartUseContext  from './CartUseContext';
import CartSummery  from './CartSummery';



const App = () => {

    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
      setCartItems([...cartItems, { ...item, Id: Date.now() + Math.random() }]);
    };

    const removeFromCart = (itemId) => {
      setCartItems(cartItems.filter((cartItem) => cartItem.Id !== itemId));
    };

    const value = { cartItems, addToCart, removeFromCart };

  return (
    <CartUseContext.Provider value={value}>
      
      <ShoppingCart itemId={1} itemName="Galay" price={19.99} />
      <ShoppingCart itemId={2} itemName="Timir" price={29.99} />
      <ShoppingCart itemId={2} itemName="Moos" price={2.99} />
      <ShoppingCart itemId={2} itemName="CaanoGeel" price={1.99} />
      <CartSummery />
    </CartUseContext.Provider>
  );
}

export default App