import React from 'react'
import Input from '../components/Input'

const Contacto = () => {
  return (
    <div>
        <form >

            <Input placeHolder='Escriba su Nombre completo' type='text' text='Nombre y Apellido' id='name'/>
            <Input placeholder='Escriba su e-mail' type='email' text='Mail' id='mail' />
            <Input placeHolder='Escriba su mensaje' type='text' text='Mensaje' id='mensaje' />
            <div className='buttonform'>
            <button>Enviar</button>
            </div>    
        </form>

    </div>
  )
}

export default Contacto