import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const Carrito = () => {
    
 const { carrito, vaciarCarrito, precioTotal } = useContext(CartContext);

const handleVaciar = () => {
    vaciarCarrito();
}

return (
<div className="container">
    <h1 className="main-title">Carrito</h1>

    {
        carrito.map((prod) => (
            <div key={prod.id}>
                <br />
                <h3>{prod.name}</h3>
                <p>Precio unit: ${prod.precio}</p>
                <p>Cant: {prod.cantidad}</p>
                <br />
            </div>  
        ))
    }
  <h2>Precio Total: {precioTotal()}</h2>
  <button onClick={handleVaciar}>Vaciar</button>

</div>
  )
} 

export default Carrito