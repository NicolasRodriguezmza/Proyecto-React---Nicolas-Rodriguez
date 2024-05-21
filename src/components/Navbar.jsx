import CartWidget from './CartWidget';
import { Menu } from "lucide-react";
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <nav className='navbar'>
      <Link to="/" className='logo'><h1>TU COMPU</h1></Link>
       <ul className='menu'>
         <li><Link className="menu-link" to="/">Inicio</Link></li>
         <li><Link className="menu-link" to="/Contacto">Contactenos</Link></li>
         <li><Link className="menu-link" to="/ItemListContainer">Mas Productos</Link></li>
         <li><Link to="/Carrito"><CartWidget/></Link></li>
       </ul>
    </nav>
  );
}

export default Navbar;

