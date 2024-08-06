import React from "react";
import svg2 from "../images/cart.svg";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
export default function CartBtn() {
  const count = useSelector((state) => state.counter.count);
  return (
    <>
    <section id="CartBtn">
      <div className="container">
        <div className="cartBox">
          <button className="AddToCartBtn">
              <Link to="/cart"> 
              {" "}
              <a target="_blank">
              
              <img src={svg2} className="AddToCartBtn" />
            </a>
              </Link>
            
          </button>
          <div className="textBtn">
            <h5>{count}</h5>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
