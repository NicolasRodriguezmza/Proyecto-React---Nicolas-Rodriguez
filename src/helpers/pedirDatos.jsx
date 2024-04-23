import Data from "../data.json"
export const pedirDatos = () => {
  return new Promise ((resolve, reject)=>{
        resolve(Data);

  })
}
export const PedirItemPorID = (id) => {
  return new Promise((resolve, reject) =>{
    
    const item = Data.find((el) => el.id === id);

    if(item){
      resolve(item); 
    }else{
      reject({
        error: "No se encontro el ID"
    })
      
    }

  })
}
