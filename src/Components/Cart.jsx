import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./NavBar";
import Foot from "./Foot";
import {
  IncrementQuantity,
  DecrementQuantity,
  RemoveItem,
} from "./redux/Items/items";
import { useEffect } from "react";

export default function Cart() {
  const [Total, setTotal] = useState(0);
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);

  const HandleTotal = ()=>{
    let total=0;
    items.forEach(item => {
      total += item.quantity * item.price;
    });
    setTotal(total);
    console.log(total);  }

  const handleIncrement = (itemId) => {
    dispatch(IncrementQuantity(itemId));
  };

  const handleDecrement = (itemId) => {
    dispatch(DecrementQuantity(itemId));
  };

  const handleRemove = (itemId) => {
    dispatch(RemoveItem(itemId));
  };

  useEffect(()=>{
    HandleTotal();
  },[items])

  let Ship = 10;
  let Discount = 25;
  let Tax = 20;
  let EstimatedPrice= Total + Ship + Tax -Discount;
  return (
    <>
      <NavBar Title="My Shop" />
      <section id="Cart">
        <div className="container-fluid">
          <div className="Cart-Title d-flex justify-content-center">
            <div className="ShopIcon mx-2 mt-5 pt-5">
              <i className="fa-solid fa-bag-shopping"></i>
            </div>
            <div className="Title mx-2 mt-5 pt-5">
              <h1>My Cart</h1>
            </div>
          </div>

          <div className="row d-flex justify-content-around">
            <div className="col-md-6">
              <div className="Item-Section">
                <hr />
                {items.map((item) => (
                  <div className="row mb-5" key={item.id}>
                    <div className="col-md-2">
                      <img src={item.img} className="img-fluid" />
                    </div>
                    <div className="col-md-2">
                      <div className="Description">
                        <h6>{item.name}</h6>
                        <span>Color: Brown</span>
                        <br />
                        <span>Size:</span>
                        <br />
                        <span>In Stock</span>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="Payment">
                        <h6 className="ms-2">Each</h6>
                        <p className="ms-4">$ {item.price}</p>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="Quantity">
                        <h6>Quantity</h6>
                        <div className="Buttons d-flex">
                          <button
                            type="button"
                            className="btns"
                            onClick={() => handleDecrement(item.id)}
                          >
                            -
                          </button>
                          <p className="ms-3 ps-1 mt-2">{item.quantity}</p>
                          <button
                            type="button"
                            className="btns"
                            onClick={() => handleIncrement(item.id)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="Total-Price">
                        <h6 className="ms-1">Total Price</h6>
                        <p className="ms-2 ps-4">
                          $ {item.quantity * item.price}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="removeBtn">
                        <i
                          class="fa-solid fa-xmark ms-5"
                          onClick={() => handleRemove(item.id)}
                        ></i>
                      </div>
                    </div>

                    <hr />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-4">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Promo Code Here"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <div class="input-group-append">
                  <span class="input-group-text" id="basic-addon2">
                    Submit
                  </span>
                </div>
              </div>
              <div className="CheckOutText d-flex flex-column">
                <span className="my-2">
                  Shipping Cost: <b>${Ship}</b>
                </span>
                <span className="my-2">
                  Discount: <b>${Discount}</b>{" "}
                </span>
                <span className="my-2">
                  Tax: <b>${Tax}</b>
                </span>
                <span className="my-2">Estimated Total: $ {EstimatedPrice}</span>
                <button>CheckOut</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Foot />
    </>
  );
}
