import React from 'react'
import ItemListContainer from './ItemListContainer'
import {Route, Routes} from 'react-router-dom'

function Main() {
  return (
    
    <div className='productos'>
      <Routes>      
          <Route path='/ItemListContainer'element={<ItemListContainer/>}/>
      </Routes>

      {/* <div className='tituloProductos'>
        <h2>NUEVOS PRODUCTOS</h2>
      </div>
      <section className='articulos'>
      <ItemListContainer nombre="HP 14-em" precio="817.000 $" proc="AMD Ryzen 5" disco="Disco Solido" ram="8gb" />
      <ItemListContainer nombre="Lenovo IdeaPAd 1i" precio="450.000$" proc="Intel Celeron N4020" disco="Disco solido 128" ram="8gb"/>
      <ItemListContainer nombre="Acer aspire" precio="892.410 $" proc="AMD Ryzen 3" disco="Disco Solido" ram="16gb"/>
      </section>
  */}
    </div>
   
  )
}
export default Main
