import { useState } from "react";

const ShoppingCart = () => {
  const [productCard, setProductCard] = useState([]);

  const [inputProduct, setInputProduct] = useState("");
  const [inputPrice, setInputPrice] = useState("");
  const [inputQuantity, setInputQuantity] = useState("");

  const handleAddCart = () => {
    if (inputProduct.trim() !== "" && inputPrice.trim() !== "") {
        
      const existingProduct = productCard.find(
        (item) => item.name.toLowerCase() === inputProduct.toLowerCase(),
      );

      if (existingProduct) {
        const updatedCart = productCard.map((item) =>
          item.name.toLowerCase() === inputProduct.toLowerCase()
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
        setProductCard(updatedCart);
      } else {
        const newProduct = {
          id: Date.now(),
          name: inputProduct,
          price: parseFloat(inputPrice) || 1,
          quantity: 1,
        };
      
        setProductCard([...productCard, newProduct]);
      }

      setInputProduct("");
      setInputPrice("");
    }
  };

  
  const handleDeleteProduct = (id) => {
    const updatedCart = productCard.filter((item) => item.id !== id);
    setProductCard(updatedCart);
  };

  const handleDecrease = (id) => {
    const updatedCart = productCard.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item,
    );
    setProductCard(updatedCart);
  };

  const handleIncrease = (id) => {
    const updatedCart = productCard.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
    );
    setProductCard(updatedCart);
  };

 
  const totalPrice = productCard.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div >
      <h1>Simple Shopping Cart</h1>

      <h2>Add a Product</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={inputProduct}
        onChange={(e) => setInputProduct(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={inputPrice}
        onChange={(e) => setInputPrice(e.target.value)}
      />
      <button onClick={handleAddCart}>Add to Cart</button>

      <h2>Product In Cart</h2>
      <ul>
        {productCard.map((item) => (
          <li key={item.id} style={{ marginBottom: "15px" }}>
            <strong>{item.name.toLowerCase()}</strong> - $
            {item.price.toFixed(2)}
            <div>
              Quantity:
              <button
                onClick={() => handleDecrease(item.id)}
                style={{ margin: "0 5px" }}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => handleIncrease(item.id)}
                style={{ margin: "0 5px" }}
              >
                +
              </button>
            </div>
           
            <button
              onClick={() => handleDeleteProduct(item.id)}
              style={{ marginTop: "5px", color: "red", display: "block" }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>

      <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
    </div>
  );
};
export default ShoppingCart;
