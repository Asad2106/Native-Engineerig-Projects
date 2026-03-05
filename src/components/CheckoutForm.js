import React, { useState } from "react";

function CheckoutForm() {

  const [card, setCard] = useState("");
  const [cvv, setCvv] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (card.length !== 16) {
      alert("Card must have 16 digits");
      return;
    }

    if (cvv.length !== 3) {
      alert("CVV must be 3 digits");
      return;
    }

    alert("Order placed successfully!");
  };

  return (
    <div className="container mt-4">

      <h2>Checkout</h2>

      <form onSubmit={handleSubmit}>

        <input
          className="form-control mb-2"
          placeholder="Name"
        />

        <input
          className="form-control mb-2"
          placeholder="Address"
        />

        <input
          className="form-control mb-2"
          placeholder="Card Number"
          value={card}
          onChange={(e) => setCard(e.target.value)}
        />

        <input
          className="form-control mb-2"
          placeholder="CVV"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
        />

        <button className="btn btn-primary">
          Pay
        </button>

      </form>

    </div>
  );
}

export default CheckoutForm;