import React from "react";
import "./productcard.scss";
import { Link } from "react-router-dom";

const ProductCard = ({ items, handleAddToCart }) => {
  return (
    <>
      {items?.map((product) => (
        <Link to={"/"} key={product.id} className="card">
          <div className="desc">
            <img src={product.image} alt="" />
            <p>{product.title}</p>
            <h6>£{product.price}</h6>
          </div>
          <button
            className="add-item-btn"
            onClick={() => handleAddToCart(product)}
          >
            Add To Cart
          </button>
        </Link>
      ))}
    </>
  );
};

export default ProductCard;
