import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Checkout = () => {
  const ordersSummary = useSelector((state) => state.cart);
  const orders = ordersSummary.cartItems || [];

  const handleButton = () => {
    toast.success(`Order Placed Successfully`, {
      position: "top-center",
    });
  };

  return (
    <>
      <h4 className="summary-title">Order Summary</h4>
      <div className="summary-container">
        {orders.length === 0 ? (
          <p>No orders yet.</p>
        ) : (
          orders.map((item) => (
            <div className="order-items" key={item.id}>
              <div className="checkout-image">
                <img src={item.image} alt={item.title} />
              </div>
              <span className="checkout-title">{item.title}</span>
              <div className="checkout-price">
                ${item.quantity * item.price}
              </div>
              <button onClick={handleButton} className="checkout-button">
                Track Order
              </button>
            </div>
          ))
        )}
        <Link to="/">
          <div className="continue-shopping-checkout">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
              />
            </svg>
            <span>Continue Shopping</span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Checkout;
