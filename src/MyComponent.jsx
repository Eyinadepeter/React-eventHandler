import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }

  function handleShippingChange(event) {
    setShipping(event.target.value);
  }

  return (
    <div>
      {/* Name Input */}
      <label htmlFor="name">Name:</label>
      <input id="name" type="text" value={name} onChange={handleChange} />
      <p>Name: {name}</p>

      {/* Quantity Input */}
      <label htmlFor="quantity">Quantity:</label>
      <input id="quantity" type="number" value={quantity} onChange={handleQuantityChange} />
      <p>Quantity: {quantity}</p>

      {/* Comment Textarea */}
      <label htmlFor="comment">Delivery Instructions:</label>
      <textarea
        id="comment"
        value={comment}
        onChange={handleCommentChange}
        placeholder="Enter Delivery Instruction"
      />
      <p>Comment: {comment}</p>

      {/* Payment Dropdown */}
      <label htmlFor="payment">Payment Type:</label>
      <select id="payment" value={payment} onChange={handlePaymentChange}>
        <option value="">Select An Option</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Verve">Verve</option>
      </select>
      <p>Payment Type: {payment}</p>

      {/* Shipping Options */}
      <label>
        <input
          type="radio"
          value="Pick Up"
          checked={shipping === "Pick Up"}
          onChange={handleShippingChange}
        />
        Pick Up
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={handleShippingChange}
        />
        Delivery
      </label>

      <p>Shipping: {shipping}</p>
    </div>
  );
}

export default MyComponent;
