import React from 'react';
import img8 from "../images/product-1.png"
import img9 from "../images/product-2.png"
import img10 from "../images/product-3.png"


const PopularProducts = () => {
    return (
        <div className="popular-product">
            <div className="container">
                <div className="row">

                    <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                        <div className="product-item-sm d-flex">
                            <div className="thumbnail">
                                <img src={img8} alt="Image" className="img-fluid" />
                            </div>
                            <div className="pt-3">
                                <h3>Nordic Chair</h3>
                                <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio </p>
                                <p><a href="#">Read More</a></p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                        <div className="product-item-sm d-flex">
                            <div className="thumbnail">
                                <img src={img9} alt="Image" className="img-fluid" />
                            </div>
                            <div className="pt-3">
                                <h3>Kruzo Aero Chair</h3>
                                <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio </p>
                                <p><a href="#">Read More</a></p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-0">
                        <div className="product-item-sm d-flex">
                            <div className="thumbnail">
                                <img src={img10} alt="Image" className="img-fluid" />
                            </div>
                            <div className="pt-3">
                                <h3>Ergonomic Chair</h3>
                                <p>Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio </p>
                                <p><a href="#">Read More</a></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PopularProducts;
