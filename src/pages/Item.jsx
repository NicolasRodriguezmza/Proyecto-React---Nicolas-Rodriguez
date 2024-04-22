import { Link } from "react-router-dom"
const Item = ({computadora}) => {
  return (
    <div >
        <img className="imagen" src={computadora.img} alt={computadora.name}/>  
        <div className="ItemTarj">
            <h4 className="nombre">{computadora.name}</h4>
            <h4 className="precio">${computadora.precio}</h4>
            <Link className="ver-mas" to={`/Item/${computadora.id}`}>Ver Mas</Link>
         </div> 
    </div>
  )
}

export default Item