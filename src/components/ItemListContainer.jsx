import { useEffect, useState } from "react";
import Item from "../pages/Item";

function ItemListContainer() {

  const [computadora, setComputadora] = useState([]);

// useEffect(()=>{

//   fetch("data.json")
//     .then((resp) => {
//       return resp.json()
//     })
//     .then((resp) => {
//       setComputadora(resp.resultado);
//     })
//     .catch((err)=>{
//       console.log(err);
//     })

//   },[])

  const [show, setShow] = useState(true);

  function handleShow() {
    setShow(!show);
    console.log("Se presiona el boton");
  }

  return (
    <div>
      {/* <h2>{}</h2>
      <p>{props.precio}</p>
      <button onClick={handleShow}>
        {show ? "ocultar" : "Mas especificaciones"}
      </button>
      {show == true && <p>{props.proc}</p>}
      {show == true && <p>{props.ram}</p>}
      {show == true && <p>{props.disco}</p>} */}
      <h2>hola</h2>
    </div>
  );
}

export default ItemListContainer;
