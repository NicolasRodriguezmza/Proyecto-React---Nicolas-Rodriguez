import Data from "../data.json"
export const pedirDatos = () => {
  return new Promise ((resolve, reject)=>{
    setTimeout(()=>{
        resolve(Data);

    },500)
  })
}
