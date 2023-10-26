import { useContext } from 'react';
import { BsFillTrash2Fill } from 'react-icons/bs';
import { CartContext } from '../../context/CartContext';

const CartItem = ({item}) => {
    const {removeItem} = useContext(CartContext)
  return (
    <div className="d-flex justify-content-between align-items-center text-light border-bottom border-success-subtle  p-4 m-1">
        <img src={item.imagen} alt={item.nombre} width={'10%'}/>
        <p className='fs-5 fw-light'> {item.nombre}</p>
        <p className='fs-5 fw-light'> ${item.precio}</p>
        <p className='fs-5 fw-light'> Cantidad: {item.cantidad}</p>
        <p className='fs-5 fw-light'> Sub Total: ${item.cantidad * item.precio}</p>
        <button className='btn btn-danger m-3' onClick={()=>{removeItem(item.id)}}><BsFillTrash2Fill fill='#D0D3D4'/></button>
    </div>
  )
}

export default CartItem