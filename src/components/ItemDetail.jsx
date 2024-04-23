
const ItemDetail = ({item}) => {


  return (
    <div>

            <div className="ItemTarj">
                <img className="imagen" src={item.img} alt={item.name} />
                 <h4 className="nombre">{item.name}</h4>
                <h4 className="precio">${item.precio}</h4>
                <h4 className="procesador">{item.procesador}</h4>
                <h4 className="ram"> {item.ram}</h4>
                <h4 className="memoria">{item.memory}</h4>

            </div>
    </div>
  )
}

export default ItemDetail