
import './App.css';
import About from './Components/About';
import Explore from './Components/Explore';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import HelpSection from './Components/HelpSection';
import Product from "./Components/Product"
import Blog from "./Components/Blog"
import Foot from './Components/Foot';

function App() {
  return (
    <>
    <NavBar Title="My Shop"/>
    <Home/>
    <Explore/>
    <About/>
    <HelpSection/>
    <Product/>
    <Blog/>
    <Foot/>
    </>
  );
}

export default App;
