import React, { useContext } from 'react'
import { ShoppingCart } from 'lucide-react'
import { CartContext } from '../context/CartContext'

function CartWidget() {

  const{cantidadCarrito} = useContext(CartContext)

  return (

<div className="Carrito">
    <a href="#"><ShoppingCart width={25} height={25} /></a>
    <span> {cantidadCarrito()} </span>
    </div>
  )
}

export default CartWidget