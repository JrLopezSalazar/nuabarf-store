import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
//import Store from "./pages/Store";
import CalculatorBarf from "./pages/CalculatorBarf";
import NavBar from "./components/NavBar";
//import { useState } from "react";
//import ListProducts from "./components/listStore/ListProducts";
//import db from './db.json'
import ListProducts from "./components/listStore/ListProducts";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  //const [dbProducts, setDbProducts] = useState(db);


  //console.log(dbProducts)

  return (
    <>
      {/* Contenedor invisible para ListProducts */}
      
        
      
      
      
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/store" element={<Store />} /> */}
          <Route path="/calculatorbarf" element={<CalculatorBarf />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/listproducts" element={<ListProducts />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />


        </Routes>
        {/* <div className="hidden">
        <ListProducts  dbProducts={dbProducts} />
        </div> */}

      
      
      

      
    </>
  );
}

export default App;
