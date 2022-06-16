import ForSale from "./components/ForSale";
import Cart from "./components/Cart";
import Card from "./components/Card";
import './App.css';
import products from './db/products.js';
import { useState } from 'react';

function App() {
  const {items} = products;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (items) => {
    const exist = cartItems.find((x) => x.id === items.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === items.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...items, qty: 1 }]);
    }
  };
  const onRemove = (items) => {
    const exist = cartItems.find((x) => x.id === items.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== items.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === items.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div>
      <Cart
      cartItems={cartItems}
      onAdd={onAdd}
      onRemove={onRemove}
       ></Cart>
      <ForSale />
   
   </div>
  );
}

export default App;
