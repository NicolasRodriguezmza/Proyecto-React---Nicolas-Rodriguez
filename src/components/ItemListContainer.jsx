import { useEffect, useState } from "react";
import { pedirDatos } from "../helpers/pedirDatos";
import ItemDetailsContainer from "../pages/ItemDetailsContainer";

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
      <ItemDetailsContainer computadoras={computadoras} />
   </div>
  );
}

export default ItemListContainer; 
