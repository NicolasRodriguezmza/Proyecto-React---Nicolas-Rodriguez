import { useState, useEffect } from "react"
import { PedirItemPorID } from "../helpers/pedirDatos"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
const ItemDetailContainer = () => {

  const [item, setItem] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    console.log(id);

    PedirItemPorID(Number(id))
      .then((resp) => {
        setItem(resp);
      })
  
  },[id])
  
  return (
    <div>
       {item && <ItemDetail item={item}/>}
    </div>
  )
}

export default ItemDetailContainer