import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./cart.scss";
import { BsBackspace } from "react-icons/bs";
import {
  removeFromCart,
  clearCart,
  decrement,
  addToCart,
} from "../redux/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      <h4 className="cart-title">Shopping Cart</h4>
      <div className="cart">
        {cart.cartItems.length === 0 ? (
          <div className="cart-empty">
            <h3 className="cart-status">Your cart is currently empty</h3>
            <div className="start-shopping">
              <Link to={"/"} className="back-btn">
                <BsBackspace />
                <span> start shopping</span>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <div className=" cart-titles">
              <h5>Products</h5>
              <h5 className="cart-price">Price</h5>
              <h5 className="cart-quantity">Quantity</h5>
              <h5 className="cart-total">Total</h5>
            </div>
            <div className="cart-items">
              {cart.cartItems?.map((cartItem) => (
                <div key={cartItem.id} className="cart-item">
                  <div className="cart-product">
                    <img
                      className="cart-img"
                      src={cartItem.image}
                      alt={cartItem.image}
                    />
                    <div className="">
                      <p>{cartItem.title}</p>

                      <button
                        className="remove-btn"
                        onClick={() => dispatch(removeFromCart(cartItem))}
                      >
                        remove
                      </button>
                    </div>
                  </div>
                  <p className="cart-price">${cartItem.price}</p>
                  <div className="cart-quantity">
                    <button
                      className="inc"
                      onClick={() => dispatch(decrement(cartItem))}
                    >
                      -
                    </button>
                    <p className="qty">{cartItem.cartQuantity}</p>
                    <button
                      className="dec"
                      onClick={() => dispatch(addToCart(cartItem))}
                    >
                      +
                    </button>
                  </div>
                  <div className="cart-total">
                    <p> ${cartItem.cartQuantity * cartItem.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <button
                className="cart-clear-btn"
                onClick={() => dispatch(clearCart())}
              >
                clear cart
              </button>
              <div className="cart-checkout">
                <div className="subtotal">
                  <h5>Subtotal</h5>
                  <h5>£999.99</h5>
                </div>
                <p>Taxes and shipping calculated at checkout</p>
                <button className="checkout-btn">checkout</button>
                <Link to={"/"} className="checkout-back-btn">
                  <BsBackspace />
                  <span> continue shopping</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
