import React from "react";
import CartWidget from './CartWidget';
import { Menu } from "lucide-react";
import styled from "styled-components"
import {Link} from "react-router-dom"

const NavContainer = styled.nav
function Navbar() {
  return (
    <nav>
      <h2>TUCOMPU</h2>
     <div className="nav-links">
       <Link className="link" to="/Inicio">Inicio</Link>
       <Link className="link" to="/Nosotros">Sobre Nosotros</Link>
       <Link className="link" to="/ItemListContainer">Mas Productos</Link>
      <section>
      <CartWidget/>
      </section>
      
      </div>  
     

    </nav>
  );
}

export default Navbar;

