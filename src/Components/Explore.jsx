import React from "react";
import img2 from "../images/product-1.png";
import img3 from "../images/product-2.png";
import img4 from "../images/product-3.png";
import svg3 from "../images/cross.svg";

export default function Explore() {
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
              <div className="col-md-4 ml-5">
                <div className="ChairWrap">
                  <img
                    src={img2}
                    alt=""
                    className="img-fluid product-thumbnail"
                  />
                  <h5>Nordic Chair</h5>
                  <h6>$50.00</h6>
                  <span class="icon-cross">
                    <img src={svg3} class="img-fluid" />
                  </span>
                </div>
              </div>
              <div className="col-md-4  ml-5">
                <div className="ChairWrap">
                  <img
                    src={img3}
                    alt=""
                    className="img-fluid product-thumbnail"
                  />
                  <h5>Nordic Chair</h5>
                  <h6>$50.00</h6>
                  <span class="icon-cross">
                    <img src={svg3} class="img-fluid" />
                  </span>
                </div>
              </div>
              <div className="col-md-4  ml-5">
                <div className="ChairWrap">
                  <img
                    src={img4}
                    alt=""
                    className="img-fluid product-thumbnail"
                  />
                  <h5>Nordic Chair</h5>
                  <h6>$50.00</h6>
                  <span class="icon-cross">
                    <img src={svg3} class="img-fluid" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
