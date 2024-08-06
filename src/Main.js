import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Explore from './Components/Explore';
import NavBar from './Components/NavBar';
import HelpSection from './Components/HelpSection';
import Product from './Components/Product';
import Blog from './Components/Blog';
import Foot from './Components/Foot';
import CartBtn from './Components/CartBtn';
import Home from './Components/Home';


const Main=()=>{
    return(
        <>
        <NavBar Title="My Shop"/>
      <Home/>
        <Explore/>
        <About/>
        <HelpSection/>
        <Product/>
        <Blog/>
        <CartBtn />
        <Foot />
        </>
    )
}

export default Main;