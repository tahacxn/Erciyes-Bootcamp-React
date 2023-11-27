import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Link,Route,Routes} from "react-router-dom"
// import Home from "./pages/Home"
// import Products from "./pages/Products"
// import ProductsPage from "./pages/ProductsPage";
// import IncreaseDiv from "./State/IncreaseDiv";
// import RandomColor from "./State/RandomColor";
// import RandomNumberAdd from "./State/RandomNumberAdd";
// import RemoveRandomNumber from "./State/RemoveRandomNumber";
import ProductFetch from "./State/ProductFetch";

function App() {
  return (
  <>
  <ProductFetch/>
  {/* <RemoveRandomNumber/>
  <IncreaseDiv/>
  <RandomColor/>
  <RandomNumberAdd/> */}
  {/* <ul style={{display:'flex', justifyContent:'space-evenly'}}>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/products'>Products</Link></li>
  </ul>
  <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/products" element={<Products></Products>}></Route>
    <Route path="/products/:id" element={<ProductsPage></ProductsPage>}></Route>
  </Routes> */}
  </>
  
  );
}

export default App;
