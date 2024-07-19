import Menu from "./components/Menu";
import About from "./components/About";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom"
import Home from "./components/Home"
import Contact from "./components/Contact";
import Servcies from "./components/Services";
import VehicleList from "./components/Vehiclelist";

// create reach app
// npx create-react-app abc automobiles
// cd abc automobiles
// functional compoenets
// js functions that return jsx to render ui elements
// simpler and easier to wrote as compared to class components
// Class Componet
// extend from Reach.componet
// can hold and manage state and provide lifecycle methods
// they are more complex then the function
// function About(){
//   return(
//     <>
//     <h1>About Sectiom</h1>
//     <p>We will implement it later</p>
//     </>
//   )
// }
// function Menu(){
//   return(
//     <>
//     <h1>This is Menu</h1>
//     </>
//   )
// }
// function About(){
//   return(
//     <>
//     <h1>This is About</h1>
//     </>
//   )
// }
// function Footer(){
//   return(
//     <>
//     <h1>This is About</h1>
//     </>
//   )
// }
function App(){
  return(
    <>
    
    <Menu/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/vehicleList" element={<VehicleList/>}/> *
    <Route path="/services" element={<Servcies/>}/>

    </Routes>
    <Footer/>
    </>
  )
}
export default App;