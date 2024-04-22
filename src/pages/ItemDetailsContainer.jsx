import { Link } from 'react-router-dom'
import Item from '../pages/Item';

const ItemDetailsContainer = ({ computadoras}) =>{
  return (
    <div> 

      <div className='productos'>

          {computadoras.map((prod) => <Item computadora={prod} key={prod.id}/>)}

      </div>
      
  </div>
  )
}

export default ItemDetailsContainer