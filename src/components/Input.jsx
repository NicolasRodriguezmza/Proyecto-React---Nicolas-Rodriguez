import React from 'react'

const Input = ({text="test", type="text", placeHolder="Escriba su mensaje...", id="id"}) => {
  return (
    <div>
        <label className='label' htmlFor={id} >{text}</label>
        
        <input type={type} id={id} placeholder={placeHolder} className='input' />

    </div>
  )
}

export default Input