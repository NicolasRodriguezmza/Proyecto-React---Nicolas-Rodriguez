import React from "react";
import CartWidget from './CartWidget';
function Navbar() {
  return (
    <nav>
      <h2>MERMAID BIKINIS</h2>
     <div className="nav-links">

      <a href="#">INICIO</a>
      <a href="#">SOBRE NOSOTROS</a>
      <a href="#">PRODUCTOS</a>
      <a href="#">+ INFO!</a>
      </div>
     <CartWidget/>
    </nav>
  );
}

export default Navbar;

