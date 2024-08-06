import React from 'react';
import svg1 from '../images/user.svg';
import { Link } from 'react-router-dom';
import Home from './Home';

export default function NavBar(props) {
  return (
    <section id='Header'>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <nav className='navbar navbar-expand-lg sticky-top'>
                        <a href="/" className='navbar-brand me-auto'>{props.Title}</a>
                        <ul className='navbar-nav navbarLinks me-5'>
                            <li className="nav-item"><a className='nav-link' href='#Hero'>Home</a></li>
                            <li className="nav-item"><a className='nav-link' href='#Explore'>Shop</a></li>
                            <li className="nav-item"><a className='nav-link' href='#about'>About Us</a></li>
                            <li className="nav-item"><a className='nav-link' href='#help'>Services</a></li>
                            <li className="nav-item"><a className='nav-link' href='#product'>Products</a></li>
                            <li className="nav-item"><a className='nav-link' href='#blog'>Blog</a></li>
                            <li className="nav-item"><a className='nav-link' href='#footer'>Contact Us</a></li>
                        </ul>
                        <ul class="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
						<li><a className="nav-link" href="/"><img src={svg1}/></a></li>
					</ul>
                    </nav>
                </div>
            </div>
        </div>
    </section>
  );
}


