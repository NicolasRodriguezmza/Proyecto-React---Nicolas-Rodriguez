import React from "react";
import CartWidget from './CartWidget';
import { Menu } from "lucide-react";
function Navbar() {
  return (
    <nav>
      <h2>MERMAID BIKINIS</h2>

     
     <div className="nav-links">
    
      <a className="links" href="#">INICIO</a>
      <a className="links" href="#">SOBRE NOSOTROS</a>
      <a className="links" href="#">PRODUCTOS</a>
      <a className="links" href="#">+ INFO!</a>
      <section>
      <CartWidget/>
      </section>
      
      </div>  
      <input type="checkbox" id="check" />
      <label className="icon" For="check">
        <Menu width={20} height={20}  />
      </label>

    </nav>
  );
}

export default Navbar;

