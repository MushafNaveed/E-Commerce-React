import React from "react";
import svg3 from "../images/truck.svg"
import svg4 from "../images/support.svg"
import svg5 from "../images/bag.svg"
import svg6 from "../images/return.svg"
import img2 from '../images/why-choose-us-img.jpg';


export default function About() {
  return (
    <section id="about">
      <div className="container my-5">
        <div className="row my-5">
          <div className="col-md-6">
            <div className="row my-5">
              <div className="col-md-12">
              <div className="About-Title">
                <div className="TitleHead">
                  <h2 className="my-2 mt-5">Why Chose Us</h2>
                </div>
                <div className="TitleDescrip">
                  <p>
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                    aliquet velit. Aliquam vulputate velit imperdiet dolor
                    tempor tristique.
                </p>
                </div>
              </div>
              </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="icon">
                    <img src={svg3} alt="" />
                    </div>
                    <div className="features">
                        <h6 className="my-3">Fast & Free Shipping</h6>
                        <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="icon">
                    <img src={svg5} alt="" />
                    </div>
                    <div className="features">
                        <h6 className="my-3">Easy to Shop</h6>
                        <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="icon">
                    <img src={svg4} alt="" />
                    </div>
                    <div className="features">
                        <h6 className="my-3">Easy to Shop</h6>
                        <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="icon">
                    <img src={svg6} alt="" />
                    </div>
                    <div className="features">
                        <h6 className="my-3">Easy to Shop</h6>
                        <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                    </div>
                </div>
            </div>
          </div>
          <div className="col-md-6 my-5 px-5">
            <div className="img-wrap my-5">
                <img src={img2} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


// Late reply
// apni zindagi ke phadon main dosre per bhoj na dalo
// Azmaish or musibat
// phone lena
// insan ko sehat or dolat per gurror nahi karna chahiye
// namaz qulit
// guunah ke bad feel
// haq ka nikalna
// note mangne valo ko
// medicine azmaish afsos or dhukh