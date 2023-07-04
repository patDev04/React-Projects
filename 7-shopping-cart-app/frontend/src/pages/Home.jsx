import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./homes.scss";
import ProductCard from "../components/productCard/ProductCard";
import { addToCart } from "../redux/cartSlice";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { items } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  return (
    <div>
      <div className="container">
        <div className="filter">
          <h6>filter</h6>
        </div>
        <div className="">
          <h2>New Arrivals</h2>
          <br />
          <div className="list">
            <ProductCard items={items} handleAddToCart={handleAddToCart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
