import './App.css'
import Navbar from './components/Navbar'
import Main from './pages/Main'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import Footer from './components/Footer'
import Contacto from './pages/Contacto'
import {CartProvider } from './context/CartContext'
import Carrito from './components/Carrito'


function App() {

  
  return (

   <CartProvider>
      

    <BrowserRouter >

      <Navbar/>
      <Routes>

          <Route path='/ItemListContainer'element={<ItemListContainer/>}/>
          <Route path='/Item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/' element={<Main />}/>
          <Route path='/Contacto' element={<Contacto/>}/>
          <Route path='/carrito' element={<Carrito/>}/>

      </Routes>



    </BrowserRouter>

    </CartProvider>
  )
}

export default App
