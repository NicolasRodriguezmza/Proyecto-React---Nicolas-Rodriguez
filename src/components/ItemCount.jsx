import React, { useState } from 'react'

const ItemCount = ({handleRestar, handleSumar, cantidad, handleAgregar}) => {

    

  return (
    <div>
        <div className='contador'>
        <button onClick={handleRestar}>-</button>
        <p>{cantidad}</p>
        <button onClick={handleSumar}>+</button>
        </div>
        <button className='agregar' onClick={handleAgregar}>Agregar al Carrito</button>
    </div>
  )
}

export default ItemCount