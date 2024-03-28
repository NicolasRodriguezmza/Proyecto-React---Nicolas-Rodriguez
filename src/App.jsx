import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
  

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


      <Navbar/>

      <ItemListContainer greeting="Bienvenidos!!"/>


    </>
  )
}

export default App
