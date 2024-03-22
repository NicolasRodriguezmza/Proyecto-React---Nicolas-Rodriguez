import React from 'react'
import { ShoppingCart } from 'lucide-react'

function CartWidget() {
  return (

<div className="Carrito">
    <a href=""><ShoppingCart width={25} height={25} /></a>
    <span>0</span>
    </div>
  )
}

export default CartWidget