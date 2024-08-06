import React from "react";
import img1 from '../images/couch.png';
export default function Home() {
  return (
    <section id="Hero">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 pt-5">
            <h1 className="mt-5 pt-5">Modern Interior Design Studio</h1>
            <p className="py-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
              ut dolorem repellat doloribus assumenda laboriosam numquam ullam
              fugit aperiam eaque!
            </p>
            <button className="btn btn-primary btn1 mx-3 rounded-pill">Show Now</button>
            <button className="btn btn-primary btn2 mx-3 rounded-pill">Explore</button>
          </div>
          <div className="col-md-6 mt-5 pt-5">
            <div className="Hero-imgwrap">
            <img src={img1} alt="" class="img-fluid"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
