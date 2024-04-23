import { useEffect, useState } from "react";
import { pedirDatos } from "../helpers/pedirDatos";
import ItemList from "../pages/ItemList";

function ItemListContainer() {

  const [computadoras, setComputadoras] = useState([])

  console.log(computadoras);
  useEffect(()=>{
    pedirDatos()
      .then((resp) => {
        setComputadoras(resp);
      })

  },[])
  return (
   <div>
      <ItemList computadoras={computadoras} />
   </div>
  );
}

export default ItemListContainer; 
