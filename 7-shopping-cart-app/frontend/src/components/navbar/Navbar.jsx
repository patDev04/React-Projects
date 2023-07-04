import React from "react";
import "./navbar.scss";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <nav>
      <Link to="/" className="nav-link">
        <h3>online store</h3>
      </Link>
      <div className="bag-container">
        <Link to="/cart" className="nav-link ">
          <MdOutlineShoppingBag className="bag-icon" />
        </Link>
        <div className="bag-qty">
          <sup>{cart.cartItems.length}</sup>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
