import React from "react";
import img2 from "../images/product-1.png";
import img3 from "../images/product-2.png";
import img4 from "../images/product-3.png";
import svg3 from "../images/cross.svg";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./redux/AddCounter/counter";
import { AddItem } from "./redux/Items/items";

export default function Explore() {
  const dispatch = useDispatch();
  const items=[
    {id: 1, name: "Nordic Chair", price:50, img: img2},
    {id: 2, name: "Kruzo Aero Chair", price:30, img: img3},
    {id: 3, name: "Ergonomic Chair", price:45, img: img4},
  ]

  const HandleEvent=(item)=>{
    dispatch(AddItem(item));
    dispatch(increment());
  }
  return (
    <section id="Explore">
      <div className="container my-5">
        <div className="row mt-5 pt-5">
          <div className="col-md-3">
            <div className="Exp-left">
              <h2 className="mt-5">Crafted with excellent material.</h2>
              <p className="my-4">
                Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
              </p>
              <button className="btn btn-primary">Explore</button>
            </div>
          </div>
          <div className="col-md-8 mx-5">
            <div className="row mx-2">
              {items.map(item =>(
                <div className="col-md-4 ml-5" key={item.id}>
                <div className="ChairWrap">
                  <img
                    src={item.img}
                    alt=""
                    className="img-fluid product-thumbnail"
                  />
                  <h5>{item.name}</h5>
                  <h6>$ {item.price}</h6>
                  <span
                    class="icon-cross"
                    onClick={()=> HandleEvent(item)}
                  >
                    <img src={svg3} class="img-fluid" />
                  </span>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
