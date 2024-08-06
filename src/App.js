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
import Cart from './Components/Cart';
import Home from './Components/Home';
import Main from './Main';


function App() {
  return (
    <>
      
      <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
