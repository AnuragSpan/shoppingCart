import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  remove,
  removeAll,
  decreaseQuantity,
  increaseQuantity,
  handleCheckout,
} from "../slices/cartSlices";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  console.log(cart.cartItems);
  const dispatch = useDispatch();

  const handleRemove = (item) => dispatch(remove(item));
  const clearAll = () => dispatch(removeAll());
  const handleDecrease = (id) => dispatch(decreaseQuantity(id));
  const handleIncrease = (id) => dispatch(increaseQuantity(id));
  const handleCheck = (items) => {
    dispatch(handleCheckout(items));
  };
  return (
    <div className="cart-container">
      <h2> Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is currenty empty</p>
          <div className="start-shopping">
            <Link to="/">
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
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="cart-titles">
            <h3 className="title">Title</h3>
            <h3 className="price">Price</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {cart.cartItems?.map((items) => {
              return (
                <div className="cart-item" key={items.id}>
                  <div className="cart-product">
                    <img src={items.image} alt={items.title} />
                    <div>
                      <h3>{items.title}</h3>
                      <button
                        className="remove-btn"
                        onClick={() => handleRemove(items)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="cart-product-price">${items.price}</div>
                  <div className="cart-product-quantity">
                    <button
                      className="decrease-btn"
                      disabled={items.quantity === 1}
                      onClick={() => handleDecrease(items.id)}
                    >
                      -
                    </button>
                    <span> {items.quantity}</span>
                    <button
                      onClick={() => handleIncrease(items.id)}
                      className="increase-btn"
                    >
                      +
                    </button>
                  </div>
                  <div className="cart-totalPrice">
                    <span> ${items.price * items.quantity}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="cart-summary">
            <button className="clear-cart-btn" onClick={clearAll}>
              Clear Cart
            </button>
            <div className="cart-checkout">
              <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">
                  {" "}
                  {cart.cartItems
                    .reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
                    .toFixed(2)}
                </span>
              </div>
              <p>Taxes and Shipping calculated at checkout page</p>
              <div
                onClick={() => {
                  handleCheck(cart.cartItems);
                }}
              >
                <Link className="check-link" to="/checkout">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
