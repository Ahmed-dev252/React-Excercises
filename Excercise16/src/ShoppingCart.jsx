import React, { useContext } from 'react';
import CartUseContext from './CartUseContext';

const ShoppingCart = ({ itemId, itemName, price }) => {
    const { addToCart } = useContext(CartUseContext);

  const handleAdd = () => {
    addToCart({ id: itemId, name: itemName, price: price });
  };



  return (
     <div>
      <p>{itemName}</p>
      <p>Price: ${price}</p>
      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  )
}

export default ShoppingCart