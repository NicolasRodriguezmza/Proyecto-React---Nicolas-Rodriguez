import React, { useState } from 'react'

function UserCard(props) {

    const {counter, setCounter} = useState(0)

    const handleClik = () =>{
        setCounter(counter + 1)
    }
  return (
    <div>
        <h2>{props.name}</h2>
        <h2>{props.age}</h2>
        <button onClick={handleClik}>
            Me gusta 
            <span> {counter}</span>
            </button>
    </div>
  )
}

export default UserCard