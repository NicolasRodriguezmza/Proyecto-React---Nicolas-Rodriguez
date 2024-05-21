import { useState, useContext } from "react"
import ItemCount from "./ItemCount"
import { CartContext } from "../context/CartContext";
const ItemDetail = ({item}) => {

  const {carrito, agregarAlCarrito} = useContext(CartContext)
  console.log(carrito);
  
  const  [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
 } 
 const handleSumar = () => { 
     setCantidad(cantidad + 1)
 }
 



  return (
    <div className="ItemDetails">

            <div className="tarjEspecifiaciones">
                <img className="imagen" src={item.img} alt={item.name} />
                 <h4 className="nombre">{item.name}</h4>
                <h4 className="precio">${item.precio}</h4>

               <h3>MAS ESPECIFICACIONES</h3>

                <h4 className="procesador">{item.procesador}</h4>
                <h4 className="ram"> {item.ram}</h4>
                <h4 className="memoria">{item.memory}</h4>

                <ItemCount 
                cantidad={cantidad} 
                handleSumar={handleSumar} 
                handleRestar={handleRestar} 
                handleAgregar={()=>{agregarAlCarrito(item, cantidad)}}/>

            </div>
    </div>
  )
}

export default ItemDetail