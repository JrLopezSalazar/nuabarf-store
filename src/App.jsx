import "./App.css";
//import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Store from "./pages/Store";
import CalculatorBarf from "./pages/CalculatorBarf";
import NavBar from "./components/NavBar";


function App() {
  return (
    
  //   <Routes>
  
  // <Route element={<NavBar />} />
  //     <Route path="/" element={<Home />} />
  //     <Route path="/store" element={<Store />} />
  //     <Route path="/calculatorbarf" element={<CalculatorBarf />} />
  //     <Route path="/aboutus" element={<AboutUs />} />
    
  // </Routes>
  <div>

    
    <NavBar/>
    <Routes>
  
  
      <Route path="/" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/calculatorbarf" element={<CalculatorBarf />} />
      <Route path="/aboutus" element={<AboutUs />} />
    
  </Routes>
  </div>


  );
}

export default App;
