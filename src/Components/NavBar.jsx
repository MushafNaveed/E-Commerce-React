import React from 'react';
import svg1 from '../images/user.svg';
import svg2 from '../images/cart.svg';

export default function NavBar(props) {
  return (
    <section id='Header'>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <nav className='navbar navbar-expand-lg'>
                        <a href="/" className='navbar-brand me-auto'>{props.Title}</a>
                        <ul className='navbar-nav navbarLinks me-5'>
                            <li className="nav-item"><a className='nav-link'>Home</a></li>
                            <li className="nav-item"><a className='nav-link'>Shop</a></li>
                            <li className="nav-item"><a className='nav-link'>About Us</a></li>
                            <li className="nav-item"><a className='nav-link'>Services</a></li>
                            <li className="nav-item"><a className='nav-link'>Blog</a></li>
                            <li className="nav-item"><a className='nav-link'>Contact Us</a></li>
                        </ul>
                        <ul class="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
						<li><a className="nav-link" href="/"><img src={svg1}/></a></li>
						<li><a className="nav-link" href="/"><img src={svg2}/></a></li>
					</ul>
                    </nav>
                </div>
            </div>
        </div>
    </section>
  );
}
