import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart() {

  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container mt-4">

      <h2>Your Cart</h2>

      {cart.map((item, index) => (

        <div key={index} className="mb-2">

          {item.title} - ${item.price}

          <button
            className="btn btn-danger ms-3"
            onClick={() => removeFromCart(index)}
          >
            Remove
          </button>

        </div>

      ))}

      <h3>Total: ${total.toFixed(2)}</h3>

    </div>
  );
}

export default Cart;